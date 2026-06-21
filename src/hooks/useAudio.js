import { useCallback, useEffect, useRef, useState } from "react";

const FILES = {
  rain_loop: "/audio/rain_loop.mp3",
  station_ambience: "/audio/station_ambience.mp3",
  train_arrival: "/audio/train_arrival.mp3",
  click_soft: "/audio/click_soft.mp3",
  ending_rest: "/audio/ending_rest.mp3",
  ending_release: "/audio/ending_release.mp3",
  ending_connection: "/audio/ending_connection.mp3",
  ending_direction: "/audio/ending_direction.mp3",
};

export function useAudio() {
  const [soundOn, setSoundOn] = useState(false);
  const nodesRef = useRef({});
  const readyRef = useRef(false);
  const soundOnRef = useRef(false);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  const getAudio = useCallback(key => {
    const path = FILES[key];
    if (!path) return null;
    if (!nodesRef.current[key]) {
      try {
        const audio = new Audio(path);
        audio.preload = "auto";
        audio.playsInline = true;
        nodesRef.current[key] = audio;
      } catch {
        return null;
      }
    }
    return nodesRef.current[key];
  }, []);

  const stopKey = useCallback(key => {
    const audio = nodesRef.current[key];
    if (!audio) return;
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch {
      // Ignore browser audio stop failures.
    }
  }, []);

  const stopAll = useCallback(() => {
    Object.values(nodesRef.current).forEach(audio => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch {
        // Ignore browser audio stop failures.
      }
    });
  }, []);

  const tryPlay = useCallback((key, loop = false, vol = 0.7) => {
    return new Promise(res => {
      const path = FILES[key];
      if (!path || !soundOnRef.current) {
        res(false);
        return;
      }
      try {
        const audio = getAudio(key);
        if (!audio) {
          res(false);
          return;
        }
        audio.loop = loop;
        audio.volume = vol;
        const startPlayback = () => {
          audio.currentTime = 0;
          const attempt = audio.play();
          if (attempt && typeof attempt.then === "function") {
            attempt.then(() => res(true)).catch(() => res(false));
          } else {
            res(true);
          }
        };

        if (audio.readyState >= 2) {
          startPlayback();
          return;
        }

        const onReady = () => {
          cleanup();
          startPlayback();
        };

        const onError = () => {
          cleanup();
          res(false);
        };

        const cleanup = () => {
          audio.removeEventListener("canplay", onReady);
          audio.removeEventListener("loadeddata", onReady);
          audio.removeEventListener("error", onError);
        };

        audio.addEventListener("canplay", onReady, { once: true });
        audio.addEventListener("loadeddata", onReady, { once: true });
        audio.addEventListener("error", onError, { once: true });
        audio.load();
      } catch {
        res(false);
      }
    });
  }, [getAudio]);

  const playSceneClip = useCallback((path, loop = false, vol = 0.7) => {
    return new Promise(res => {
      if (!path || !soundOnRef.current) {
        res(false);
        return;
      }

      try {
        const key = `scene:${path}`;
        const existing = nodesRef.current[key];
        if (existing) {
          existing.pause();
          existing.currentTime = 0;
        }
        const audio = new Audio(path);
        audio.preload = "auto";
        audio.playsInline = true;
        audio.loop = loop;
        audio.volume = vol;
        nodesRef.current[key] = audio;
        audio.addEventListener("ended", () => {
          if (nodesRef.current[key] === audio) {
            delete nodesRef.current[key];
          }
        });
        const attempt = audio.play();
        if (attempt && typeof attempt.then === "function") {
          attempt.then(() => res(true)).catch(() => res(false));
        } else {
          res(true);
        }
      } catch {
        res(false);
      }
    });
  }, []);

  // Tries `primaryPath` first (e.g. a result-specific ending track); if it
  // fails to load (missing file, decode error, etc.) it silently falls back
  // to `fallbackPath` instead of surfacing any error. Used for "optional
  // per-result audio that may not exist yet" — never throws, never logs a
  // user-visible error, just degrades to the generic clip.
  const playSceneClipWithFallback = useCallback((primaryPath, fallbackPath, loop = false, vol = 0.7) => {
    return new Promise(res => {
      if (!soundOnRef.current) {
        res(false);
        return;
      }
      if (!primaryPath) {
        if (fallbackPath) {
          playSceneClip(fallbackPath, loop, vol).then(res);
        } else {
          res(false);
        }
        return;
      }

      try {
        const key = `scene:${primaryPath}`;
        const existing = nodesRef.current[key];
        if (existing) {
          existing.pause();
          existing.currentTime = 0;
        }
        const audio = new Audio(primaryPath);
        audio.preload = "auto";
        audio.playsInline = true;
        audio.loop = loop;
        audio.volume = vol;
        nodesRef.current[key] = audio;

        const fallback = () => {
          if (nodesRef.current[key] === audio) {
            delete nodesRef.current[key];
          }
          if (fallbackPath) {
            playSceneClip(fallbackPath, loop, vol).then(res);
          } else {
            res(false);
          }
        };

        audio.addEventListener("error", fallback, { once: true });
        audio.addEventListener("ended", () => {
          if (nodesRef.current[key] === audio) {
            delete nodesRef.current[key];
          }
        });
        const attempt = audio.play();
        if (attempt && typeof attempt.then === "function") {
          attempt.then(() => res(true)).catch(fallback);
        } else {
          res(true);
        }
      } catch {
        if (fallbackPath) {
          playSceneClip(fallbackPath, loop, vol).then(res);
        } else {
          res(false);
        }
      }
    });
  }, [playSceneClip]);

  const initSound = useCallback(async () => {
    if (!soundOnRef.current) return false;
    if (readyRef.current) return true;
    readyRef.current = true;
    await tryPlay("rain_loop", true, 0.3);
    await tryPlay("station_ambience", true, 0.08);
    return true;
  }, [tryPlay]);

  const enableSound = useCallback(async (playBaseAmbience = true) => {
    if (!soundOnRef.current) {
      soundOnRef.current = true;
      setSoundOn(true);
    }

    if (!playBaseAmbience) {
      return true;
    }

    if (readyRef.current) {
      await tryPlay("rain_loop", true, 0.3);
      await tryPlay("station_ambience", true, 0.08);
      return true;
    }

    return initSound();
  }, [initSound, tryPlay]);

  const playClick = useCallback(async () => {
    if (!soundOnRef.current) return;
    await tryPlay("click_soft", false, 0.18);
  }, [tryPlay]);

  const playTrainArrival = useCallback(() => {
    if (!soundOnRef.current) return;
    tryPlay("train_arrival", false, 0.16);
  }, [tryPlay]);

  const playEnding = useCallback(type => {
    if (!soundOnRef.current) return;
    stopKey("rain_loop");
    stopKey("station_ambience");
    tryPlay("ending_" + type, false, 0.12);
  }, [stopKey, tryPlay]);

  const toggleSound = useCallback(async () => {
    const next = !soundOn;
    setSoundOn(next);
    if (next) {
      soundOnRef.current = true;
      await enableSound(true);
    } else {
      soundOnRef.current = false;
      stopAll();
    }
  }, [soundOn, enableSound, stopAll]);

  return { soundOn, toggleSound, initSound, enableSound, playClick, playTrainArrival, playEnding, playSceneClip, playSceneClipWithFallback, stopAll };
}
