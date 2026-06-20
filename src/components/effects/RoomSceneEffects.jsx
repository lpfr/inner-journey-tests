/**
 * RoomSceneEffects — chapter 6 "La chambre à deux" ambience layer (v2, simplified).
 *
 * Deliberately minimal compared to the first attempt: no mix-blend-mode, no
 * isolation, no per-step variation, no JS-computed positions. One warm glow
 * + four floating light dots, applied uniformly across every screen of this
 * chapter. Lower visual nuance, but far fewer places for something to go
 * quietly wrong. Gated by sceneId so it never touches any other chapter.
 */
export default function RoomSceneEffects({ sceneId }) {
  if (sceneId !== "room-for-two") return null;

  return (
    <div className="room-effects" aria-hidden="true">
      <span className="room-effects__glow" />
      <span className="room-effects__dot room-effects__dot--1" />
      <span className="room-effects__dot room-effects__dot--2" />
      <span className="room-effects__dot room-effects__dot--3" />
      <span className="room-effects__dot room-effects__dot--4" />
    </div>
  );
}
