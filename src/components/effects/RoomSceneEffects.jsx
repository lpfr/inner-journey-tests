import { useMemo } from "react";

/**
 * RoomSceneEffects — chapter 6 "La chambre à deux" ambience layer (v4).
 *
 * Builds on the proven-reliable technique from this chapter's earlier
 * rounds and chapter 5's later refinements:
 *   - No mix-blend-mode, no isolation (the chapter 6 saga's root cause).
 *   - Glow/light layers use organic multi-keyframe drift, not simple
 *     opacity-only breathing (learned from the greenhouse beam).
 *   - Small elements (dust, steam) get their visual presence from an
 *     internal gradient highlight, not an external box-shadow halo
 *     (learned from the falling-leaf glow-ring feedback).
 *   - Everything stays BEHIND the text layer (z-index 3, established and
 *     already verified working) — deliberately no front-layer elements
 *     here, since this chapter's theme ("nothing between two people") is
 *     better served by not adding things drifting in front of the text.
 */

const STEP_TO_SCENE_TYPE = {
  intro: "intro",
  "deuxieme-chaise": "second-chair",
  "fil-mains": "thread-cups",
  "tasse-refroidie": "cooling-cup",
  "fenetre-ouverte": "open-window",
  "lumiere-partagee": "shared-light",
};

// glow: "warm" | "cool" | "soft" | "shared"
// dust: how many floating motes
// curtain / thread / steam / nightAir: optional accents
const PROFILES = {
  intro: { glow: "warm", dust: 5, curtain: true },
  "second-chair": { glow: "shared", dust: 5 },
  "thread-cups": { glow: "warm", dust: 3, thread: "normal", steam: "normal" },
  "cooling-cup": { glow: "soft", dust: 2, steam: "fading" },
  "open-window": { glow: "cool", dust: 2, curtain: true, nightAir: "normal" },
  "shared-light": { glow: "shared", dust: 4, steam: "subtle" },
  "result-securite": { glow: "warm", dust: 2 },
  "result-espace": { glow: "cool", dust: 3, curtain: true, nightAir: "normal" },
  "result-reciprocite": { glow: "shared", dust: 3, thread: "subtle" },
  "result-authenticite": { glow: "soft", dust: 2, nightAir: "soft" },
};

function sceneTypeFor(stepId, resultKey) {
  if (!stepId) return "intro";
  if (STEP_TO_SCENE_TYPE[stepId]) return STEP_TO_SCENE_TYPE[stepId];
  if (stepId === "result") return `result-${resultKey || "securite"}`;
  return "intro";
}

function makeDustMotes(count, seed) {
  return Array.from({ length: count }, (_, index) => {
    const n = seed.length * 23 + index * 41;
    return {
      left: 10 + ((n * 17) % 76),
      top: 14 + ((n * 19) % 64),
      size: 3 + ((n * 7) % 4),
      delay: (index / Math.max(count, 1)) * 10 + ((n * 7) % 30) / 10,
      duration: 14 + ((n * 9) % 10),
    };
  });
}

export default function RoomSceneEffects({ sceneId, stepId, resultKey }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const profile = PROFILES[sceneType] || PROFILES.intro;
  const dustMotes = useMemo(
    () => makeDustMotes(profile.dust || 0, `room-dust-${sceneType}`),
    [profile.dust, sceneType],
  );

  if (sceneId !== "room-for-two") return null;

  return (
    <div className={`room-effects room-effects--${sceneType}`} aria-hidden="true">
      <span className={`room-effects__glow room-effects__glow--${profile.glow}`} />

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

      {profile.thread && (
        <span
          className={`room-effects__thread${
            profile.thread === "subtle" ? " room-effects__thread--subtle" : ""
          }`}
        />
      )}

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
