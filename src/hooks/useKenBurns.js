// Ken Burns effect: slow zoom/pan on a canvas image
// Returns a draw function that applies the effect
import { useRef } from "react";

export function useKenBurns() {
  const t = useRef(0);

  // Call every frame. Returns {scale, tx, ty} to apply to the BG draw.
  function tick(effect = "zoom-in") {
    t.current += 0.00035; // very slow
    const p = t.current;

    switch (effect) {
      case "zoom-in":
        return { scale: 1 + p * 0.06, tx: 0, ty: 0 };
      case "zoom-out":
        return { scale: 1.08 - p * 0.04, tx: 0, ty: 0 };
      case "pan-right":
        return { scale: 1.04, tx: p * 18, ty: 0 };
      case "shake": {
        // gentle train sway
        const sway = Math.sin(p * 180) * 2.5;
        return { scale: 1.01, tx: sway, ty: Math.sin(p * 90) * 1.2 };
      }
      case "push-in":
        return { scale: 1 + p * 0.1, tx: 0, ty: -p * 8 };
      case "brighten":
        return { scale: 1.02, tx: 0, ty: 0, brighten: Math.min(p * 0.8, 0.22) };
      default:
        return { scale: 1, tx: 0, ty: 0 };
    }
  }

  function reset() { t.current = 0; }

  return { tick, reset };
}
