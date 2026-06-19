export default function SceneResult({ scene, resultKey, phase, onRestart, onHome }) {
  const result = scene.results[resultKey];
  const description = result.description || result.desc || "";
  const reflection = result.reflection || "";
  const rawSuggestions = result.suggestions || result.cues || [];
  const observations = rawSuggestions.filter(item => item.includes("Demande-toi"));
  const observationLines = observations.length
    ? observations
    : ["Observe ce qui résonne en toi, sans chercher à conclure trop vite."];
  const suggestions = rawSuggestions.filter(item => !item.includes("Demande-toi"));
  const shareText = result.shareText || "";
  const narrative = [result.ending, ...(result.story || [])].filter(Boolean);
  const meaning = [result.subtitle, description, reflection].filter(Boolean);
  const restartLabel = scene.steps.find(step => step.id === "result")?.restartLabel || "Recommencer";

  return (
    <section className={`scene result-scene result-scene--unified result-scene--${scene.id}`}>
      <div className="result-veil unified-result-veil" />

      {phase >= 1 && (
        <article className="unified-result-card">
          <p className="unified-result-kicker">{scene.title}</p>
          <h1 className="unified-result-title">{result.title}</h1>

          <div className="unified-result-narrative">
            {narrative.map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))}
          </div>

          {meaning.length > 0 && (
            <>
              <div className="unified-result-rule" />
              <p className="unified-result-section-title">Ce que ce résultat peut indiquer</p>
              <div className="unified-result-meaning">
                {meaning.map((line, index) => (
                  <p key={`${line}-${index}`}>{line}</p>
                ))}
              </div>
            </>
          )}

          {suggestions.length > 0 && (
            <section className="unified-result-advice" aria-label="Une piste douce">
              <p className="unified-result-advice-title">Une piste douce</p>
              <div className="unified-result-advice-list">
                {suggestions.map(item => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>
          )}

          <section className="unified-result-observe" aria-label="À observer">
            <p className="unified-result-advice-title">À observer</p>
            <div className="unified-result-advice-list">
              {observationLines.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          {shareText && <p className="unified-result-final">{shareText}</p>}
          <p className="unified-result-disclaimer">{scene.disclaimer}</p>

          <div className="unified-result-actions">
            <button className="primary-button unified-result-button unified-result-button--primary" onClick={onRestart}>
              {restartLabel}
            </button>
            <button className="secondary-button unified-result-button unified-result-button--secondary" onClick={onHome}>
              Retour aux expériences
            </button>
          </div>
        </article>
      )}
    </section>
  );
}
