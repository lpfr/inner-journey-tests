export const SCENE_DISCLAIMER =
  "Cette expérience n’est pas un outil médical ni un diagnostic psychologique. Elle sert uniquement à l’introspection et au bien-être personnel.";

export function createPlaceholderScene({
  id,
  title,
  subtitle,
  theme,
  targetAudience,
  psychologyFrame,
  cover = "/img/station_intro.png",
  background = "/img/station_intro.png",
}) {
  return {
    id,
    title,
    subtitle,
    theme,
    targetAudience,
    psychologyFrame,
    cover,
    background,
    status: "Bientôt disponible",
    audio: {},
    opening: {
      title,
      subtitle,
      description: subtitle,
    },
    steps: [],
    choices: [],
    scores: [],
    results: {},
    disclaimer: SCENE_DISCLAIMER,
  };
}
