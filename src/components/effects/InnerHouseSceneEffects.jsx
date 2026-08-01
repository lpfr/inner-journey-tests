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
    [9, 18, 3.2, -0.6, -3.2, 0.42],
    [17, 43, 2.6, 0.9, -4.8, 0.34],
    [23, 29, 3.8, -1.4, -3.6, 0.46],
    [31, 68, 3.0, 1.8, -5.2, 0.39],
    [38, 22, 2.4, 0.5, -3.1, 0.32],
    [43, 54, 3.5, -1.1, -4.4, 0.44],
    [49, 37, 2.8, 1.3, -3.7, 0.36],
    [55, 73, 3.1, -0.7, -5.6, 0.41],
    [61, 17, 2.5, 1.5, -3.4, 0.33],
    [67, 48, 4.0, -1.8, -4.9, 0.48],
    [72, 31, 2.7, 0.6, -3.8, 0.35],
    [78, 65, 3.4, 1.1, -5.1, 0.43],
    [84, 24, 2.4, -1.2, -3.3, 0.32],
    [88, 51, 3.1, 0.8, -4.5, 0.38],
    [13, 76, 2.3, 1.4, -4.2, 0.31],
    [27, 12, 3.0, -0.8, -3.5, 0.4],
    [35, 45, 2.2, 1.6, -4.7, 0.3],
    [46, 82, 2.7, -1.5, -5.3, 0.36],
    [58, 60, 2.3, 0.7, -4.1, 0.32],
    [69, 78, 2.9, -0.9, -5.8, 0.39],
    [81, 39, 2.1, 1.2, -3.9, 0.3],
    [92, 70, 2.6, -1.7, -5.4, 0.35],
    [19, 61, 3.6, -1.2, -4.6, 0.43],
    [52, 26, 2.9, 1.4, -3.8, 0.37],
    [74, 84, 3.2, -0.6, -5.9, 0.4],
    [6, 54, 2.5, 1.1, -4.3, 0.34],
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
      opacityLow: Number((opacity * 0.62).toFixed(3)),
      opacitySoft: Number((opacity * 0.82).toFixed(3)),
      driftX,
      driftY,
      blur: 0.7 + (index % 4) * 0.22,
    };
  });
}

function makeFrontDust(sceneType) {
  const sceneShift = (sceneType.length % 5) * 0.7;
  const points = [
    [14, 24, 2.4, 0.4, -1.2, 0.22],
    [21, 58, 2.0, -0.5, -1.5, 0.2],
    [29, 37, 2.8, 0.6, -1.1, 0.24],
    [36, 72, 2.3, -0.4, -1.6, 0.21],
    [44, 28, 2.1, 0.5, -1.3, 0.2],
    [51, 62, 2.7, -0.6, -1.4, 0.24],
    [59, 42, 2.2, 0.4, -1.2, 0.21],
    [67, 76, 2.5, -0.5, -1.7, 0.22],
    [74, 31, 2.0, 0.6, -1.1, 0.2],
    [82, 54, 2.6, -0.4, -1.5, 0.23],
    [90, 23, 2.1, 0.5, -1.3, 0.2],
    [11, 81, 2.7, -0.5, -1.6, 0.22],
    [47, 18, 2.2, 0.4, -1.2, 0.21],
    [71, 15, 2.5, -0.6, -1.4, 0.22],
  ];

  return points.map(([left, top, size, driftX, driftY, opacity], index) => ({
    left: Math.min(92, Math.max(8, left + Math.sin(sceneShift + index * 0.9) * 0.8)),
    top: Math.min(84, Math.max(14, top + Math.cos(sceneShift + index) * 1.1)),
    size,
    delay: -((index * 2.9 + sceneShift) % 16),
    duration: 16 + (index % 5) * 2.2,
    opacity,
    opacitySoft: Number((opacity * 0.78).toFixed(3)),
    driftX,
    driftY,
    blur: 0.9 + (index % 3) * 0.2,
  }));
}

export default function InnerHouseSceneEffects({ sceneId, stepId, resultKey }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const dust = useMemo(() => makeDust(sceneType), [sceneType]);
  const frontDust = useMemo(() => makeFrontDust(sceneType), [sceneType]);

  if (sceneId !== "inner-house") return null;

  return (
    <>
      <div className={`inner-house-effects inner-house-effects--${sceneType}`} aria-hidden="true">
        <span className="inner-house-effects__room-glow inner-house-effects__room-glow--warm" />
        <span className="inner-house-effects__room-glow inner-house-effects__room-glow--blue" />
        <span className="inner-house-effects__room-glow inner-house-effects__room-glow--rose" />
        <span className="inner-house-effects__room-glow inner-house-effects__room-glow--violet" />
        <span className="inner-house-effects__door-light inner-house-effects__door-light--left" />
        <span className="inner-house-effects__door-light inner-house-effects__door-light--right" />
        <span className="inner-house-effects__shadow" />
        <span className="inner-house-effects__haze inner-house-effects__haze--low" />
        <span className="inner-house-effects__haze inner-house-effects__haze--side" />
        <span className="inner-house-effects__haze inner-house-effects__haze--center" />
        <span className="inner-house-effects__voice-wave" />
        <span className="inner-house-effects__dust-field inner-house-effects__dust-field--far" />
        <span className="inner-house-effects__dust-field inner-house-effects__dust-field--near" />
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
                "--dust-opacity-low": particle.opacityLow,
                "--dust-opacity": particle.opacity,
                "--dust-opacity-soft": particle.opacitySoft,
                "--dust-drift-x": `${particle.driftX}rem`,
                "--dust-drift-y": `${particle.driftY}rem`,
                "--dust-blur": `${particle.blur}px`,
              }}
            />
          ))}
        </span>
      </div>
      <div className={`inner-house-front-dust inner-house-front-dust--${sceneType}`} aria-hidden="true">
        {frontDust.map((particle, index) => (
          <i
            key={`inner-house-front-dust-${index}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              "--front-dust-opacity": particle.opacity,
              "--front-dust-opacity-soft": particle.opacitySoft,
              "--front-dust-drift-x": `${particle.driftX}rem`,
              "--front-dust-drift-y": `${particle.driftY}rem`,
              "--front-dust-blur": `${particle.blur}px`,
            }}
          />
        ))}
      </div>
    </>
  );
}
