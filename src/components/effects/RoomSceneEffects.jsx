/**
 * RoomSceneEffects — chapter 6 "La chambre à deux" ambience layer (v3).
 *
 * Builds on the simplified, proven-reliable v2 technique (plain opacity /
 * box-shadow glow, no mix-blend-mode, no isolation, no JS-computed
 * positions) and reintroduces per-scene variation along three safe
 * dimensions only:
 *   - glow color/shape  → warm / cool / soft / shared (two-lobe, balanced)
 *   - dot count         → how many floating light specks (fixed pool, no
 *                          randomness)
 *   - curtain / thread  → optional extra accents for window & connection
 *                          moments
 *
 * Still gated by sceneId, so it only ever renders for "room-for-two" and
 * never touches any other chapter.
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
// dots: how many of the fixed DOT_POOL positions to render (0-4)
// curtain / thread: optional accent layers
const PROFILES = {
  intro: { glow: "warm", dots: 4, curtain: true },
  "second-chair": { glow: "shared", dots: 4 },
  "thread-cups": { glow: "warm", dots: 3, thread: true },
  "cooling-cup": { glow: "soft", dots: 2 },
  "open-window": { glow: "cool", dots: 2, curtain: true },
  "shared-light": { glow: "shared", dots: 4 },
  "result-securite": { glow: "warm", dots: 2 },
  "result-espace": { glow: "cool", dots: 3, curtain: true },
  "result-reciprocite": { glow: "shared", dots: 3, thread: true },
  "result-authenticite": { glow: "soft", dots: 2 },
};

// Fixed positions, no randomness — first N are used depending on profile.dots.
const DOT_POOL = [
  { left: "18%", top: "30%", delay: "0s" },
  { left: "72%", top: "24%", delay: "1.4s" },
  { left: "36%", top: "62%", delay: "2.8s" },
  { left: "64%", top: "70%", delay: "4.2s" },
];

function sceneTypeFor(stepId, resultKey) {
  if (!stepId) return "intro";
  if (STEP_TO_SCENE_TYPE[stepId]) return STEP_TO_SCENE_TYPE[stepId];
  if (stepId === "result") return `result-${resultKey || "securite"}`;
  return "intro";
}

export default function RoomSceneEffects({ sceneId, stepId, resultKey }) {
  if (sceneId !== "room-for-two") return null;

  const sceneType = sceneTypeFor(stepId, resultKey);
  const profile = PROFILES[sceneType] || PROFILES.intro;
  const dots = DOT_POOL.slice(0, profile.dots || 0);

  return (
    <div className={`room-effects room-effects--${sceneType}`} aria-hidden="true">
      <span className={`room-effects__glow room-effects__glow--${profile.glow}`} />

      {profile.curtain && (
        <>
          <span className="room-effects__curtain room-effects__curtain--left" />
          <span className="room-effects__curtain room-effects__curtain--right" />
        </>
      )}

      {profile.thread && <span className="room-effects__thread" />}

      {dots.map((dot, index) => (
        <span
          key={`room-dot-${index}`}
          className="room-effects__dot"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
}
