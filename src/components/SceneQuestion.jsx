function ArrivalQuestion({ step, phase, selectedChoiceId, onChooseChoice }) {
  return (
    <section className="scene arrival-scene">
      <div className={`arrival-haze arrival-haze--${phase}`} />

      {phase >= 3 && <div className="platform-tag">{step.copy.platformLabel}</div>}

      {phase >= 2 && (
        <div className={`headlights headlights--${phase >= 6 ? "wide" : "near"}`}>
          <span className="beam beam--left" />
          <span className="beam beam--right" />
          {phase >= 6 && <span className="beam beam--third" />}
          {phase >= 6 && <span className="beam beam--fourth" />}
        </div>
      )}

      {phase >= 3 && phase < 7 && (
        <div className="subtitle-stack subtitle-stack--broadcast">
          <p className="subtitle-line subtitle-line--strong">{step.copy.broadcastLines[0]}</p>
          {phase >= 4 && <p className="subtitle-line">{step.copy.broadcastLines[1]}</p>}
        </div>
      )}

      {phase >= 4 && phase < 7 && (
        <div className="ticket-card glass-panel ticket-card--floating">
          <p className="ticket-line">{step.copy.ticketLines[0]}</p>
          {phase >= 5 && <p className="ticket-line">{step.copy.ticketLines[1]}</p>}
          {phase >= 6 && <p className="ticket-line ticket-line--name">{step.copy.ticketLines[2]}</p>}
        </div>
      )}

      {phase >= 5 && <div className="rain-line rain-line--bright" />}

      {phase >= 7 && (
        <div className="train-gallery">
          <div className="train-gallery-copy">
            <p className="scene-heading">{step.gallery.heading}</p>
            <p className="scene-subheading">{step.gallery.subheading}</p>
          </div>
          <div className="train-grid">
            {step.choices.map((choice, index) => {
              const isSelected = selectedChoiceId === choice.id;
              const isDimmed = selectedChoiceId && !isSelected;
              return (
                <button
                  key={choice.id}
                  className={[
                    "train-door",
                    `train-door--${choice.id}`,
                    isSelected ? "is-selected" : "",
                    isDimmed ? "is-dimmed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ animationDelay: `${index * 120}ms` }}
                  onClick={() => onChooseChoice(choice)}
                  disabled={Boolean(selectedChoiceId)}
                >
                  <span className="train-glow" />
                  <img src={choice.image} alt={choice.name} className="train-door-image" />
                  <span className="train-door-label">
                    <span className="train-door-name">{choice.name}</span>
                    <span className="train-door-desc">{choice.desc}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

function ChoiceQuestion({ step, phase, selectedChoiceId, onChooseChoice }) {
  const showDetails = phase >= 1;
  const showChoices = phase >= 2;

  return (
    <section className={`scene text-scene text-scene--${step.id}`}>
      <div className="scene-caption">
        <p className="scene-heading">{step.copy.heading}</p>
        <p className="subtitle-line subtitle-line--strong">{step.copy.line1}</p>
        <p className={`subtitle-line${showDetails ? "" : " subtitle-line--pending"}`}>
          {step.copy.line2}
        </p>
      </div>

      <div
        className={`choice-panel glass-panel${showChoices ? "" : " choice-panel--pending"}`}
        aria-hidden={!showChoices}
      >
        {showChoices &&
          step.choices.map((choice, index) => {
            const isSelected = selectedChoiceId === choice.id;
            return (
              <button
                key={choice.id}
                className={[
                  "choice-card",
                  isSelected ? "is-selected" : "",
                  selectedChoiceId && !isSelected ? "is-dimmed" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${index * 90}ms`, opacity: isSelected ? 1 : undefined }}
                onClick={() => onChooseChoice(choice)}
                disabled={Boolean(selectedChoiceId)}
              >
                <span className="choice-card-title">{choice.text}</span>
                <span className="choice-card-subtitle">{choice.sub}</span>
              </button>
            );
          })}
      </div>
    </section>
  );
}

export default function SceneQuestion({ step, phase, selectedChoiceId, onChooseChoice }) {
  if (step.layout === "arrival") {
    return (
      <ArrivalQuestion
        step={step}
        phase={phase}
        selectedChoiceId={selectedChoiceId}
        onChooseChoice={onChooseChoice}
      />
    );
  }

  return (
    <ChoiceQuestion
      step={step}
      phase={phase}
      selectedChoiceId={selectedChoiceId}
      onChooseChoice={onChooseChoice}
    />
  );
}
