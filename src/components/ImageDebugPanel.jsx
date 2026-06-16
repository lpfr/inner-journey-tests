/**
 * ImageDebugPanel
 * Shows in development (import.meta.env.DEV) only.
 * Displays a list of all image paths with ✓ / ✗ status.
 * 
 * Usage: <ImageDebugPanel images={IMAGES} />
 */
import { useEffect, useState } from "react";
import "./ImageDebugPanel.css";

export default function ImageDebugPanel({ images }) {
  const [statuses, setStatuses] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Object.entries(images).forEach(([key, src]) => {
      const im = new Image();
      im.onload  = () => setStatuses(p => ({ ...p, [key]: "ok" }));
      im.onerror = () => setStatuses(p => ({ ...p, [key]: "missing" }));
      im.src = src;
    });
  }, [images]);

  // Only render in dev mode
  if (!import.meta.env.DEV) return null;

  const missingKeys = Object.entries(statuses).filter(([, v]) => v === "missing");
  const hasMissing = missingKeys.length > 0;

  return (
    <div className={`dbg-panel ${hasMissing ? "dbg-warn" : "dbg-ok"}`}>
      <button
        className="dbg-toggle"
        onClick={() => setOpen(o => !o)}
        title="图片加载状态"
      >
        {hasMissing
          ? `⚠ ${missingKeys.length} 张图片缺失`
          : `✓ 所有图片已加载`}
      </button>

      {open && (
        <div className="dbg-list">
          {Object.entries(images).map(([key, src]) => {
            const st = statuses[key] || "loading";
            return (
              <div key={key} className={`dbg-item dbg-${st}`}>
                <span className="dbg-icon">
                  {st === "ok" ? "✓" : st === "missing" ? "✗" : "…"}
                </span>
                <span className="dbg-path">{src}</span>
              </div>
            );
          })}
          <p className="dbg-hint">
            把图片放到 <code>public/img/</code> 目录后刷新页面
          </p>
        </div>
      )}
    </div>
  );
}
