export const fogMuseumScene = {
  id: "fog-museum",
  title: "Le musée dans la brume",
  description:
    "Une visite silencieuse parmi les fragments de ce que tu es peut-être en train de devenir.",
  subtitle: "Pour les moments où tu veux comprendre ce qui t'appelle de l'intérieur.",
  theme: "identité",
  targetAudience: "Personnes qui veulent mieux comprendre leurs envies profondes, leurs valeurs et leur rapport au changement.",
  psychologyFrame: "Exploration du soi, des valeurs et de l'identité. Cette expérience n'est pas un outil médical ni un diagnostic psychologique.",
  coverImage: "/scenes/fog-museum/cover.png",
  cover: "/scenes/fog-museum/cover.png",
  background: "/scenes/fog-museum/background.png",
  introImage: "/scenes/fog-museum/intro.png",
  status: "Disponible",
  resultTypes: ["explorer", "guardian", "creator", "relater"],
  tieBreakOrder: ["explorer", "creator", "guardian", "relater"],
  choices: [],
  disclaimer:
    "Cette expérience n’est pas un outil médical ni un diagnostic psychologique. Elle sert uniquement à l’introspection et au bien-être personnel.",
  audio: {
    ambience: "/scenes/fog-museum/audio/ambience.mp3",
    enter: "/scenes/fog-museum/audio/enter.mp3",
    choice: "/scenes/fog-museum/audio/choice.mp3",
    step: "/scenes/fog-museum/audio/step.mp3",
    reveal: "/scenes/fog-museum/audio/reveal.mp3",
  },
  opening: {
    eyebrow: "Exploration de soi",
    title: "Le musée dans la brume",
    subtitle:
      "Une visite silencieuse parmi les fragments de ce que tu es peut-être en train de devenir.",
    enterLabel: "Entrer dans le musée",
    silentLabel: "Entrer en silence",
  },
  intro: {
    time: "23 h 17 · Hall désert",
    title: "Le musée dans la brume",
    line1: "La porte s’ouvre sans bruit.",
    line2:
      "Derrière elle, la brume recouvre un musée qui semble conserver des fragments de toi.",
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
        heading: "Quelle salle t’attire en premier ?",
        line1: "La porte s’ouvre sans bruit.",
        line2:
          "Sur le comptoir d’accueil, une carte ancienne indique quatre salles. Aucune ne semble vraiment appartenir au présent.",
      },
      choices: [
        {
          id: "unfinished-dreams",
          text: "La salle des rêves inachevés",
          sub: "Quelque chose en toi veut encore savoir ce qui aurait pu naître.",
          score: { explorer: 3 },
        },
        {
          id: "hidden-anger",
          text: "La salle de la colère cachée",
          sub: "Une énergie ancienne semble attendre d’être reconnue.",
          score: { creator: 2, explorer: 1 },
        },
        {
          id: "lost-elan",
          text: "La salle de l’élan perdu",
          sub: "Tu veux comprendre où ton feu intérieur s’est éloigné.",
          score: { guardian: 2, creator: 1 },
        },
        {
          id: "future-self",
          text: "La salle du soi futur",
          sub: "Une silhouette lointaine semble connaître une version possible de toi.",
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
        heading: "Quel objet restes-tu à regarder le plus longtemps ?",
        line1: "Dans la première salle, les vitrines sont éclairées par une lumière dorée.",
        line2:
          "Chaque objet semble attendre que tu le reconnaisses. Tu ne sais pas s’il vient de ton passé, ou d’une vie que tu n’as pas encore osé vivre.",
      },
      choices: [
        {
          id: "unused-ticket",
          text: "Un billet de train inutilis\u00e9",
          sub: "Une destination jamais os\u00e9e.",
          score: { explorer: 3 },
        },
        {
          id: "closed-key",
          text: "Une cl\u00e9 dans une bo\u00eete ferm\u00e9e",
          sub: "Elle prot\u00e8ge quelque chose.",
          score: { guardian: 3 },
        },
        {
          id: "unfinished-notebook",
          text: "Un carnet de phrases inachev\u00e9es",
          sub: "Les mots s\u2019arr\u00eatent trop t\u00f4t.",
          score: { creator: 3 },
        },
        {
          id: "erased-photo",
          text: "Une photo avec quelqu\u2019un effac\u00e9",
          sub: "L\u2019absence attire ton regard.",
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
        heading: "Quelle phrase te touche le plus ?",
        line1:
          "Au bout du couloir, quatre phrases apparaissent sur le mur. Elles ne sont pas écrites à l’encre.",
        line2:
          "Elles ressemblent plutôt à des pensées que tu as longtemps évitées.",
      },
      choices: [
        {
          id: "elsewhere",
          text: "Je veux savoir ce qu’il y a ailleurs.",
          sub: "Même si tu ne sais pas encore où cela mène.",
          score: { explorer: 3 },
        },
        {
          id: "stable-ground",
          text: "Je veux pouvoir rester sans avoir peur de perdre pied.",
          sub: "Tu ne cherches pas une cage, mais un sol fiable.",
          score: { guardian: 3 },
        },
        {
          id: "create-myself",
          text: "Je veux créer quelque chose qui me ressemble.",
          sub: "Pas pour prouver, mais pour exister plus justement.",
          score: { creator: 3 },
        },
        {
          id: "matter-to-someone",
          text: "Je veux compter pour quelqu’un sans devoir disparaître.",
          sub: "Être proche sans devoir t’effacer.",
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
        heading: "Quelle porte ouvres-tu ?",
        line1: "La dernière salle est presque vide.",
        line2:
          "Il n’y a ni tableau, ni statue, ni vitrine. Seulement quatre portes translucides, et derrière chacune, une lumière différente.",
      },
      choices: [
        {
          id: "unknown-path",
          text: "La porte ouverte sur un chemin inconnu",
          sub: "Tu ne vois pas la fin, mais quelque chose en toi avance déjà.",
          score: { explorer: 4 },
        },
        {
          id: "quiet-house",
          text: "La porte d’une maison calme et solide",
          sub: "Un lieu où tu pourrais enfin relâcher la vigilance.",
          score: { guardian: 4 },
        },
        {
          id: "lit-atelier",
          text: "La porte d’un atelier encore allumé",
          sub: "Une table t’attend, avec assez d’espace pour recommencer.",
          score: { creator: 4 },
        },
        {
          id: "waiting-room",
          text: "La porte d’une pièce où quelqu’un t’attend vraiment",
          sub: "Pas pour te demander d’être différent. Juste pour te reconnaître.",
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
        "Ce résultat n’est pas une vérité figée. Il sert seulement à mettre en mots une direction intérieure possible.",
      restartLabel: "Revenir dans la brume",
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
      ending: "La brume s’ouvre un peu plus loin.",
      story: [
        "Tu ne cherches pas seulement une réponse. Tu cherches de l’air, de l’espace, une marge où ton élan peut redevenir possible.",
        "Le musée ne te dit pas où aller. Il te rappelle seulement que quelque chose en toi veut encore se mettre en route.",
        "Ce soir, laisse la curiosité t’accompagner sans te forcer.",
      ],
      title: "L’explorateur intérieur",
      subtitle: "Tu sembles attiré par ce qui n’a pas encore de forme.",
      description:
        "Une partie de toi cherche de l’air, du mouvement, des possibles. Ce n’est pas forcément que ta vie actuelle est mauvaise. C’est peut-être qu’elle est devenue trop étroite pour tout ce qui commence à bouger en toi.",
      reflection:
        "Tu n’as pas besoin de tout quitter pour t’écouter. Parfois, un premier pas suffit : essayer autre chose, apprendre autrement, changer un petit rituel, ouvrir une porte que tu gardais fermée.",
      suggestions: [
        "Note une chose nouvelle que tu aimerais essayer ce mois-ci.",
        "Demande-toi : qu’est-ce qui m’appelle, même faiblement ?",
        "Fais un petit pas exploratoire, sans obligation de réussir.",
      ],
      shareText: "Ce soir, le musée m’a montré mon explorateur intérieur.",
      desc:
        "Une partie de toi cherche de l’air, du mouvement, des possibles. Ce n’est pas forcément que ta vie actuelle est mauvaise.",
      cues: [
        "Note une chose nouvelle que tu aimerais essayer ce mois-ci.",
        "Demande-toi : qu’est-ce qui m’appelle, même faiblement ?",
        "Fais un petit pas exploratoire, sans obligation de réussir.",
      ],
    },
    guardian: {
      image: "/scenes/fog-museum/result-guardian.png",
      ending: "La lumière se stabilise dans le silence.",
      story: [
        "Tu n’as pas besoin d’aller plus vite que ton besoin de sécurité.",
        "Le musée te rappelle qu’un sol fiable n’est pas une cage. C’est parfois la condition pour respirer pleinement.",
        "Ce soir, laisse quelque chose te contenir sans t’enfermer.",
      ],
      title: "Le gardien intérieur",
      subtitle: "Tu sembles chercher un endroit où te sentir en sécurité.",
      description:
        "Une partie de toi ne veut pas forcément plus d’aventure. Elle veut pouvoir respirer sans être constamment en alerte. Tu as peut-être besoin de stabilité, de repères, d’un rythme qui ne t’oblige pas à te dépasser tout le temps.",
      reflection:
        "Chercher la sécurité n’est pas un manque de courage. C’est parfois la base nécessaire pour retrouver ton énergie, ta clarté et ton désir.",
      suggestions: [
        "Identifie une chose qui te donne un sentiment de stabilité.",
        "Allège une décision inutile cette semaine.",
        "Crée un petit rituel qui te rassure sans t’enfermer.",
      ],
      shareText: "Ce soir, le musée m’a montré mon gardien intérieur.",
      desc:
        "Une partie de toi ne veut pas forcément plus d’aventure. Elle veut pouvoir respirer sans être constamment en alerte.",
      cues: [
        "Identifie une chose qui te donne un sentiment de stabilité.",
        "Allège une décision inutile cette semaine.",
        "Crée un petit rituel qui te rassure sans t’enfermer.",
      ],
    },
    creator: {
      image: "/scenes/fog-museum/result-creator.png",
      ending: "Un tracé s’allume au fond du couloir.",
      story: [
        "Tu sens qu’il y a encore en toi des formes qui demandent à sortir.",
        "Le musée n’attend pas une œuvre parfaite. Il attend seulement que ta voix ne disparaisse pas sous les attentes.",
        "Ce soir, autorise quelque chose à prendre forme, même imparfaitement.",
      ],
      title: "Le créateur intérieur",
      subtitle: "Tu sembles avoir besoin d’exprimer ce qui reste coincé en toi.",
      description:
        "Il y a peut-être en toi des idées, des images, des phrases ou des émotions qui n’ont pas encore trouvé de sortie. Tu n’as pas besoin de produire quelque chose de parfait. Tu as surtout besoin de ne pas laisser ta voix disparaître sous les attentes des autres.",
      reflection:
        "Créer ne veut pas toujours dire faire une œuvre. Cela peut vouloir dire écrire une phrase vraie, choisir une couleur, changer un espace, dire enfin ce que tu ressens.",
      suggestions: [
        "Écris pendant cinq minutes sans corriger.",
        "Choisis une émotion et transforme-la en image, en mot ou en geste.",
        "Fais quelque chose uniquement parce que cela te ressemble.",
      ],
      shareText: "Ce soir, le musée m’a montré mon créateur intérieur.",
      desc:
        "Il y a peut-être en toi des idées, des images, des phrases ou des émotions qui n’ont pas encore trouvé de sortie.",
      cues: [
        "Écris pendant cinq minutes sans corriger.",
        "Choisis une émotion et transforme-la en image, en mot ou en geste.",
        "Fais quelque chose uniquement parce que cela te ressemble.",
      ],
    },
    relater: {
      image: "/scenes/fog-museum/result-relater.png",
      ending: "Une présence discrète reste de l’autre côté de la vitre.",
      story: [
        "Tu n’as pas besoin d’être seul dans ce que tu traverses.",
        "Le musée te rappelle que le lien peut être un lieu, pas seulement une réponse.",
        "Ce soir, autorise-toi à être rejoint sans devoir te justifier.",
      ],
      title: "Le lien intérieur",
      subtitle: "Tu sembles chercher un lien qui ait du sens.",
      description:
        "Une partie de toi veut être rejointe, comprise, reconnue. Ce n’est pas une faiblesse. Ton monde intérieur semble se nourrir de relations vraies, de présences fiables, de moments où tu n’as pas besoin de jouer un rôle.",
      reflection:
        "Avoir besoin de lien ne signifie pas dépendre des autres. Cela peut simplement vouloir dire que ton cœur se comprend mieux lorsqu’il peut résonner avec quelqu’un.",
      suggestions: [
        "Envoie un message simple à une personne sûre.",
        "Demande-toi : avec qui puis-je être un peu plus vrai ?",
        "Accorde de la valeur aux liens qui te rendent plus vivant.",
      ],
      shareText: "Ce soir, le musée m’a montré mon lien intérieur.",
      desc:
        "Une partie de toi veut être rejointe, comprise, reconnue. Ce n’est pas une faiblesse.",
      cues: [
        "Envoie un message simple à une personne sûre.",
        "Demande-toi : avec qui puis-je être un peu plus vrai ?",
        "Accorde de la valeur aux liens qui te rendent plus vivant.",
      ],
    },
  },
};
