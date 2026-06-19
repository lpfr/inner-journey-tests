import { useMemo } from "react";

/**
 * RoomSceneEffects — chapter 6 "La chambre à deux" ambience layer.
 *
 * Mirrors the pattern already used by SceneEffectsCity.jsx (chapter 4) and
 * GreenhouseSceneEffects.jsx: a single orchestrator component, gated by
 * sceneId, that renders a handful of pure-CSS ambience layers behind the
 * existing text/choice/result content. It never touches layout, copy,
 * scoring or audio — it only adds a quiet visual atmosphere.
 *
 * Conceptual layers (all implemented here, scoped by CSS class rather than
 * split into separate files, to match the codebase's existing convention):
 *   - WarmLampGlowLayer   → .room-effects__lamp-glow
 *   - CurtainBreezeLayer  → .room-effects__curtain
 *   - CupSteamLayer       → .room-effects__steam-group / __steam
 *   - DustMotesLayer      → .room-effects__dust-layer / __dust-mote
 *   - ThreadGlowLayer     → .room-effects__thread-glow
 *   - WindowNightAirLayer → .room-effects__night-air
 *   - SharedLightBalanceEffect → .room-effects__shared-light
 */

const STEP_TO_SCENE_TYPE = {
  intro: "intro",
  "deuxieme-chaise": "second-chair",
  "fil-mains": "thread-cups",
  "tasse-refroidie": "cooling-cup",
  "fenetre-ouverte": "open-window",
  "lumiere-partagee": "shared-light",
};

// One profile per scene moment. Keep counts/opacity low — this chapter asks
// for restraint, not spectacle.
const PROFILES = {
  intro: { lamp: "medium", curtain: true, dust: 6 },
  "second-chair": { lamp: "balanced", dust: 5 },
  "thread-cups": { lamp: "low", threadGlow: "normal", steam: "normal", dust: 4 },
  "cooling-cup": { lamp: "low", steam: "fading", dust: 3, cool: true },
  "open-window": { curtain: true, nightAir: "normal", cool: true, dust: 3 },
  "shared-light": { sharedLight: true, lamp: "medium", steam: "subtle", dust: 5 },
  "result-securite": { lamp: "stable", dust: 3 },
  "result-espace": { curtain: true, nightAir: "normal", cool: true, airy: true, dust: 4 },
  "result-reciprocite": { sharedLight: true, threadGlow: "subtle", dust: 4 },
  "result-authenticite": { lamp: "soft", nightAir: "soft", dust: 3 },
};

function sceneTypeFor(stepId, resultKey) {
  if (!stepId) return "intro";
  if (STEP_TO_SCENE_TYPE[stepId]) return STEP_TO_SCENE_TYPE[stepId];
  if (stepId === "result") return `result-${resultKey || "securite"}`;
  return "intro";
}

function makeDustMotes(count, seed) {
  return Array.from({ length: count }, (_, index) => {
    const n = seed.length * 13 + index * 41;
    return {
      left: 10 + ((n * 17) % 76),
      top: 12 + ((n * 23) % 62),
      size: 2 + ((n * 7) % 4),
      delay: ((n * 11) % 120) / 10,
      duration: 18 + ((n * 9) % 10),
    };
  });
}

export default function RoomSceneEffects({ sceneId, stepId, resultKey, intensity }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const profile = PROFILES[sceneType] || PROFILES.intro;
  const intensityScale = intensity === "medium" ? 1 : intensity === "low" ? 0.7 : 0.85;
  const dustCount = Math.max(0, Math.round((profile.dust || 0) * intensityScale));
  const dustMotes = useMemo(
    () => makeDustMotes(dustCount, `room-${sceneType}`),
    [dustCount, sceneType],
  );

  if (sceneId !== "room-for-two") return null;

  return (
    <div
      className={[
        "room-effects",
        `room-effects--${sceneType}`,
        profile.cool ? "room-effects--cool" : "",
        profile.airy ? "room-effects--airy" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      {profile.lamp && (
        <span className={`room-effects__lamp-glow room-effects__lamp-glow--${profile.lamp}`} />
      )}

      {profile.sharedLight && <span className="room-effects__shared-light" />}

      {profile.curtain && (
        <>
          <span className="room-effects__curtain room-effects__curtain--left" />
          <span className="room-effects__curtain room-effects__curtain--right" />
        </>
      )}

      {profile.nightAir && (
        <span
          className={`room-effects__night-air${
            profile.nightAir === "soft" ? " room-effects__night-air--soft" : ""
          }`}
        />
      )}

      {profile.cool && <span className="room-effects__cool-wash" />}

      {profile.steam && (
        <span
          className={[
            "room-effects__steam-group",
            profile.steam === "fading" ? "room-effects__steam-group--fading" : "",
            profile.steam === "subtle" ? "room-effects__steam-group--subtle" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className="room-effects__steam" />
          <span className="room-effects__steam room-effects__steam--two" />
        </span>
      )}

      {profile.threadGlow && (
        <span
          className={`room-effects__thread-glow${
            profile.threadGlow === "subtle" ? " room-effects__thread-glow--subtle" : ""
          }`}
        />
      )}

      {dustMotes.length > 0 && (
        <span className="room-effects__dust-layer">
          {dustMotes.map((mote, index) => (
            <span
              key={`room-dust-${index}`}
              className="room-effects__dust-mote"
              style={{
                left: `${mote.left}%`,
                top: `${mote.top}%`,
                width: `${mote.size}px`,
                height: `${mote.size}px`,
                animationDelay: `${mote.delay}s`,
                animationDuration: `${mote.duration}s`,
              }}
            />
          ))}
        </span>
      )}
    </div>
  );
}
