export const rainStationScene = {
  id: "rain-station",
  title: "La Gare sous la pluie",
  description: "Une nuit de pluie pour sentir le soutien dont tu pourrais avoir besoin.",
  subtitle: "De quel soutien as-tu besoin ?",
  theme: "pluie",
  targetAudience: "Pour les moments où tout semble lourd, flou ou difficile à porter seul.",
  psychologyFrame:
    "Repos, émotion, lien ou direction : quatre manières de traverser un moment difficile.",
  coverImage: "/img/station_intro.webp",
  cover: "/img/station_intro.webp",
  background: "/img/station_intro.webp",
  status: "Disponible",
  resultTypes: ["rest", "release", "connection", "direction"],
  choices: [],

  disclaimer:
    "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux t’écouter.",
  audio: {
    arrival: "train_arrival",
    endingPrefix: "ending_",
  },
  opening: {
    title: "La Gare sous la pluie",
    subtitle: "Une nuit pour ralentir et écouter ce qui demande de l’attention.",
    description:
      "Tu arrives sur un quai vide. La pluie tombe doucement, comme si elle connaissait déjà ton silence.",
  },
  intro: {
    time: "2 h 47 · Quai désert",
    title: "La Gare sous la pluie",
    line1:
      "Tu arrives sur un quai vide. La pluie tombe doucement, comme si elle connaissait déjà ton silence.",
    line2:
      "Tu ne sais pas encore pourquoi tu es ici. Puis la voix du haut-parleur prononce ton nom.",
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
          "« Ce soir, les trains vont là où tu as le plus besoin de soutien. »",
        ],
        ticketLines: [
          "Un billet mouillé repose à tes pieds.",
          "Aucune destination.",
          "Seulement ton nom.",
        ],
        platformLabel: "Quai numéro sept",
      },
      gallery: {
        heading: "Quel train t’appelle ce soir ?",
        subheading: "Quatre trains attendent sous la pluie.",
      },
      choices: [
        {
          id: "rest",
          name: "Le Train Blanc",
          desc: "Un lieu calme où tu pourrais souffler un peu.",
          image: "/img/train_rest.webp",
          score: { rest: 4, release: 0, connection: 1, direction: 0 },
        },
        {
          id: "release",
          name: "Le Vieux Train",
          desc: "Une pluie ancienne attend de pouvoir passer.",
          image: "/img/train_release.webp",
          score: { rest: 0, release: 4, connection: 0, direction: 1 },
        },
        {
          id: "connection",
          name: "Le Train des Lumières",
          desc: "Une chaleur douce brille derrière les vitres.",
          image: "/img/train_connection.webp",
          score: { rest: 0, release: 1, connection: 4, direction: 0 },
        },
        {
          id: "direction",
          name: "Le Train Sans Nom",
          desc: "Les rails continuent, même quand la destination reste floue.",
          image: "/img/train_direction.webp",
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
        heading: "Dans le wagon",
        line1: "Où t’assois-tu ?",
        line2: "Tu montes dans le train. La pluie glisse sur la vitre.",
      },
      choices: [
        {
          id: "window",
          text: "Près de la fenêtre",
          sub: "Tu laisses la pluie accompagner ce qui remonte.",
          score: { rest: 3, release: 1, connection: 0, direction: 0 },
        },
        {
          id: "quiet",
          text: "Dans le coin le plus calme",
          sub: "Tu gardes une part de toi à l’abri.",
          score: { rest: 2, release: 0, connection: 0, direction: 1 },
        },
        {
          id: "near",
          text: "Près d’un autre passager",
          sub: "Tu n'as pas besoin de parler pour ne plus être seul.",
          score: { rest: 0, release: 0, connection: 3, direction: 1 },
        },
        {
          id: "end",
          text: "Au bout du wagon",
          sub: "Tu écoutes le train avancer.",
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
        heading: "La lettre",
        line1: "Que fais-tu de la lettre ?",
        line2: "Le contrôleur s’arrête devant toi. Il te tend une enveloppe portant ton nom.",
      },
      choices: [
        {
          id: "open",
          text: "Tu l’ouvres doucement",
          sub: "Quelque chose peut enfin sortir.",
          score: { rest: 1, release: 3, connection: 1, direction: 0 },
        },
        {
          id: "keep",
          text: "Tu la gardes dans ta poche",
          sub: "Tu peux attendre de te sentir prêt.",
          score: { rest: 2, release: 0, connection: 0, direction: 1 },
        },
        {
          id: "ask",
          text: "Tu demandes qui l’a écrite",
          sub: "Tu veux savoir d’où vient cette présence.",
          score: { rest: 0, release: 1, connection: 3, direction: 0 },
        },
        {
          id: "look",
          text: "Tu regardes d’abord par la fenêtre",
          sub: "Tu cherches un signe dans le mouvement.",
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
        "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux t’écouter.",
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
      image: "/img/ending_rest.webp",
      ending: "La pluie ralentit.",
      story: [
        "Le train s’arrête dans une lumière calme.",
        "Pour une fois, tu n'as rien à résoudre tout de suite.",
      ],
      title: "Besoin de repos",
      subtitle: "Une part de toi a peut-être besoin d’une vraie pause avant de repartir.",
      desc:
        "Quand tout pèse, le repos peut devenir un repère, pas une façon d’abandonner.",
      reflection: "Ce n’est pas de la paresse : c’est peut-être ton corps qui demande à relâcher la pression.",
      cues: [
        "Allège ta soirée.",
        "Réduis les demandes.",
        "Laisse une décision attendre demain si elle le peut.",
      ],
      shareText: "Repose-toi d’abord. La clarté reviendra mieux après.",
    },
    release: {
      image: "/img/ending_release.webp",
      ending: "La vitre se couvre de pluie.",
      story: [
        "Quelque chose en toi cesse de se retenir.",
        "Tu n'as pas besoin de tout ranger maintenant.",
      ],
      title: "Besoin de relâcher",
      subtitle: "Une émotion cherche peut-être une sortie douce, sans devoir tout expliquer.",
      desc: "La laisser exister peut rendre la nuit moins lourde et ouvrir un peu d’espace.",
      reflection: "Ce n’est pas trop ressentir : c’est peut-être quelque chose en toi qui demande de l’attention.",
      cues: [
        "Écris ce qui pèse.",
        "Pleure si cela vient.",
        "Parle à voix basse, même seulement pour toi.",
      ],
      shareText: "Ce qui te traverse n’a pas besoin de rester bloqué.",
    },
    connection: {
      image: "/img/ending_connection.webp",
      ending: "Une lumière apparaît dans le wagon.",
      story: [
        "Quelqu'un reste là, sans te presser.",
        "La présence suffit à rendre la nuit moins froide.",
      ],
      title: "Besoin de lien",
      subtitle: "Tu n’as peut-être pas besoin d’une réponse parfaite.",
      desc: "Tu as peut-être surtout besoin d’être rejoint, écouté, accompagné.",
      reflection: "Ce n’est pas une faiblesse : le lien peut devenir un appui quand la nuit paraît trop grande.",
      cues: [
        "Envoie un message simple.",
        "Choisis une personne sûre.",
        "Dis simplement : « Ce soir, ce n’est pas très facile. »",
      ],
      shareText: "Tu n’as pas besoin d’aller bien pour demander du soutien.",
    },
    direction: {
      image: "/img/ending_direction.webp",
      ending: "Les rails continuent sous la pluie.",
      story: [
        "Tu ne vois pas encore la destination.",
        "Mais un petit pas devient possible.",
      ],
      title: "Besoin de direction",
      subtitle: "Tu n’es peut-être pas bloqué.",
      desc: "Tu as peut-être seulement besoin d’un prochain repère, petit et concret.",
      reflection: "Ce n’est pas un retard : parfois, une direction commence par un seul geste.",
      cues: [
        "Choisis une seule chose à faire.",
        "Pas toute la route.",
        "Seulement le prochain geste.",
      ],
      shareText: "Tu n’as pas besoin de toute la carte pour avancer.",
    },
  },
};
