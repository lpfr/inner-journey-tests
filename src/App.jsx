import { useEffect, useMemo, useRef, useState } from "react";
import { useAudio } from "./hooks/useAudio";
import { loadOne } from "./hooks/useImageLoader";
import { scenes, getSceneById } from "./scenes/index.js";
import Home from "./components/Home.jsx";
import SceneIntro from "./components/SceneIntro.jsx";
import SceneQuestion from "./components/SceneQuestion.jsx";
import SceneResult from "./components/SceneResult.jsx";
import SceneEffects from "./components/SceneEffects.jsx";
import "./styles.css";

const PRELOAD_IMAGES = [
  "/img/station_intro.png",
  "/img/train_rest.png",
  "/img/train_release.png",
  "/img/train_connection.png",
  "/img/train_direction.png",
  "/img/train_interior.png",
  "/img/conductor_letter.png",
  "/img/ending_rest.png",
  "/img/ending_release.png",
  "/img/ending_connection.png",
  "/img/ending_direction.png",
  "/scenes/candy-forest/candy_forest_home.png",
  "/scenes/candy-forest/forest_opening.png",
  "/scenes/candy-forest/glowing_candy.png",
  "/scenes/candy-forest/talking_fox.png",
  "/scenes/candy-forest/candy_rain.png",
  "/scenes/candy-forest/mirror_abandoned_self.png",
  "/scenes/candy-forest/marshmallow_tree.png",
  "/scenes/candy-forest/notification_fireflies.png",
  "/scenes/candy-forest/magic_map.png",
  "/scenes/candy-forest/sugar_door_waiting.png",
  "/scenes/candy-forest/noisy_forest_fatigue.png",
  "/scenes/candy-forest/ending_satisfaction.png",
  "/scenes/candy-forest/ending_control.png",
  "/scenes/candy-forest/ending_structure.png",
  "/scenes/candy-forest/ending_emotion.png",
];

const HOME_CARDS = {
  "rain-station": {
    status: "Disponible",
    title: "Période difficile",
    question: "De quel soutien as-tu besoin ?",
    world: "La Gare sous la Pluie",
  },
  "fog-museum": {
    status: "Disponible",
    title: "Exploration intérieure",
    question: "Qu’est-ce qui t’attire en silence ?",
    world: "Le musée dans la brume",
  },
  "candy-forest": {
    status: "Disponible",
    title: "Maîtrise de soi",
    question: "Qu’est-ce qui t’éloigne de ton intention ?",
    world: "La Forêt des Bonbons",
  },
  "sinking-city": {
    status: "Bientôt disponible",
    title: "Instabilité intérieure",
    question: "Que faire quand tout vacille ?",
    world: "La ville qui s’effondre",
  },
  "glass-greenhouse": {
    status: "Bientôt disponible",
    title: "Grande sensibilité",
    question: "Comment te protéger sans te fermer ?",
    world: "La serre de verre",
  },
  "room-for-two": {
    status: "Bientôt disponible",
    title: "Lien à l’autre",
    question: "Que cherches-tu dans la relation ?",
    world: "La chambre à deux",
  },
  "mask-ball": {
    status: "Bientôt disponible",
    title: "Rôles et masques",
    question: "Quel rôle te fatigue ?",
    world: "Le bal des masques",
  },
  "mountain-lighthouse": {
    status: "Bientôt disponible",
    title: "Direction intérieure",
    question: "Quel repère peut te guider ?",
    world: "Le phare au sommet",
  },
  "inner-house": {
    status: "Bientôt disponible",
    title: "Voix intérieures",
    question: "Quelle part de toi parle le plus fort ?",
    world: "Les quatre voix dans la maison",
  },
  "four-rivers": {
    status: "Bientôt disponible",
    title: "Manières de continuer",
    question: "Comment avances-tu quand c’est difficile ?",
    world: "Les quatre rivières",
  },
};

function addScores(base, delta) {
  const next = { ...base };
  Object.entries(delta || {}).forEach(([key, value]) => {
    next[key] = (next[key] || 0) + (value || 0);
  });
  return next;
}

function pickResult(scores, resultTypes, tieBreakOrder = []) {
  const fallbackOrder = resultTypes.filter(key => !tieBreakOrder.includes(key));
  const orderedTypes = [...tieBreakOrder, ...fallbackOrder];
  const rankByType = new Map(orderedTypes.map((key, index) => [key, index]));

  return resultTypes
    .map(key => [key, scores[key] || 0])
    .sort((a, b) => {
      const scoreDiff = b[1] - a[1];
      if (scoreDiff !== 0) return scoreDiff;
      return (rankByType.get(a[0]) ?? Number.MAX_SAFE_INTEGER) - (rankByType.get(b[0]) ?? Number.MAX_SAFE_INTEGER);
    })[0]?.[0];
}

function useScenePhases(delays) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const resetTimer = window.setTimeout(() => setPhase(0), 0);
    const timers = (delays || []).map((delay, index) =>
      window.setTimeout(() => setPhase(index + 1), delay),
    );

    return () => {
      window.clearTimeout(resetTimer);
      timers.forEach(timer => window.clearTimeout(timer));
    };
  }, [delays]);

  return phase;
}

function makeRainParticles(count, seed, intensity = 1) {
  let state = seed;
  const rand = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };

  return Array.from({ length: count }, () => {
    const depthRoll = rand();
    const depth = depthRoll < 0.34 ? "far" : depthRoll < 0.74 ? "mid" : "near";
    const thicknessRoll = rand();
    const thickness = thicknessRoll < 0.45 ? "thin" : thicknessRoll < 0.82 ? "mid" : "heavy";
    const brightnessRoll = rand();
    const brightness = brightnessRoll < 0.34 ? "dark" : brightnessRoll < 0.74 ? "soft" : "bright";
    const x = rand() * 1.1;
    const y = rand() * 1.15 - 0.08;
    const length =
      (depth === "far" ? 12 : depth === "mid" ? 24 : 36) +
      rand() * (depth === "far" ? 12 : depth === "mid" ? 18 : 28) * intensity;
    const width =
      thickness === "thin"
        ? 0.6 + rand() * 0.5
        : thickness === "mid"
          ? 1 + rand() * 0.7
          : 1.4 + rand() * 0.9;
    const speed = depth === "far" ? 0.28 + rand() * 0.28 : depth === "mid" ? 0.42 + rand() * 0.36 : 0.6 + rand() * 0.38;
    const wind = (rand() - 0.5) * (depth === "far" ? 0.12 : depth === "mid" ? 0.22 : 0.34);
    const opacity = depth === "far" ? 0.1 + rand() * 0.18 : depth === "mid" ? 0.18 + rand() * 0.34 : 0.34 + rand() * 0.42;
    const streak = depth === "far" ? 0.6 : depth === "mid" ? 0.9 : 1.15;

    return {
      id: rand().toString(36).slice(2),
      brightness,
      depth,
      thickness,
      x,
      y,
      length,
      width,
      speed,
      wind,
      opacity,
      streak,
      phase: rand(),
      phaseSpeed: 0.004 + rand() * 0.01,
    };
  });
}

function drawRainFrame(ctx, width, height, particles, time, variant) {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  const windBoost = variant === "carriage" ? 1.18 : 0;
  const depthBoost = variant === "carriage" ? 1.1 : 0.95;

  for (const particle of particles) {
    const oscillation = Math.sin(time * particle.phaseSpeed + particle.phase * Math.PI * 2);
    const x = (particle.x + time * particle.wind * windBoost + oscillation * 0.004) * width;
    let y = ((particle.y + (time * particle.speed * depthBoost) % 1) % 1) * height;
    if (y < -particle.length) y += height + particle.length * 2;
    if (y > height + particle.length) y -= height + particle.length * 2;

    const alpha = particle.opacity * (0.9 + oscillation * 0.1);
    const streakLength = particle.length * particle.streak * (particle.depth === "near" ? 1.2 : 1);
    const color =
      particle.brightness === "dark"
        ? `rgba(157, 182, 207, ${alpha * 0.4})`
        : particle.brightness === "soft"
          ? `rgba(235, 243, 251, ${alpha * 0.62})`
          : `rgba(255, 255, 255, ${alpha * 0.84})`;

    ctx.strokeStyle = color;
    ctx.lineWidth = particle.width;
    ctx.lineCap = "round";
    ctx.shadowBlur = particle.depth === "near" ? 4 : 0;
    ctx.shadowColor = particle.brightness === "bright" ? "rgba(255,255,255,0.22)" : "rgba(175,205,235,0.1)";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + particle.wind * width * 0.16 * windBoost, y + streakLength);
    ctx.stroke();
  }

  ctx.restore();
}

function RainCanvas({ variant = "global" }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });

  const config = useMemo(() => {
    if (variant === "carriage") {
      return { count: 360, seed: 33, intensity: 1.15 };
    }
    return { count: 240, seed: 17, intensity: 0.95 };
  }, [variant]);

  useEffect(() => {
    particlesRef.current = makeRainParticles(config.count, config.seed, config.intensity);
  }, [config]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let mounted = true;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = { width: rect.width, height: rect.height };
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) {
      ro.observe(canvas.parentElement);
    }
    resize();

    const tick = now => {
      if (!mounted) return;
      const { width, height } = sizeRef.current;
      if (width && height) {
        drawRainFrame(context, width, height, particlesRef.current, now / 1000, variant);
      }
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      mounted = false;
      ro.disconnect();
      window.cancelAnimationFrame(frameRef.current);
    };
  }, [variant]);

  return <canvas ref={canvasRef} className={`rain-canvas rain-canvas--${variant}`} aria-hidden="true" />;
}

function Background({ scene, step, resultKey }) {
  const src = useMemo(() => {
    if (!scene) return scenes[0].coverImage;
    if (step?.id === "intro") return scene.introImage || scene.background || scene.coverImage || "/img/station_intro.png";
    if (step?.image) return step.image;
    if (step?.id === "carriage") return "/img/train_interior.png";
    if (step?.id === "letter") return "/img/conductor_letter.png";
    if (step?.id === "result") return scene.results?.[resultKey]?.image || "/img/ending_" + (resultKey || "rest") + ".png";
    return scene.coverImage || scene.background || "/img/station_intro.png";
  }, [scene, step, resultKey]);

  return (
    <div className={"background background--" + (step?.id || "home")}>
      <img src={src} alt="" className="background-image" />
      <div className="background-drape" />
    </div>
  );
}

function Atmosphere({ step, sceneId }) {
  const showRain = Boolean(step?.rain);
  return (
    <div className={"atmosphere atmosphere--" + (step?.id || "home")}>
      {showRain && <RainCanvas variant={step.rainVariant || "global"} />}
      {sceneId === "fog-museum" && <div className="fog-overlay" />}
      <div className="mist mist--left" />
      <div className="mist mist--right" />
    </div>
  );
}


const PARTICLE_CONFIG = [
  [8, 16, 2.2, 0.82, 8.4, 0.0, false],
  [18, 31, 1.4, 0.62, 11.2, 1.3, true],
  [33, 18, 2.8, 0.74, 9.6, 0.7, false],
  [44, 11, 1.8, 0.55, 13.1, 2.4, true],
  [59, 27, 3.2, 0.78, 7.8, 0.3, false],
  [71, 19, 1.2, 0.48, 14.6, 3.1, true],
  [83, 35, 2.5, 0.68, 10.3, 1.8, false],
  [92, 13, 1.6, 0.58, 12.4, 0.6, true],
  [14, 57, 2.0, 0.72, 9.1, 2.9, false],
  [27, 71, 1.3, 0.44, 15.8, 1.1, true],
  [45, 63, 3.5, 0.8, 8.7, 0.4, false],
  [58, 82, 1.8, 0.52, 11.9, 3.6, true],
  [74, 64, 2.3, 0.65, 10.7, 2.2, false],
  [87, 55, 1.1, 0.4, 16.2, 0.9, true],
  [96, 78, 2.6, 0.7, 9.4, 1.5, false],
  [54, 44, 4.2, 0.35, 13.8, 2.7, false],
  [76, 82, 3.8, 0.3, 17.1, 0.2, false],
  [22, 48, 1.6, 0.58, 12.0, 4.1, true],
  [38, 85, 2.0, 0.66, 8.9, 1.6, false],
  [62, 52, 1.4, 0.5, 14.3, 3.3, true],
  [5, 38, 2.8, 0.72, 10.1, 0.8, false],
  [48, 92, 1.9, 0.45, 12.7, 2.0, true],
  [80, 42, 3.0, 0.6, 9.8, 1.4, false],
  [15, 76, 1.5, 0.54, 11.5, 3.8, true],
  [68, 8, 2.4, 0.76, 8.2, 0.5, false],
  [90, 88, 1.7, 0.42, 15.0, 2.6, true],
  [35, 55, 2.1, 0.64, 9.3, 1.9, false],
  [52, 28, 1.3, 0.48, 13.5, 3.0, true],
  [77, 72, 3.4, 0.38, 16.8, 0.1, false],
  [42, 38, 1.8, 0.56, 10.9, 2.3, true],
];

const DRIFT_PATHS = [
  "particleDrift0",
  "particleDrift1",
  "particleDrift2",
  "particleDrift3",
  "particleDrift4",
  "particleDrift5",
];

function MuseumParticles() {
  const particles = useMemo(() => PARTICLE_CONFIG.map((cfg, i) => ({
    id: i,
    x: cfg[0],
    y: cfg[1],
    size: cfg[2] * 2,
    opacity: cfg[3],
    duration: cfg[4],
    delay: cfg[5],
    flicker: cfg[6],
    driftAnim: DRIFT_PATHS[i % DRIFT_PATHS.length],
  })), []);

  return (
    <div className="museum-dream-particles" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className={`mdp${p.flicker ? " mdp--flicker" : ""}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationName: `${p.driftAnim}${p.flicker ? ", particleFlicker" : ""}`,
            animationDuration: `${p.duration}s${p.flicker ? `, ${(p.duration * 0.38).toFixed(1)}s` : ""}`,
            animationDelay: `${p.delay}s${p.flicker ? `, ${p.delay * 0.6}s` : ""}`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [activeSceneId, setActiveSceneId] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [scores, setScores] = useState({ rest: 0, release: 0, connection: 0, direction: 0 });
  const [resultKey, setResultKey] = useState(null);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [isEnteringMuseum, setIsEnteringMuseum] = useState(false);
  const [isStepTransitioning, setIsStepTransitioning] = useState(false);

  const {
    soundOn,
    toggleSound,
    enableSound,
    playClick,
    playTrainArrival,
    playEnding,
    playSceneClip,
    stopAll,
  } = useAudio();

  const activeScene = activeSceneId ? getSceneById(activeSceneId) : null;
  const currentStep = useMemo(() => {
    if (!activeScene) return null;
    if (stepIndex === 0) {
      return {
        id: "intro",
        type: "intro",
        phaseDelays: [],
      };
    }
    return activeScene.steps?.[stepIndex - 1] ?? null;
  }, [activeScene, stepIndex]);
  const phase = useScenePhases(currentStep?.phaseDelays || []);

  useEffect(() => {
    PRELOAD_IMAGES.forEach(url => loadOne(url));
  }, []);

  useEffect(() => {
    document.documentElement.lang = "fr";
  }, []);

  const sceneList = scenes.map(scene => ({
    ...scene,
    homeCard: HOME_CARDS[scene.id],
    status: scene.status || (scene.steps.length ? "Disponible" : "Bientôt disponible"),
  }));

  function openScene(sceneId) {
    const scene = getSceneById(sceneId);
    if (!scene.steps.length) return;
    stopAll();
    setActiveSceneId(scene.id);
    setStepIndex(0);
    setScores({ rest: 0, release: 0, connection: 0, direction: 0 });
    setResultKey(null);
    setSelectedChoiceId(null);
    setIsEnteringMuseum(false);
    setIsStepTransitioning(false);
  }

  async function beginExperience(withSound) {
    if (activeScene?.id === "fog-museum") {
      setIsEnteringMuseum(true);
    }
    if (withSound) {
      if (activeScene?.id === "fog-museum") {
        enableSound(false);
        stopAll();
        if (activeScene?.audio?.ambience) {
          playSceneClip(activeScene.audio.ambience, true, 0.16);
        }
        if (activeScene?.audio?.enter) {
          playSceneClip(activeScene.audio.enter, false, 0.18);
        }
      } else {
        if (activeScene?.audio?.ambience) {
          enableSound(false);
          stopAll();
          playSceneClip(activeScene.audio.ambience, true, 0.12);
        } else if (activeScene?.id === "rain-station") {
          await enableSound(true);
          playTrainArrival();
        }
      }
    }
    window.setTimeout(() => {
      setStepIndex(1);
      setIsEnteringMuseum(false);
    }, activeScene?.id === "fog-museum" ? 1600 : 0);
  }

  function chooseChoice(choice) {
    if (selectedChoiceId) return;
    playClick();
    if (activeScene?.audio?.choice) {
      playSceneClip(activeScene.audio.choice, false, 0.14);
    }
    if (activeScene?.id === "candy-forest" && activeScene?.audio?.temptation) {
      playSceneClip(activeScene.audio.temptation, false, 0.14);
    }
    if (activeScene?.id === "fog-museum" && activeScene?.audio?.step) {
      playSceneClip(activeScene.audio.step, false, 0.12);
    }
    setSelectedChoiceId(choice.id);
    if (activeScene?.id === "fog-museum") {
      setIsStepTransitioning(true);
    }

    const nextScores = addScores(scores, choice.score);
    setScores(nextScores);

    window.setTimeout(() => {
      const nextStep = activeScene?.steps?.[stepIndex + 1];
      if (nextStep?.id === "result") {
        const nextResult = pickResult(nextScores, activeScene.resultTypes, activeScene.tieBreakOrder);
        setResultKey(nextResult);
        if (activeScene?.id === "fog-museum" && activeScene?.audio?.reveal) {
          playSceneClip(activeScene.audio.reveal, false, 0.16);
        } else if (activeScene?.id === "candy-forest" && activeScene?.audio?.ending) {
          playSceneClip(activeScene.audio.ending, false, 0.16);
        } else if (currentStep?.playsEnding) {
          playEnding(nextResult);
        } else if (activeScene?.audio?.reveal) {
          playSceneClip(activeScene.audio.reveal, false, 0.16);
        }
      }
      setStepIndex(prev => prev + 1);
      setSelectedChoiceId(null);
      setIsStepTransitioning(false);
    }, activeScene?.id === "fog-museum" ? 850 : 700);
  }

  function restartScene() {
    if (!activeScene) return;
    stopAll();
    playClick();
    setStepIndex(0);
    setScores({ rest: 0, release: 0, connection: 0, direction: 0 });
    setResultKey(null);
    setSelectedChoiceId(null);
  }

  function returnHome() {
    stopAll();
    playClick();
    setActiveSceneId(null);
    setStepIndex(0);
    setScores({ rest: 0, release: 0, connection: 0, direction: 0 });
    setResultKey(null);
    setSelectedChoiceId(null);
    setIsEnteringMuseum(false);
    setIsStepTransitioning(false);
  }

  const hasActiveScene = Boolean(activeScene);

  return (
    <div className={`app app--${activeScene?.id || "home"}${isEnteringMuseum ? " is-entering-museum" : ""}${isStepTransitioning ? " is-step-transitioning" : ""}`}>
      <div className="stage">
        <div className={`camera camera--${activeScene?.id || "home"}`}>
          <Background scene={activeScene} step={currentStep} resultKey={resultKey} />
          <Atmosphere step={currentStep} sceneId={activeScene?.id || null} />
          <SceneEffects
            sceneId={activeScene?.id || null}
            stepId={currentStep?.id || null}
            resultKey={resultKey}
            selectedChoiceId={selectedChoiceId}
          />

          {activeScene?.id === "fog-museum" && (
            <MuseumParticles />
          )}

          {activeScene?.id === "fog-museum" && isEnteringMuseum && (
            <div className="museum-entry-overlay" aria-hidden="true">
              <span className="museum-light museum-light--overlay" />
              <span className="museum-entry-door museum-entry-door--left" />
              <span className="museum-entry-door museum-entry-door--right" />
            </div>
          )}

          {activeScene?.id === "fog-museum" && isStepTransitioning && (
            <div className="museum-step-overlay" aria-hidden="true">
              <span className="museum-step-wash" />
            </div>
          )}

          <div className="topbar">
            <button className={`sound-chip${soundOn ? " is-on" : ""}`} onClick={toggleSound}>
              {soundOn ? "Son activé" : "Son coupé"}
            </button>
          </div>

          {!hasActiveScene && <Home scenes={sceneList} onSelectScene={openScene} />}

          {hasActiveScene && (
            <div className={activeScene?.id === "fog-museum" ? "fog-text-layer" : undefined}>
              {stepIndex === 0 && (
                <SceneIntro
                  intro={activeScene.intro}
                  onEnterSound={() => beginExperience(true)}
                  onEnterSilent={() => beginExperience(false)}
                />
              )}

              {currentStep?.type === "question" && (
                <SceneQuestion
                  step={currentStep}
                  phase={phase}
                  selectedChoiceId={selectedChoiceId}
                  onChooseChoice={chooseChoice}
                />
              )}

              {currentStep?.type === "result" && resultKey && (
                <SceneResult
                  scene={activeScene}
                  resultKey={resultKey}
                  phase={phase}
                  onRestart={restartScene}
                  onHome={returnHome}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


