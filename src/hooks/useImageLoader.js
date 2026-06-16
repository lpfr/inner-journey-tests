/**
 * useImageLoader.js
 * 
 * Manages image loading, caching, and missing-file detection.
 * In development (import.meta.env.DEV), shows overlay for each failed image.
 */

const cache = {}; // key: url → HTMLImageElement | "error" | "loading"

/**
 * Preload a list of image URLs.
 * Returns a promise that resolves with an array of failed URLs.
 */
export function preloadImages(urls) {
  const promises = urls.map(url => {
    if (cache[url] instanceof HTMLImageElement) return Promise.resolve(null);
    if (cache[url] === "error") return Promise.resolve(url);
    if (cache[url] === "loading") {
      // Wait for it
      return new Promise(res => {
        const check = setInterval(() => {
          if (cache[url] !== "loading") {
            clearInterval(check);
            res(cache[url] === "error" ? url : null);
          }
        }, 50);
      });
    }

    cache[url] = "loading";
    return new Promise(res => {
      const im = new Image();
      im.onload  = () => { cache[url] = im; res(null); };
      im.onerror = () => { cache[url] = "error"; res(url); };
      im.src = url;
    });
  });

  return Promise.all(promises).then(results => results.filter(Boolean));
}

/** Get a cached image (returns null if not loaded or errored) */
export function getCached(url) {
  return cache[url] instanceof HTMLImageElement ? cache[url] : null;
}

/** Load single image — returns promise of HTMLImageElement or null */
export function loadOne(url) {
  return new Promise(res => {
    if (cache[url] instanceof HTMLImageElement) { res(cache[url]); return; }
    if (cache[url] === "error") { res(null); return; }
    const im = new Image();
    im.onload  = () => { cache[url] = im; res(im); };
    im.onerror = () => { cache[url] = "error"; res(null); };
    im.src = url;
  });
}

/** Check if url errored */
export function isError(url) { return cache[url] === "error"; }
