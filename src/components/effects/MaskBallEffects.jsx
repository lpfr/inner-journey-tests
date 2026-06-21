/**
 * MaskBallEffects — chapter 7 "Le bal des masques" ambience layer.
 *
 * One drifting, semi-translucent masquerade mask with a few sparkle
 * points that move together with it (nested inside the same drifting
 * wrapper, so they "follow" without needing real position tracking).
 *
 * Built using the techniques validated across chapters 5 & 6:
 *   - No mix-blend-mode, no isolation.
 *   - Organic multi-stop drift (position/rotation/scale together on
 *     non-aligned keyframe stops), not a simple back-and-forth.
 *   - Internal gradient highlight for the mask itself, not an external
 *     box-shadow halo.
 *   - animation-fill-mode: backwards on delayed sparkle animations, to
 *     avoid the "solid then vanishes" jump found with the dust motes.
 *
 * CRITICAL constraint from the brief: must never cover text. Stays
 * behind the text layer (z-index 3, same tier proven safe in chapter 6).
 * Positioned in the left/right margins outside the centered content
 * column on desktop; on mobile (where that margin nearly disappears) the
 * CSS forcibly pins it into a small top or bottom corner instead of
 * trusting the per-scene vertical position, since the safe margin is
 * much harder to guarantee there.
 */

const STEP_TO_SCENE_TYPE = {
  intro: "intro",
  "masque-choisi": "masque-choisi",
  "premiere-danse": "premiere-danse",
  "couloir-miroirs": "couloir-miroirs",
  "musique-arrete": "musique-arrete",
  balcon: "balcon",
};

// zone: which side margin it lives in on desktop (also used on mobile to
// pick "pin to top" vs "pin to bottom").
// top: vertical position (desktop only — overridden on mobile).
// size: mask width in px. opacity: peak opacity.
const PROFILES = {
  intro: { zone: "left", top: 12, size: 190, opacity: 0.4 },
  "masque-choisi": { zone: "right", top: 56, size: 215, opacity: 0.46 },
  "premiere-danse": { zone: "left", top: 64, size: 165, opacity: 0.38 },
  "couloir-miroirs": { zone: "right", top: 10, size: 225, opacity: 0.48 },
  "musique-arrete": { zone: "left", top: 36, size: 178, opacity: 0.4 },
  balcon: { zone: "right", top: 68, size: 200, opacity: 0.42 },
  "result-performance": { zone: "left", top: 16, size: 212, opacity: 0.45 },
  "result-sauveur": { zone: "right", top: 60, size: 188, opacity: 0.4 },
  "result-effacement": { zone: "left", top: 66, size: 162, opacity: 0.32 },
  "result-conformite": { zone: "right", top: 14, size: 200, opacity: 0.42 },
};

function sceneTypeFor(stepId, resultKey) {
  if (!stepId || stepId === "intro") return "intro";
  if (STEP_TO_SCENE_TYPE[stepId]) return STEP_TO_SCENE_TYPE[stepId];
  if (stepId === "result") return `result-${resultKey || "performance"}`;
  return "intro";
}

export default function MaskBallEffects({ sceneId, stepId, resultKey }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const profile = PROFILES[sceneType] || PROFILES.intro;

  if (sceneId !== "mask-ball") return null;

  return (
    <div
      className={`mask-ball-effects mask-ball-effects--${profile.zone}`}
      style={{
        top: `${profile.top}%`,
        width: `${profile.size}px`,
        height: `${Math.round(profile.size * 0.55)}px`,
        opacity: profile.opacity,
      }}
      aria-hidden="true"
    >
      <span className="mask-ball-effects__mask" />
      <span className="mask-ball-effects__sparkle mask-ball-effects__sparkle--1" />
      <span className="mask-ball-effects__sparkle mask-ball-effects__sparkle--2" />
      <span className="mask-ball-effects__sparkle mask-ball-effects__sparkle--3" />
    </div>
  );
}
