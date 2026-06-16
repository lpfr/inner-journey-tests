export default function SceneCard({ scene, onSelect }) {
  const isAvailable = (scene.steps?.length || 0) > 0;
  const card = scene.homeCard || {
    status: scene.status || "Disponible",
    title: scene.title,
    question: scene.subtitle,
    world: scene.title,
  };

  return (
    <button
      className="language-button scene-card-button"
      onClick={() => isAvailable && onSelect(scene.id)}
      disabled={!isAvailable}
    >
      {scene.coverImage && (
        <span className="scene-card-media" aria-hidden="true">
          <img src={scene.coverImage} alt="" className="scene-card-cover" />
        </span>
      )}
      <span className="scene-card-copy">
        <span className="scene-card-status">{card.status}</span>
        <span className="scene-card-title">{card.title}</span>
        <span className="scene-card-question">{card.question}</span>
        <span className="scene-card-world">{card.world}</span>
      </span>
    </button>
  );
}
