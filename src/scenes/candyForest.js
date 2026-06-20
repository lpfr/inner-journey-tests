export const candyForestScene = {
  id: "candy-forest",
  title: "La Forêt des bonbons",
  description: "Une courte traversée autour de l’envie, de la fatigue et des petits détours.",
  subtitle: "Qu’est-ce qui t’éloigne de ton intention ?",
  theme: "attention",
  targetAudience: "Personnes qui veulent observer leur attention avec douceur.",
  psychologyFrame:
    "Envie, fatigue, attention et petites pauses. Cette expérience n’est pas un diagnostic.",
  coverImage: "/scenes/candy-forest/candy_forest_home.webp",
  cover: "/scenes/candy-forest/candy_forest_home.webp",
  background: "/scenes/candy-forest/candy_forest_home.webp",
  introImage: "/scenes/candy-forest/forest_opening.webp",
  status: "Disponible",
  resultTypes: ["satisfaction", "controle", "structure", "emotion"],
  tieBreakOrder: ["emotion", "structure", "satisfaction", "controle"],
  choices: [],
  disclaimer:
    "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux t’écouter.",
  audio: {
    ambience: "/scenes/candy-forest/audio/candy_forest_loop.mp3",
    choice: "/scenes/candy-forest/audio/choice_chime.mp3",
    temptation: "/scenes/candy-forest/audio/temptation_glow.mp3",
    ending: "/scenes/candy-forest/audio/ending_soft.mp3",
  },
  opening: {
    eyebrow: "Pause intérieure",
    title: "La Forêt des bonbons",
    subtitle: "Une courte traversée autour de l’envie, de la fatigue et des petits détours.",
    enterLabel: "Entrer dans la forêt",
    silentLabel: "Entrer sans le son",
  },
  intro: {
    time: "21 h 48 · Lisière sucrée",
    title: "La Forêt des bonbons",
    line1: "Tu arrives devant une forêt douce et brillante. Chaque sentier promet un petit soulagement.",
    line2:
      "Tu n’es pas là pour te juger. Seulement pour observer ce qui t’attire quand ton intention devient fragile.",
    enter: "Entrer dans la forêt",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "bonbon-lumineux",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/glowing_candy.webp",
      rain: false,
      copy: {
        heading: "Le bonbon lumineux",
        line1: "Un bonbon lumineux roule à tes pieds.",
        line2: "Il pulse doucement, comme s’il connaissait déjà ton envie.",
      },
      choices: [
        {
          id: "goute-tout-de-suite",
          text: "Tu le goûtes tout de suite.",
          score: { satisfaction: 1 },
        },
        {
          id: "eloigne-sans-discuter",
          text: "Tu t’éloignes sans discuter.",
          score: { controle: 1 },
        },
        {
          id: "garde-pour-plus-tard",
          text: "Tu le gardes pour plus tard.",
          score: { structure: 1 },
        },
        {
          id: "sentir-ce-qu-il-reveille",
          text: "Tu prends un instant pour sentir ce qu’il réveille.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "renard",
    },
    {
      id: "renard",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/talking_fox.webp",
      rain: false,
      copy: {
        heading: "Le raccourci du renard",
        line1: "Un renard apparaît entre deux arbres.",
        line2: "Il sourit : « Ce sera plus simple par ici. »",
      },
      choices: [
        {
          id: "suis-renard",
          text: "Tu le suis.",
          score: { satisfaction: 1 },
        },
        {
          id: "refuses-tout-de-suite",
          text: "Tu refuses tout de suite.",
          score: { controle: 1 },
        },
        {
          id: "compares-carte",
          text: "Tu compares avec ta carte.",
          score: { structure: 1 },
        },
        {
          id: "pourquoi-raccourci-rassure",
          text: "Tu te demandes pourquoi ce raccourci te rassure.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "pluie",
    },
    {
      id: "pluie",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/candy_rain.webp",
      rain: false,
      copy: {
        heading: "La pluie sucrée",
        line1: "Des bonbons tombent doucement du ciel.",
        line2: "La forêt devient brillante, presque trop.",
      },
      choices: [
        {
          id: "attrapes-quelques-uns",
          text: "Tu en attrapes quelques-uns.",
          score: { satisfaction: 1 },
        },
        {
          id: "acceleres-pour-ne-rien-voir",
          text: "Tu accélères pour ne rien voir.",
          score: { controle: 1 },
        },
        {
          id: "une-pause-puis-reprends",
          text: "Tu choisis une seule pause, puis tu reprends.",
          score: { structure: 1 },
        },
        {
          id: "remarques-fatigue",
          text: "Tu remarques que tu es fatigué.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "guimauve",
    },
    {
      id: "guimauve",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/marshmallow_tree.webp",
      rain: false,
      copy: {
        heading: "L’arbre de guimauve",
        line1: "Un arbre moelleux t’offre un endroit où t’allonger.",
        line2: "« Juste cinq minutes », murmure-t-il.",
      },
      choices: [
        {
          id: "installes-aussitot",
          text: "Tu t’installes aussitôt.",
          score: { satisfaction: 1 },
        },
        {
          id: "restes-debout",
          text: "Tu restes debout coûte que coûte.",
          score: { controle: 1 },
        },
        {
          id: "regles-courte-pause",
          text: "Tu règles une courte pause.",
          score: { structure: 1 },
        },
        {
          id: "ecoutes-corps",
          text: "Tu écoutes ce que ton corps essaie de dire.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "lucioles",
    },
    {
      id: "lucioles",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/notification_fireflies.webp",
      rain: false,
      copy: {
        heading: "Les lucioles lumineuses",
        line1: "Des lucioles tournent autour de toi.",
        line2: "Chacune semble réclamer un peu de ton attention.",
      },
      choices: [
        {
          id: "suis-plus-brillante",
          text: "Tu suis la plus brillante.",
          score: { satisfaction: 1 },
        },
        {
          id: "chasses-toutes",
          text: "Tu les chasses toutes.",
          score: { controle: 1 },
        },
        {
          id: "choisis-quand-repondre",
          text: "Tu choisis quand tu répondras.",
          score: { structure: 1 },
        },
        {
          id: "cherches-recevoir",
          text: "Tu cherches ce que tu espérais recevoir.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "porte",
    },
    {
      id: "porte",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/sugar_door_waiting.webp",
      rain: false,
      copy: {
        heading: "La porte en sucre",
        line1: "Une porte translucide bloque le sentier.",
        line2: "Elle ne s’ouvre que si tu attends un peu.",
      },
      choices: [
        {
          id: "pousses-tout-de-suite",
          text: "Tu pousses tout de suite.",
          score: { satisfaction: 1 },
        },
        {
          id: "refuses-approcher",
          text: "Tu refuses d’approcher.",
          score: { controle: 1 },
        },
        {
          id: "comptes-trente",
          text: "Tu comptes jusqu'à trente, puis tu ouvres.",
          score: { structure: 1 },
        },
        {
          id: "observes-attente",
          text: "Tu observes ce que l’attente fait monter.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "result",
      playsEnding: false,
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [700, 1800],
      note:
        "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux t’écouter.",
      restartLabel: "Recommencer",
    },
  ],
  scores: {
    "bonbon-lumineux": {
      "goute-tout-de-suite": { satisfaction: 1 },
      "eloigne-sans-discuter": { controle: 1 },
      "garde-pour-plus-tard": { structure: 1 },
      "sentir-ce-qu-il-reveille": { emotion: 1 },
    },
    renard: {
      "suis-renard": { satisfaction: 1 },
      "refuses-tout-de-suite": { controle: 1 },
      "compares-carte": { structure: 1 },
      "pourquoi-raccourci-rassure": { emotion: 1 },
    },
    pluie: {
      "attrapes-quelques-uns": { satisfaction: 1 },
      "acceleres-pour-ne-rien-voir": { controle: 1 },
      "une-pause-puis-reprends": { structure: 1 },
      "remarques-fatigue": { emotion: 1 },
    },
    guimauve: {
      "installes-aussitot": { satisfaction: 1 },
      "restes-debout": { controle: 1 },
      "regles-courte-pause": { structure: 1 },
      "ecoutes-corps": { emotion: 1 },
    },
    lucioles: {
      "suis-plus-brillante": { satisfaction: 1 },
      "chasses-toutes": { controle: 1 },
      "choisis-quand-repondre": { structure: 1 },
      "cherches-recevoir": { emotion: 1 },
    },
    porte: {
      "pousses-tout-de-suite": { satisfaction: 1 },
      "refuses-approcher": { controle: 1 },
      "comptes-trente": { structure: 1 },
      "observes-attente": { emotion: 1 },
    },
  },
  results: {
    satisfaction: {
      image: "/scenes/candy-forest/ending_satisfaction.webp",
      ending: "La clairière brille de mille couleurs.",
      story: [
        "Les douceurs ne sont pas l’ennemi, mais elles prennent beaucoup de place quand elles sont toujours à portée.",
      ],
      title: "Besoin de soulagement rapide",
      subtitle: "Une part de toi cherche peut-être un soulagement simple et immédiat.",
      description:
        "Quand la fatigue est là, ce qui apaise vite peut devenir très attirant.",
      reflection: "Ce n’est pas une question de force : c’est peut-être ce qui cherche du soutien en toi.",
      suggestions: [
        "Éloigne une tentation pendant 25 minutes.",
        "Puis commence par une action de 5 minutes seulement.",
      ],
      shareText: "Un petit début vaut mieux qu’un grand plan jamais commencé.",
    },
    controle: {
      image: "/scenes/candy-forest/ending_control.webp",
      ending: "Tu quittes la forêt sans toucher aux bonbons.",
      story: ["Mais tu sens que résister à tout demande beaucoup d’espace intérieur."],
      title: "Besoin de tenir bon",
      subtitle: "Une part de toi essaie peut-être de tenir en gardant beaucoup de contrôle.",
      description:
        "Cette force peut protéger ton intention, mais elle a aussi besoin d’air pour durer.",
      reflection: "Ce n’est pas une rigidité à corriger : c’est peut-être une manière de chercher de la sécurité.",
      suggestions: [
        "Prévois une petite pause autorisée.",
        "Rends-la courte, claire, choisie à l’avance.",
      ],
      shareText: "Tenir dans la durée demande aussi un peu d’air.",
    },
    structure: {
      image: "/scenes/candy-forest/ending_structure.webp",
      ending: "La carte s’éclaire et les chemins cessent de bouger.",
      story: ["Les tentations restent là, mais elles prennent moins de place."],
      title: "Besoin de structure",
      subtitle: "Une part de toi avance peut-être mieux quand le chemin est préparé.",
      description:
        "Un cadre simple peut protéger ton énergie et réduire les décisions à prendre.",
      reflection: "Ce n’est pas un besoin de tout contrôler : c’est peut-être un besoin de repères.",
      suggestions: [
        "Choisis une seule tâche.",
        "Écris l’heure, le lieu et la première action.",
      ],
      shareText: "Quand le chemin est clair, l’effort devient plus léger.",
    },
    emotion: {
      image: "/scenes/candy-forest/ending_emotion.webp",
      ending: "Tu t’assois au bord du sentier.",
      story: ["La forêt devient moins bruyante quand tu cesses de courir."],
      title: "Émotion en premier plan",
      subtitle: "L’envie arrive parfois quand quelque chose en toi cherche du calme.",
      description:
        "Ce qui détourne ton attention peut aussi montrer une fatigue, une tension ou un besoin resté discret.",
      reflection: "Ce n’est pas seulement une question d’effort : une émotion demande peut-être à être entendue.",
      suggestions: [
        "Avant d’agir, écris trois phrases.",
        "« Je ressens… »",
        "« Le plus petit pas possible est… »",
      ],
      shareText: "Nommer ce qui se passe change déjà la scène.",
    },
  },
};
