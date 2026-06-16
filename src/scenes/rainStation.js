export const rainStationScene = {
  id: "rain-station",
  title: "La Gare sous la Pluie",
  description:
    "Une expérience interactive en une seule nuit, avec pluie, choix et résultats émotionnels.",
  subtitle: "La première scène complète de l'univers émotionnel.",
  theme: "pluie",
  targetAudience: "Personnes qui veulent traverser une nuit intérieure avec douceur.",
  psychologyFrame: "Soutien symbolique, introspection légère et sensation d'abri.",
  coverImage: "/img/station_intro.png",
  cover: "/img/station_intro.png",
  background: "/img/station_intro.png",
  status: "Disponible",
  resultTypes: ["rest", "release", "connection", "direction"],
  choices: [],

  disclaimer:
    "Cette expérience n’est pas un outil médical ni un diagnostic psychologique. Elle sert uniquement à l’introspection et au bien-être personnel.",
  audio: {
    arrival: "train_arrival",
    endingPrefix: "ending_",
  },
  opening: {
    title: "La Gare sous la Pluie",
    subtitle: "Une première nuit pour ralentir et écouter ce qui remue encore.",
    description: "Tu arrives au quai, seul avec la pluie et les choix qui t’attendent.",
  },
  intro: {
    time: "2 h 47 · Quai désert",
    title: "La Gare sous la Pluie",
    line1: "Tu ne te souviens pas pourquoi tu es ici.",
    line2: "Mais la voix du haut-parleur vient de prononcer ton nom.",
    enter: "Entrer sur le quai",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "arrival",
      type: "question",
      layout: "arrival",
      phaseDelays: [1500, 2700, 3900, 5100, 6300, 7400, 8800],
      rain: true,
      rainVariant: "global",
      copy: {
        broadcastLines: [
          "« Veuillez vous rendre au quai numéro sept. »",
          "« Ce soir, les trains ne vont que là où tu as vraiment besoin de te rendre. »",
        ],
        ticketLines: [
          "Tu baisses les yeux et trouves un billet trempé par la pluie à tes pieds.",
          "Aucune destination n’y est inscrite.",
          "Seulement ton nom.",
        ],
        platformLabel: "Quai numéro sept",
      },
      gallery: {
        heading: "Quatre Portes",
        subheading: "Chaque porte ressemble à une nuit différente.",
      },
      choices: [
        {
          id: "rest",
          name: "Le Train Blanc",
          desc: "Ses fenêtres sont silencieuses, comme un lieu où tu pourrais enfin t’endormir.",
          image: "/img/train_rest.png",
          score: { rest: 4, release: 0, connection: 1, direction: 0 },
        },
        {
          id: "release",
          name: "Le Vieux Train",
          desc: "Ses lumières semblent anciennes, comme une pluie que tu n’as jamais fini de pleurer.",
          image: "/img/train_release.png",
          score: { rest: 0, release: 4, connection: 0, direction: 1 },
        },
        {
          id: "connection",
          name: "Le Train des Lumières",
          desc: "À l’intérieur, une lumière chaude brille, comme si quelqu’un t’attendait depuis longtemps.",
          image: "/img/train_connection.png",
          score: { rest: 0, release: 1, connection: 4, direction: 0 },
        },
        {
          id: "direction",
          name: "Le Train Sans Nom",
          desc: "Il n’a pas de destination, mais les rails continuent vers l’horizon.",
          image: "/img/train_direction.png",
          score: { rest: 0, release: 0, connection: 1, direction: 4 },
        },
      ],
      nextStep: "carriage",
    },
    {
      id: "carriage",
      type: "question",
      layout: "choices",
      phaseDelays: [1100, 2200],
      rain: false,
      copy: {
        heading: "Où t’assois-tu ?",
        line1: "Tu entres dans le wagon.",
        line2: "La pluie glisse le long de la vitre, comme tous les mots que tu n’as jamais dits.",
      },
      choices: [
        {
          id: "window",
          text: "Près de la fenêtre",
          sub: "Colle ton front à la vitre et laisse la pluie écrire lentement.",
          score: { rest: 3, release: 1, connection: 0, direction: 0 },
        },
        {
          id: "quiet",
          text: "Le coin le plus calme",
          sub: "Garde une partie de toi à l’abri du monde.",
          score: { rest: 2, release: 0, connection: 0, direction: 1 },
        },
        {
          id: "near",
          text: "Près d’un autre passager",
          sub: "Pas besoin de parler. Laisse simplement quelqu’un rester près de toi.",
          score: { rest: 0, release: 0, connection: 3, direction: 1 },
        },
        {
          id: "end",
          text: "Au bout du wagon",
          sub: "Reste là où le mouvement se sent le plus fort et écoute le train avancer.",
          score: { rest: 0, release: 2, connection: 0, direction: 2 },
        },
      ],
      nextStep: "letter",
    },
    {
      id: "letter",
      type: "question",
      layout: "choices",
      phaseDelays: [1100, 2200],
      rain: false,
      copy: {
        heading: "Comment ouvres-tu la lettre ?",
        line1: "Le contrôleur s’arrête devant toi.",
        line2:
          "Il ne te demande pas où tu vas. Il te tend seulement une enveloppe portant ton nom.",
      },
      choices: [
        {
          id: "open",
          text: "L’ouvrir doucement",
          sub: "Laisse la réponse réchauffer d’abord le bout de tes doigts.",
          score: { rest: 1, release: 3, connection: 1, direction: 0 },
        },
        {
          id: "keep",
          text: "La garder dans ta poche",
          sub: "Tu n’es pas encore prêt à tout savoir.",
          score: { rest: 2, release: 0, connection: 0, direction: 1 },
        },
        {
          id: "ask",
          text: "Demander qui l’a écrite",
          sub: "Tu veux que le silence te donne un nom.",
          score: { rest: 0, release: 1, connection: 3, direction: 0 },
        },
        {
          id: "look",
          text: "Regarder d’abord par la fenêtre",
          sub: "Confie ton cœur à la pluie et respire une fois.",
          score: { rest: 0, release: 0, connection: 1, direction: 3 },
        },
      ],
      nextStep: "result",
      playsEnding: true,
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [1500, 4200],
      note:
        "Ce résultat n’est pas un diagnostic psychologique. Il s’agit seulement d’une manière douce d’observer le type de soutien dont tu pourrais avoir besoin dans une période difficile.",
      restartLabel: "Revoir le train de nuit",
    },
  ],
  scores: {
    train: {
      rest: { rest: 4, release: 0, connection: 1, direction: 0 },
      release: { rest: 0, release: 4, connection: 0, direction: 1 },
      connection: { rest: 0, release: 1, connection: 4, direction: 0 },
      direction: { rest: 0, release: 0, connection: 1, direction: 4 },
    },
    interior: {
      window: { rest: 3, release: 1, connection: 0, direction: 0 },
      quiet: { rest: 2, release: 0, connection: 0, direction: 1 },
      near: { rest: 0, release: 0, connection: 3, direction: 1 },
      end: { rest: 0, release: 2, connection: 0, direction: 2 },
    },
    letter: {
      open: { rest: 1, release: 3, connection: 1, direction: 0 },
      keep: { rest: 2, release: 0, connection: 0, direction: 1 },
      ask: { rest: 0, release: 1, connection: 3, direction: 0 },
      look: { rest: 0, release: 0, connection: 1, direction: 3 },
    },
  },
  results: {
    rest: {
      ending: "La pluie ralentit enfin.",
      story: [
        "Tu ne pars pas tout de suite. Tu restes sous la lumière un moment.",
        "Certaines nuits n’ont pas besoin de réponse. Elles ont seulement besoin d’un endroit où respirer.",
        "Ce soir, laisse-toi déposer un instant.",
      ],
      title: "Tu as besoin de repos",
      subtitle: "Laisse ton corps croire à nouveau qu’il est en sécurité.",
      desc: "Ce dont tu as peut-être le plus besoin maintenant, c’est d’une pause qui n’exige aucune explication.",
      cues: [
        "Offre-toi une soirée sans rien produire.",
        "Repose-toi d’abord, décide plus tard.",
      ],
    },
    release: {
      ending: "La pluie commence à se retirer.",
      story: [
        "Tu entends enfin l’émotion que tu retenais depuis si longtemps se desserrer.",
        "Tout n’a pas besoin d’être trié tout de suite.",
        "Certaines choses demandent seulement la permission de traverser.",
      ],
      title: "Tu as besoin de relâcher",
      subtitle: "Laisse ce qui pèse trouver une sortie.",
      desc: "Tu n’as pas à aller mieux d’un seul coup. Commence simplement à laisser bouger le poids.",
      cues: [
        "Trouve une sortie sûre.",
        "Ne range pas le ressenti avant de l’avoir laissé exister.",
      ],
    },
    connection: {
      ending: "Les lumières derrière la vitre se rapprochent une à une.",
      story: [
        "Tu n’es pas seul dans la nuit.",
        "Quelqu’un peut accueillir ton hésitation et entendre ce que tu n’as pas dit.",
        "Tu n’as pas besoin d’être complet pour être vu.",
      ],
      title: "Tu as besoin de lien",
      subtitle: "Être vu est déjà une forme de réparation lente.",
      desc: "Dans une période difficile, tu peux avoir besoin de compagnie plus que d’une réponse parfaite.",
      cues: [
        "Contacte une personne de confiance.",
        "Tu n’as pas besoin d’être prêt pour demander du soutien.",
      ],
    },
    direction: {
      ending: "Les rails s’étirent encore devant toi sous la pluie.",
      story: [
        "Tu fais un pas, même sans savoir exactement où il mène.",
        "Être perdu n’est pas un échec. C’est seulement le signe que tu te recalibres.",
        "Avance d’abord. La clarté pourra venir ensuite.",
      ],
      title: "Tu as besoin de direction",
      subtitle: "Trouve d’abord ta place, puis la sortie.",
      desc: "Ce dont tu as besoin maintenant n’est peut-être pas une réponse, mais un peu de courage pour continuer.",
      cues: [
        "Occupe-toi d’abord de la plus petite chose devant toi.",
        "Tu n’as pas besoin de toute la carte pour faire un pas.",
      ],
    },
  },
};
