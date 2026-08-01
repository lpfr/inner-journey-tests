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
  const sceneShift = (sceneType.length % 7) * 0.8;
  const points = [
    [9, 18, 2.2, -0.6, -3.2, 0.18],
    [17, 43, 1.6, 0.9, -4.8, 0.14],
    [23, 29, 2.8, -1.4, -3.6, 0.2],
    [31, 68, 1.9, 1.8, -5.2, 0.16],
    [38, 22, 1.4, 0.5, -3.1, 0.13],
    [43, 54, 2.5, -1.1, -4.4, 0.19],
    [49, 37, 1.8, 1.3, -3.7, 0.15],
    [55, 73, 2.1, -0.7, -5.6, 0.17],
    [61, 17, 1.5, 1.5, -3.4, 0.14],
    [67, 48, 2.7, -1.8, -4.9, 0.2],
    [72, 31, 1.7, 0.6, -3.8, 0.15],
    [78, 65, 2.3, 1.1, -5.1, 0.18],
    [84, 24, 1.4, -1.2, -3.3, 0.13],
    [88, 51, 2.0, 0.8, -4.5, 0.16],
    [13, 76, 1.3, 1.4, -4.2, 0.12],
    [27, 12, 2.0, -0.8, -3.5, 0.17],
    [35, 45, 1.2, 1.6, -4.7, 0.12],
    [46, 82, 1.7, -1.5, -5.3, 0.15],
    [58, 60, 1.3, 0.7, -4.1, 0.13],
    [69, 78, 1.9, -0.9, -5.8, 0.16],
    [81, 39, 1.1, 1.2, -3.9, 0.12],
    [92, 70, 1.6, -1.7, -5.4, 0.14],
  ];

  return points.map(([left, top, size, driftX, driftY, opacity], index) => {
    const delay = -((index * 3.7 + sceneShift) % 18);
    return {
      left: Math.min(94, Math.max(6, left + Math.sin(sceneShift + index) * 1.1)),
      top: Math.min(86, Math.max(8, top + Math.cos(sceneShift + index * 0.7) * 1.4)),
      size,
      delay,
      duration: 18 + (index % 7) * 2.4,
      opacity,
      driftX,
      driftY,
      blur: 0.7 + (index % 4) * 0.22,
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
              "--dust-drift-x": `${particle.driftX}rem`,
              "--dust-drift-y": `${particle.driftY}rem`,
              "--dust-blur": `${particle.blur}px`,
            }}
          />
        ))}
      </span>
    </div>
  );
}
