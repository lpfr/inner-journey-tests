import { useMemo } from "react";

const STEP_TYPES = {
  couloir: "corridor",
  table: "table",
  fenetre: "window",
  miroir: "mirror",
  lampe: "lamp",
};

function sceneTypeFor(stepId, resultKey) {
  if (stepId === "result") return `result-${resultKey || "securite"}`;
  return STEP_TYPES[stepId] || "home";
}

function makeDust(sceneType) {
  return Array.from({ length: 18 }, (_, index) => {
    const seed = sceneType.length * 37 + index * 29;
    return {
      left: 7 + ((seed * 13) % 86),
      top: 12 + ((seed * 17) % 72),
      size: 1.8 + ((seed * 5) % 18) / 10,
      delay: ((seed * 7) % 120) / 10,
      duration: 18 + ((seed * 11) % 16),
      opacity: 0.2 + ((seed * 3) % 18) / 100,
    };
  });
}

export default function InnerHouseSceneEffects({ sceneId, stepId, resultKey }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const dust = useMemo(() => makeDust(sceneType), [sceneType]);

  if (sceneId !== "inner-house") return null;

  return (
    <div className={`inner-house-effects inner-house-effects--${sceneType}`} aria-hidden="true">
      <span className="inner-house-effects__room-glow inner-house-effects__room-glow--warm" />
      <span className="inner-house-effects__room-glow inner-house-effects__room-glow--blue" />
      <span className="inner-house-effects__room-glow inner-house-effects__room-glow--rose" />
      <span className="inner-house-effects__room-glow inner-house-effects__room-glow--violet" />
      <span className="inner-house-effects__door-light inner-house-effects__door-light--left" />
      <span className="inner-house-effects__door-light inner-house-effects__door-light--right" />
      <span className="inner-house-effects__shadow" />
      <span className="inner-house-effects__voice-wave" />
      <span className="inner-house-effects__dust">
        {dust.map((particle, index) => (
          <i
            key={`inner-house-dust-${index}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              "--dust-opacity": particle.opacity,
            }}
          />
        ))}
      </span>
    </div>
  );
}
