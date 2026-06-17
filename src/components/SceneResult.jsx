export default function SceneResult({ scene, resultKey, phase, onRestart, onHome }) {
  const result = scene.results[resultKey];
  const description = result.description || result.desc || "";
  const reflection = result.reflection || "";
  const suggestions = result.suggestions || result.cues || [];
  const shareText = result.shareText || "";

  return (
    <section className="scene result-scene">
      <div className="result-veil" />

      {phase >= 1 && (
        <div className="subtitle-stack subtitle-stack--result">
          <p className="subtitle-line subtitle-line--strong">{result.ending}</p>
          {result.story.map((line, index) => (
            <p
              key={line}
              className="subtitle-line"
              style={{ animationDelay: (index * 420) + "ms" }}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {phase >= 2 && (
        <div className="result-card glass-panel">
          <p className="result-title">{result.title}</p>
          <p className="result-subtitle">{result.subtitle}</p>
          {description && <p className="result-desc">{description}</p>}
          {reflection && <p className="result-desc">{reflection}</p>}
          <div className="result-cues">
            {suggestions.map(item => (
              <p key={item} className="result-cue">
                {item}
              </p>
            ))}
          </div>
          {shareText && <p className="result-note">{shareText}</p>}
          <p className="result-note">{scene.disclaimer}</p>
          <div className="result-actions">
            <button className="primary-button primary-button--wide" onClick={onRestart}>
              {scene.steps.find(step => step.id === "result")?.restartLabel || "Recommencer"}
            </button>
            <button className="secondary-button secondary-button--wide" onClick={onHome}>
              Retour aux expériences
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
