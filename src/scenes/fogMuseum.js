export const fogMuseumScene = {
  id: "fog-museum",
  title: "Le musée dans la brume",
  description:
    "Une visite silencieuse parmi les élans, les désirs et les liens qui cherchent une forme.",
  subtitle: "Qu'est-ce qui t'attire en silence ?",
  theme: "identité",
  targetAudience: "Personnes qui veulent écouter ce qui les attire intérieurement.",
  psychologyFrame:
    "Exploration douce du soi, des élans et des liens. Cette expérience n'est pas un diagnostic.",
  coverImage: "/scenes/fog-museum/cover.png",
  cover: "/scenes/fog-museum/cover.png",
  background: "/scenes/fog-museum/background.png",
  introImage: "/scenes/fog-museum/intro.png",
  status: "Disponible",
  resultTypes: ["explorer", "guardian", "creator", "relater"],
  tieBreakOrder: ["explorer", "creator", "guardian", "relater"],
  choices: [],
  disclaimer:
    "Ce résultat n'est pas un diagnostic. C'est seulement une piste douce pour observer ce qui t'appelle en ce moment.",
  audio: {
    ambience: "/scenes/fog-museum/audio/ambience.mp3",
    enter: "/scenes/fog-museum/audio/enter.mp3",
    choice: "/scenes/fog-museum/audio/choice.mp3",
    step: "/scenes/fog-museum/audio/step.mp3",
    reveal: "/scenes/fog-museum/audio/reveal.mp3",
  },
  opening: {
    eyebrow: "Exploration intérieure",
    title: "Le musée dans la brume",
    subtitle:
      "Une visite silencieuse parmi les élans, les désirs et les liens qui cherchent une forme.",
    enterLabel: "Entrer dans le musée",
    silentLabel: "Entrer en silence",
  },
  intro: {
    time: "23 h 17 · Hall désert",
    title: "Le musée dans la brume",
    line1: "La porte s'ouvre sans bruit. Dans la brume, chaque salle garde une part de toi.",
    line2: "Tu n'as rien à prouver ici. Seulement à remarquer ce qui t'attire.",
    enter: "Entrer dans le musée",
    silentEnter: "Entrer en silence",
  },
  steps: [
    {
      id: "hall",
      type: "question",
      layout: "choices",
      phaseDelays: [1200, 2500, 3900, 5200, 6600],
      image: "/scenes/fog-museum/hall.png",
      rain: false,
      copy: {
        heading: "La carte du hall",
        line1: "Quelle salle t'attire en premier ?",
        line2:
          "Sur le comptoir, une carte ancienne indique quatre salles. Aucune ne semble vraiment appartenir au présent.",
      },
      choices: [
        {
          id: "unfinished-dreams",
          text: "La salle des rêves inachevés",
          score: { explorer: 3 },
        },
        {
          id: "hidden-anger",
          text: "La salle des refuges silencieux",
          score: { creator: 2, explorer: 1 },
        },
        {
          id: "lost-elan",
          text: "La salle des formes à naître",
          score: { guardian: 2, creator: 1 },
        },
        {
          id: "future-self",
          text: "La salle des présences oubliées",
          score: { relater: 1, explorer: 2 },
        },
      ],
      nextStep: "object",
    },
    {
      id: "object",
      type: "question",
      layout: "choices",
      phaseDelays: [1100, 2300, 3600, 5000],
      image: "/scenes/fog-museum/object.png",
      rain: false,
      copy: {
        heading: "La vitrine éclairée",
        line1: "Quel objet gardes-tu du regard ?",
        line2: "Dans une vitrine dorée, quatre objets attendent. L'un d'eux semble te reconnaître.",
      },
      choices: [
        {
          id: "unused-ticket",
          text: "Un billet de train jamais utilisé",
          score: { explorer: 3 },
        },
        {
          id: "closed-key",
          text: "Une clé posée dans du velours",
          score: { guardian: 3 },
        },
        {
          id: "unfinished-notebook",
          text: "Un carnet aux pages ouvertes",
          score: { creator: 3 },
        },
        {
          id: "erased-photo",
          text: "Une photo dont un visage manque",
          score: { relater: 3 },
        },
      ],
      nextStep: "phrase",
    },
    {
      id: "phrase",
      type: "question",
      layout: "choices",
      phaseDelays: [1100, 2200, 3400, 4700],
      image: "/scenes/fog-museum/phrase.png",
      rain: false,
      copy: {
        heading: "Les phrases sur le mur",
        line1: "Quelle phrase reste avec toi ?",
        line2:
          "Au bout du couloir, quatre phrases apparaissent dans la brume. Elles ressemblent à des pensées longtemps restées basses.",
      },
      choices: [
        {
          id: "elsewhere",
          text: "J'ai encore envie de découvrir.",
          score: { explorer: 3 },
        },
        {
          id: "stable-ground",
          text: "J'ai besoin d'un sol plus calme.",
          score: { guardian: 3 },
        },
        {
          id: "create-myself",
          text: "Je veux laisser une trace qui me ressemble.",
          score: { creator: 3 },
        },
        {
          id: "matter-to-someone",
          text: "Je veux être rejoint sans disparaître.",
          score: { relater: 3 },
        },
      ],
      nextStep: "door",
    },
    {
      id: "door",
      type: "question",
      layout: "choices",
      phaseDelays: [1200, 2400, 3600, 5200, 6600],
      image: "/scenes/fog-museum/door.png",
      rain: false,
      copy: {
        heading: "Les quatre portes",
        line1: "Quelle porte ouvres-tu ?",
        line2:
          "La dernière salle est presque vide. Quatre portes translucides respirent doucement dans le silence.",
      },
      choices: [
        {
          id: "unknown-path",
          text: "La porte vers un chemin inconnu",
          score: { explorer: 4 },
        },
        {
          id: "quiet-house",
          text: "La porte d'une maison calme",
          score: { guardian: 4 },
        },
        {
          id: "lit-atelier",
          text: "La porte d'un atelier encore allumé",
          score: { creator: 4 },
        },
        {
          id: "waiting-room",
          text: "La porte d'une pièce où quelqu'un attend",
          score: { relater: 4 },
        },
      ],
      nextStep: "result",
      playsEnding: true,
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [1400, 3800],
      note:
        "Ce résultat n'est pas un diagnostic. C'est seulement une piste douce pour observer ce qui t'appelle en ce moment.",
      restartLabel: "Recommencer la visite",
    },
  ],
  scores: {
    hall: {
      "unfinished-dreams": { explorer: 3 },
      "hidden-anger": { creator: 2, explorer: 1 },
      "lost-elan": { guardian: 2, creator: 1 },
      "future-self": { relater: 1, explorer: 2 },
    },
    object: {
      "unused-ticket": { explorer: 3 },
      "closed-key": { guardian: 3 },
      "unfinished-notebook": { creator: 3 },
      "erased-photo": { relater: 3 },
    },
    phrase: {
      elsewhere: { explorer: 3 },
      "stable-ground": { guardian: 3 },
      "create-myself": { creator: 3 },
      "matter-to-someone": { relater: 3 },
    },
    door: {
      "unknown-path": { explorer: 4 },
      "quiet-house": { guardian: 4 },
      "lit-atelier": { creator: 4 },
      "waiting-room": { relater: 4 },
    },
  },
  results: {
    explorer: {
      image: "/scenes/fog-museum/result-explorer.png",
      ending: "La brume s'ouvre sur un passage que tu n'avais pas vu.",
      story: [
        "Le musée ne te donne pas de réponse.",
        "Il te rappelle seulement qu'une part de toi veut encore de l'espace.",
      ],
      title: "L'explorateur intérieur",
      subtitle: "Quelque chose en toi semble chercher du mouvement, de l'air, des possibles.",
      description:
        "Ce n'est pas forcément une fuite. C'est peut-être un élan qui demande à respirer.",
      suggestions: [
        "Essaie une chose nouvelle, même petite.",
        "Pas pour réussir. Pour sentir si quelque chose s'ouvre.",
        "Cette semaine, note une expérience que tu aimerais tenter sans obligation.",
      ],
      shareText: "Parfois, un petit détour suffit à réveiller l'élan.",
    },
    guardian: {
      image: "/scenes/fog-museum/result-guardian.png",
      ending: "Dans une salle calme, la lumière devient plus stable.",
      story: [
        "Tu comprends qu'un refuge n'est pas une prison.",
        "C'est parfois l'endroit où l'on reprend souffle.",
      ],
      title: "Le gardien intérieur",
      subtitle: "Une part de toi cherche peut-être plus de sécurité, de repères ou de douceur.",
      description: "Tu n'as pas besoin d'aller plus vite que ton besoin de stabilité.",
      suggestions: [
        "Allège une décision inutile.",
        "Crée un petit rituel qui te rassure.",
        "Choisis une chose simple qui peut rendre ta semaine un peu plus stable.",
      ],
      shareText: "Un sol fiable peut devenir le début du mouvement.",
    },
    creator: {
      image: "/scenes/fog-museum/result-creator.png",
      ending: "Au fond du couloir, une table reste éclairée.",
      story: [
        "Rien n'y est terminé.",
        "Mais quelque chose attend que tu oses commencer.",
      ],
      title: "Le créateur intérieur",
      subtitle: "Tu sembles attiré par ce qui veut prendre forme.",
      description:
        "Une idée, une émotion, une phrase ou une image cherche peut-être une sortie.",
      suggestions: [
        "Ne cherche pas l'oeuvre parfaite.",
        "Commence par une trace sincère.",
        "Écris, dessine ou assemble quelque chose pendant cinq minutes, sans corriger.",
      ],
      shareText: "Ce qui est vrai n'a pas besoin d'être parfait pour exister.",
    },
    relater: {
      image: "/scenes/fog-museum/result-relater.png",
      ending: "Derrière une vitre claire, une présence demeure.",
      story: ["Elle ne demande rien.", "Elle semble seulement te reconnaître."],
      title: "Le lien intérieur",
      subtitle: "Une part de toi cherche peut-être un lien plus simple, plus vrai, plus vivant.",
      description: "Avoir besoin de présence n'est pas une faiblesse.",
      suggestions: [
        "Rapproche-toi d'un lien sûr.",
        "Pas avec un grand discours, seulement avec un geste vrai.",
        "Envoie un message simple à quelqu'un auprès de qui tu peux être un peu plus toi-même.",
      ],
      shareText: "Certains liens ne nous enferment pas. Ils nous rendent plus présents.",
    },
  },
};
