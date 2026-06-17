import { useMemo } from "react";

const SCENE_PROFILES = {
  home: { glow: "quiet", fog: "soft", dust: 22, debris: 2, crack: "low", reflection: "soft" },
  intro: { glow: "quiet", fog: "soft", dust: 24, debris: 3, crack: "low", reflection: "soft" },
  fissure: { glow: "red", fog: "medium", dust: 32, debris: 4, crack: "high", reflection: "medium" },
  immeubles: { glow: "violet", fog: "dense", dust: 34, debris: 5, crack: "medium", reflection: "soft" },
  pont: { glow: "blue", fog: "bridge", dust: 26, debris: 3, crack: "low", reflection: "medium" },
  alarmes: { glow: "alarm", fog: "dense", dust: 38, debris: 5, crack: "medium", reflection: "high" },
  lampadaire: { glow: "warm", fog: "soft", dust: 16, debris: 1, crack: "low", reflection: "warm" },
  "result-ancrage": { glow: "warm", fog: "soft", dust: 12, debris: 1, crack: "low", reflection: "warm" },
  "result-abri": { glow: "shelter", fog: "inside", dust: 10, debris: 0, crack: "none", reflection: "soft" },
  "result-mouvement": { glow: "path", fog: "soft", dust: 18, debris: 2, crack: "path", reflection: "path" },
  "result-appui": { glow: "support", fog: "soft", dust: 16, debris: 2, crack: "low", reflection: "warm" },
};

function sceneTypeFor(stepId, resultKey) {
  if (!stepId || stepId === "intro") return stepId || "home";
  if (stepId === "fissure") return "fissure";
  if (stepId === "immeubles") return "immeubles";
  if (stepId === "pont") return "pont";
  if (stepId === "alarmes") return "alarmes";
  if (stepId === "lampadaire") return "lampadaire";
  if (stepId === "result") return `result-${resultKey || "ancrage"}`;
  return "home";
}

function makeParticles(count, seed) {
  return Array.from({ length: count }, (_, index) => {
    const n = index + seed.length;
    const left = (n * 17 + seed.charCodeAt(index % seed.length)) % 100;
    const top = (n * 29 + seed.charCodeAt((index + 3) % seed.length)) % 100;
    const size = 3 + ((n * 7) % 11);
    const delay = ((n * 11) % 70) / 10;
    const duration = 8 + ((n * 13) % 12);
    const drift = -30 + ((n * 19) % 60);
    return { left, top, size, delay, duration, drift };
  });
}

function makeDebris(count, seed) {
  return Array.from({ length: count }, (_, index) => {
    const n = index + seed.length * 2;
    return {
      left: (n * 23 + 9) % 100,
      top: 8 + ((n * 31) % 72),
      size: 6 + ((n * 5) % 15),
      delay: ((n * 7) % 80) / 10,
      duration: 15 + ((n * 11) % 14),
      rotate: -28 + ((n * 17) % 56),
    };
  });
}

export default function SceneEffectsCity({ sceneId, stepId, resultKey, selectedChoiceId }) {
  const sceneType = sceneTypeFor(stepId, resultKey);
  const profile = SCENE_PROFILES[sceneType] || SCENE_PROFILES.home;
  const dust = useMemo(() => makeParticles(profile.dust, sceneType), [profile.dust, sceneType]);
  const foregroundDust = useMemo(
    () => makeParticles(Math.max(4, Math.ceil(profile.dust * 0.22)), `${sceneType}-front`),
    [profile.dust, sceneType],
  );
  const frontmostDust = useMemo(
    () => makeParticles(Math.max(8, Math.ceil(profile.dust * 0.36)), `${sceneType}-frontmost`),
    [profile.dust, sceneType],
  );
  const debris = useMemo(() => makeDebris(profile.debris, sceneType), [profile.debris, sceneType]);

  if (sceneId !== "sinking-city") return null;

  return (
    <>
      <div
        className={[
          "city-effects",
          `city-effects--${sceneType}`,
          `city-effects--glow-${profile.glow}`,
          `city-effects--fog-${profile.fog}`,
          `city-effects--crack-${profile.crack}`,
          `city-effects--reflection-${profile.reflection}`,
          selectedChoiceId ? "is-choice-pulse" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        <span className="city-effects__vibration" />
        <span className="city-effects__neon city-effects__neon--cyan" />
        <span className="city-effects__neon city-effects__neon--violet" />
        <span className="city-effects__neon city-effects__neon--red" />
        <span className="city-effects__fog city-effects__fog--ground" />
        <span className="city-effects__fog city-effects__fog--distance" />
        <span className="city-effects__reflection" />
        <span className="city-effects__crack city-effects__crack--main" />
        <span className="city-effects__crack city-effects__crack--side" />
        <span className="city-effects__path-light" />
        <span className="city-effects__support-light" />

        <span className="city-effects__dust-layer">
          {dust.map((particle, index) => (
            <span
              key={`dust-${index}`}
              className="city-effects__dust"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                "--drift-x": `${particle.drift}px`,
              }}
            />
          ))}
        </span>

        <span className="city-effects__debris-layer">
          {debris.map((item, index) => (
            <span
              key={`debris-${index}`}
              className="city-effects__debris"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                width: `${item.size}px`,
                height: `${item.size * 0.7}px`,
                rotate: `${item.rotate}deg`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
              }}
            />
          ))}
        </span>

        {selectedChoiceId && <span className="city-effects__choice-flash" />}
      </div>

      <div className="city-effects city-effects--foreground" aria-hidden="true">
        <span className="city-effects__dust-layer city-effects__dust-layer--foreground">
          {foregroundDust.map((particle, index) => (
          <span
            key={`foreground-dust-${index}`}
            className="city-effects__dust city-effects__dust--foreground"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              "--drift-x": `${particle.drift}px`,
            }}
          />
        ))}
        </span>
      </div>

      <div className="city-effects city-effects--frontmost" aria-hidden="true">
        <span className="city-effects__dust-layer city-effects__dust-layer--frontmost">
          {frontmostDust.map((particle, index) => (
            <span
              key={`frontmost-dust-${index}`}
              className="city-effects__dust city-effects__dust--frontmost"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size + 5}px`,
                height: `${particle.size + 5}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration + 1}s`,
                "--drift-x": `${particle.drift * 0.9}px`,
              }}
            />
          ))}
        </span>
      </div>
    </>
  );
}
