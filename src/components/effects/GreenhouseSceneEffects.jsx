import { useMemo } from "react";

const SCENE_TYPE_BY_STEP = {
  intro: "intro",
  "vitre-embuee": "fogged-glass",
  "plante-exposee": "exposed-plant",
  "bruit-pluie": "rain-glass",
  "fleur-fissuree": "cracked-flower",
  "porte-serre": "greenhouse-door",
};

const PROFILES = {
  home: { droplets: 8, mist: "low", bloom: "soft", leaves: "quiet", reflection: "soft" },
  intro: { droplets: 12, mist: "medium", bloom: "soft", leaves: "quiet", reflection: "soft" },
  "fogged-glass": { droplets: 10, mist: "fogged", bloom: "soft", leaves: "quiet", reflection: "streak" },
  "exposed-plant": { droplets: 7, mist: "low", bloom: "strong", leaves: "active", reflection: "shimmer" },
  "rain-glass": { droplets: 18, mist: "medium", bloom: "soft", leaves: "quiet", reflection: "ripple" },
  "cracked-flower": { droplets: 8, mist: "calm", bloom: "particles", leaves: "breathing", reflection: "soft" },
  "greenhouse-door": { droplets: 9, mist: "outward", bloom: "opening", leaves: "breeze", reflection: "opening" },
  "result-limites": { droplets: 7, mist: "low", bloom: "protected", leaves: "quiet", reflection: "curtain" },
  "result-douceur": { droplets: 10, mist: "calm", bloom: "warm", leaves: "breathing", reflection: "soft" },
  "result-filtrage": { droplets: 6, mist: "fogged", bloom: "clear", leaves: "quiet", reflection: "clear-zone" },
  "result-ouverture": { droplets: 8, mist: "outward", bloom: "opening", leaves: "breeze", reflection: "opening" },
};

function sceneTypeFor(stepId, resultKey) {
  if (stepId === "result") return `result-${resultKey || "ouverture"}`;
  return SCENE_TYPE_BY_STEP[stepId] || "home";
}

function makeDroplets(count, seed) {
  return Array.from({ length: count }, (_, index) => {
    const n = seed.length * 19 + index * 37;
    return {
      left: 7 + ((n * 13) % 86),
      top: 5 + ((n * 17) % 78),
      size: 4 + ((n * 7) % 10),
      delay: ((n * 11) % 90) / 10,
      duration: 16 + ((n * 5) % 16),
      slide: index % 3 === 0,
      opacity: 0.16 + (((n * 3) % 18) / 100),
    };
  });
}

export default function GreenhouseSceneEffects({ sceneId, stepId, resultKey }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const profile = PROFILES[sceneType] || PROFILES.home;
  const droplets = useMemo(
    () => makeDroplets(profile.droplets, `greenhouse-${sceneType}`),
    [profile.droplets, sceneType],
  );

  if (sceneId !== "glass-greenhouse") return null;

  return (
    <>
      <div
        className={[
          "greenhouse-effects",
          `greenhouse-effects--${sceneType}`,
          `greenhouse-effects--mist-${profile.mist}`,
          `greenhouse-effects--bloom-${profile.bloom}`,
          `greenhouse-effects--leaves-${profile.leaves}`,
          `greenhouse-effects--reflection-${profile.reflection}`,
        ].join(" ")}
        aria-hidden="true"
      >
      <span className="greenhouse-effects__visible-sheen" />
      <span className="greenhouse-effects__bloom greenhouse-effects__bloom--main" />
      <span className="greenhouse-effects__bloom greenhouse-effects__bloom--edge" />
      <span className="greenhouse-effects__reflection greenhouse-effects__reflection--wide" />
      <span className="greenhouse-effects__reflection greenhouse-effects__reflection--fine" />
      <span className="greenhouse-effects__mist greenhouse-effects__mist--left" />
      <span className="greenhouse-effects__mist greenhouse-effects__mist--right" />
      <span className="greenhouse-effects__mist greenhouse-effects__mist--ground" />
      <span className="greenhouse-effects__clear-zone" />
      <span className="greenhouse-effects__curtain" />
      <span className="greenhouse-effects__door-light" />
      <span className="greenhouse-effects__leaf greenhouse-effects__leaf--left" />
      <span className="greenhouse-effects__leaf greenhouse-effects__leaf--right" />
      <span className="greenhouse-effects__leaf greenhouse-effects__leaf--bottom" />

      <span className="greenhouse-effects__droplets">
        {droplets.map((drop, index) => (
          <span
            key={`drop-${index}`}
            className={`greenhouse-effects__drop${drop.slide ? " greenhouse-effects__drop--slide" : ""}`}
            style={{
              left: `${drop.left}%`,
              top: `${drop.top}%`,
              width: `${drop.size}px`,
              height: `${drop.size * 1.55}px`,
              opacity: drop.opacity,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          />
        ))}
      </span>

      <span className="greenhouse-effects__particles">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </span>

      <span className="greenhouse-effects__airflow greenhouse-effects__airflow--one" />
      <span className="greenhouse-effects__airflow greenhouse-effects__airflow--two" />
      </div>

      {/* Sibling of .greenhouse-effects, NOT nested inside it — this is the
          only way its z-index can actually compete with the text layer
          (z-index 20). Anything nested inside .greenhouse-effects is capped
          by that container's own stacking context (z-index 8), no matter
          what z-index value it's given internally. */}
      <span className="greenhouse-beam-front" aria-hidden="true" />
    </>
  );
}
