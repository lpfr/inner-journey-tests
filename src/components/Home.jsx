import SceneCard from "./SceneCard.jsx";

export default function Home({ scenes, onSelectScene }) {
  return (
    <section className="scene language-scene">
      <div className="language-panel glass-panel">
        <div className="language-title-stack">
          <span className="language-title-line">Que veux-tu explorer aujourd’hui ?</span>
        </div>
        <p className="language-eyebrow">
          Choisis ce qui te ressemble en ce moment.
        </p>
        <p className="language-subtitle">
          Ce n’est pas un diagnostic.
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
