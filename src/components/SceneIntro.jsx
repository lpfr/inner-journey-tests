export default function SceneIntro({ intro, onEnterSound, onEnterSilent }) {
  return (
    <section className="scene intro-scene">
      <div className="intro-copy">
        <p className="intro-time">{intro.time}</p>
        <h1 className="intro-title">{intro.title}</h1>
        <p className="intro-line">{intro.line1}</p>
        <p className="intro-line">{intro.line2}</p>
        <div className="intro-actions">
          <button className="primary-button" onClick={onEnterSound}>
            {intro.enter}
          </button>
          <button className="secondary-button" onClick={onEnterSilent}>
            {intro.silentEnter}
          </button>
        </div>
      </div>
    </section>
  );
}
