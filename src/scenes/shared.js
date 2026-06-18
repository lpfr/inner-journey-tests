export const SCENE_DISCLAIMER =
  "Cette expérience n’est pas un diagnostic. Elle propose seulement une piste pour mieux t’écouter.";

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
