import { useMemo } from "react";

const STEP_TYPES = {
  intro: "intro",
  "sentier-divise": "path",
  "carte-mouillee": "map",
  "vent-crete": "wind",
  "etoiles-cachees": "stars",
  "porte-phare": "door",
};

function sceneTypeFor(stepId, resultKey) {
  if (stepId === "result") return `result-${resultKey || "clarte"}`;
  return STEP_TYPES[stepId] || "home";
}

function makeParticles(sceneType) {
  return Array.from({ length: 22 }, (_, index) => {
    const seed = sceneType.length * 31 + index * 47;
    return {
      left: 6 + ((seed * 11) % 88),
      top: 8 + ((seed * 17) % 76),
      size: 2.4 + ((seed * 5) % 24) / 10,
      delay: ((seed * 7) % 90) / 10,
      duration: 14 + ((seed * 13) % 14),
      opacity: 0.28 + ((seed * 3) % 20) / 100,
    };
  });
}

export default function LighthouseSceneEffects({ sceneId, stepId, resultKey }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const particles = useMemo(() => makeParticles(sceneType), [sceneType]);

  if (sceneId !== "mountain-lighthouse") return null;

  return (
    <div className={`lighthouse-effects lighthouse-effects--${sceneType}`} aria-hidden="true">
      <span className="lighthouse-effects__beam lighthouse-effects__beam--main" />
      <span className="lighthouse-effects__beam lighthouse-effects__beam--soft" />
      <span className="lighthouse-effects__mist lighthouse-effects__mist--low" />
      <span className="lighthouse-effects__mist lighthouse-effects__mist--side" />
      <span className="lighthouse-effects__glow lighthouse-effects__glow--far" />
      <span className="lighthouse-effects__glow lighthouse-effects__glow--path" />
      <span className="lighthouse-effects__stars" />
      <span className="lighthouse-effects__particles">
        {particles.map((particle, index) => (
          <i
            key={`lighthouse-particle-${index}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </span>
    </div>
  );
}
