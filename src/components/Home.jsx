import SceneCard from "./SceneCard.jsx";

export default function Home({ scenes, onSelectScene }) {
  return (
    <section className="scene language-scene">
      <div className="language-panel glass-panel">
        <div className="language-title-stack">
          <span className="language-title-line">Des tests doux pour mieux te comprendre</span>
        </div>
        <p className="language-eyebrow">
          Choisis une expérience selon ce que tu traverses en ce moment.
        </p>
        <p className="language-subtitle">
          Ce n’est pas un diagnostic.
          <br />
          Seulement une manière sensible d’explorer ce qui se passe en toi.
        </p>
        <div className="language-actions">
          {scenes.map(scene => (
            <SceneCard key={scene.id} scene={scene} onSelect={onSelectScene} />
          ))}
        </div>
      </div>
    </section>
  );
}
