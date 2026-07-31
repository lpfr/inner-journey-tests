export const mountainLighthouseScene = {
  id: "mountain-lighthouse",
  title: "Le phare au sommet",
  description: "Une ascension douce pour retrouver un repère quand tout semble flou.",
  subtitle: "Quel repère peut te guider ?",
  theme: "direction",
  targetAudience:
    "Pour les moments où tu cherches une direction assez claire pour avancer.",
  psychologyFrame:
    "Explorer le repère dont tu as besoin sans forcer une réponse définitive.",
  status: "Disponible",
  coverImage: "/scenes/mountain-lighthouse/lighthouse_home.png",
  cover: "/scenes/mountain-lighthouse/lighthouse_home.png",
  background: "/scenes/mountain-lighthouse/lighthouse_home.png",
  introImage: "/scenes/mountain-lighthouse/lighthouse_intro.png",
  resultTypes: ["clarte", "courage", "patience", "boussole"],
  tieBreakOrder: ["clarte", "courage", "patience", "boussole"],
  choices: [],
  disclaimer:
    "Ce résultat n'est pas un diagnostic. C'est seulement une piste pour mieux écouter le repère dont tu as besoin en ce moment.",
  audio: {},
  opening: {
    eyebrow: "Direction intérieure",
    title: "Le phare au sommet",
    subtitle: "Une ascension douce pour retrouver un repère quand tout semble flou.",
    enterLabel: "Monter vers le phare",
    silentLabel: "Monter sans le son",
  },
  intro: {
    time: "04 h 12 · Sentier dans la brume",
    title: "Le phare au sommet",
    line1:
      "Le sentier commence dans une brume épaisse. Au loin, une lumière tourne lentement au sommet de la montagne.",
    line2:
      "Tu n'es pas ici pour trouver toute la route. Seulement pour découvrir ce qui peut éclairer ton prochain pas.",
    enter: "Monter vers le phare",
    silentEnter: "Monter sans le son",
  },
  steps: [
    {
      id: "sentier-divise",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/mountain-lighthouse/wet_map_path.png",
      copy: {
        heading: "Le sentier divisé",
        line1: "Comment choisis-tu le chemin ?",
        line2:
          "Le chemin se sépare entre quatre traces presque invisibles. La brume rend chaque direction possible, mais aucune certaine.",
      },
      choices: [
        { id: "chemin-lisible", text: "Tu cherches le chemin le plus lisible.", score: { clarte: 1 } },
        { id: "appel-doute", text: "Tu prends celui qui t'appelle malgré le doute.", score: { courage: 1 } },
        { id: "brume-bouge", text: "Tu attends que la brume bouge.", score: { patience: 1 } },
        { id: "boussole-interieure", text: "Tu regardes ta boussole intérieure.", score: { boussole: 1 } },
      ],
      nextStep: "carte-mouillee",
    },
    {
      id: "carte-mouillee",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/mountain-lighthouse/wet_map_path.png",
      copy: {
        heading: "La carte mouillée",
        line1: "Que fais-tu de la carte ?",
        line2:
          "Une carte humide repose sur une pierre. L'encre a coulé, mais certains signes restent visibles.",
      },
      choices: [
        { id: "reperes-utiles", text: "Tu gardes seulement les repères utiles.", score: { clarte: 1 } },
        { id: "pas-tout-ecrit", text: "Tu avances même si tout n'est pas écrit.", score: { courage: 1 } },
        { id: "laisser-secher", text: "Tu la laisses sécher un moment.", score: { patience: 1 } },
        { id: "carte-ressenti", text: "Tu compares la carte à ce que tu ressens.", score: { boussole: 1 } },
      ],
      nextStep: "vent-crete",
    },
    {
      id: "vent-crete",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/mountain-lighthouse/lighthouse_home.png",
      copy: {
        heading: "Le vent sur la crête",
        line1: "Que fais-tu quand le vent se lève ?",
        line2:
          "Le vent traverse la montagne et brouille tes pensées. Le phare disparaît puis réapparaît entre deux nuages.",
      },
      choices: [
        { id: "une-lumiere", text: "Tu te concentres sur une seule lumière.", score: { clarte: 1 } },
        { id: "pas-malgre-vent", text: "Tu fais un pas malgré le vent.", score: { courage: 1 } },
        { id: "abri-rocher", text: "Tu t'abrites derrière un rocher.", score: { patience: 1 } },
        { id: "stable-en-toi", text: "Tu écoutes ce qui reste stable en toi.", score: { boussole: 1 } },
      ],
      nextStep: "etoiles-cachees",
    },
    {
      id: "etoiles-cachees",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/mountain-lighthouse/lighthouse_home.png",
      copy: {
        heading: "Les étoiles cachées",
        line1: "Que cherches-tu dans le ciel ?",
        line2:
          "Les nuages couvrent presque toutes les étoiles. Une seule apparaît, très pâle, au-dessus du sentier.",
      },
      choices: [
        { id: "etoile-visible", text: "Tu suis l'étoile visible.", score: { clarte: 1 } },
        { id: "sans-preuves", text: "Tu continues sans attendre toutes les preuves.", score: { courage: 1 } },
        { id: "ciel-change", text: "Tu restes jusqu'à voir le ciel changer.", score: { patience: 1 } },
        { id: "sentir-nord", text: "Tu fermes les yeux pour sentir le nord.", score: { boussole: 1 } },
      ],
      nextStep: "porte-phare",
    },
    {
      id: "porte-phare",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/mountain-lighthouse/lighthouse_door.png",
      copy: {
        heading: "La porte du phare",
        line1: "Comment entres-tu dans la lumière ?",
        line2:
          "La porte du phare est froide sous ta main. Derrière elle, la lumière tourne encore, lente et régulière.",
      },
      choices: [
        { id: "ce-qu-elle-eclaire", text: "Tu regardes d'abord ce qu'elle éclaire.", score: { clarte: 1 } },
        { id: "ouvrir-malgre-tremblement", text: "Tu ouvres la porte malgré le tremblement.", score: { courage: 1 } },
        { id: "respirer-avant", text: "Tu respires avant d'entrer.", score: { patience: 1 } },
        { id: "main-coeur", text: "Tu poses la main sur ton cœur.", score: { boussole: 1 } },
      ],
      nextStep: "result",
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [900, 2100],
      note:
        "Ce résultat n'est pas un diagnostic. C'est seulement une piste pour mieux écouter le repère dont tu as besoin en ce moment.",
      restartLabel: "Recommencer l'ascension",
    },
  ],
  scores: {
    "sentier-divise": {
      "chemin-lisible": { clarte: 1 },
      "appel-doute": { courage: 1 },
      "brume-bouge": { patience: 1 },
      "boussole-interieure": { boussole: 1 },
    },
    "carte-mouillee": {
      "reperes-utiles": { clarte: 1 },
      "pas-tout-ecrit": { courage: 1 },
      "laisser-secher": { patience: 1 },
      "carte-ressenti": { boussole: 1 },
    },
    "vent-crete": {
      "une-lumiere": { clarte: 1 },
      "pas-malgre-vent": { courage: 1 },
      "abri-rocher": { patience: 1 },
      "stable-en-toi": { boussole: 1 },
    },
    "etoiles-cachees": {
      "etoile-visible": { clarte: 1 },
      "sans-preuves": { courage: 1 },
      "ciel-change": { patience: 1 },
      "sentir-nord": { boussole: 1 },
    },
    "porte-phare": {
      "ce-qu-elle-eclaire": { clarte: 1 },
      "ouvrir-malgre-tremblement": { courage: 1 },
      "respirer-avant": { patience: 1 },
      "main-coeur": { boussole: 1 },
    },
  },
  results: {
    clarte: {
      image: "/scenes/mountain-lighthouse/lighthouse_door.png",
      title: "Besoin de clarté",
      ending: "La lumière du phare balaie la brume.",
      story: [
        "Elle ne montre pas toute la montagne.",
        "Mais elle révèle assez de pierres pour avancer sans te perdre.",
      ],
      subtitle: "Tu as peut-être besoin de simplifier ce qui se mélange en toi.",
      desc:
        "Trop d'options, trop d'informations ou trop de voix peuvent rendre la direction invisible.",
      reflection:
        "La clarté ne veut pas dire tout savoir. Elle peut simplement commencer par distinguer ce qui compte vraiment de ce qui fait seulement du bruit.",
      suggestions: [
        "Écris trois choses : ce qui est important, ce qui est urgent, ce qui peut attendre.",
        "Demande-toi : « Qu'est-ce qui devient plus simple quand j'enlève le bruit autour de moi ? »",
      ],
      shareText:
        "Une petite lumière claire suffit parfois à rendre le prochain pas possible.",
    },
    courage: {
      image: "/scenes/mountain-lighthouse/lighthouse_home.png",
      title: "Besoin de courage",
      ending: "Le vent ne s'arrête pas.",
      story: [
        "Pourtant, ton pied trouve une pierre stable.",
        "Le phare ne vient pas vers toi : c'est toi qui t'en approches.",
      ],
      subtitle:
        "Une part de toi connaît peut-être déjà une direction, même si elle n'est pas parfaitement sûre.",
      desc:
        "Ce qui manque n'est pas forcément une réponse. C'est peut-être l'autorisation d'avancer avec un peu de doute.",
      reflection:
        "Le courage n'est pas l'absence de peur. C'est parfois un pas assez petit pour être fait quand même.",
      suggestions: [
        "Choisis une action de dix minutes.",
        "Pas une décision définitive. Seulement un geste qui va dans le sens de ce que tu pressens.",
        "Demande-toi : « Qu'est-ce que je ferais si je n'avais pas besoin d'être absolument certain ? »",
      ],
      shareText: "Tu peux avancer sans que toute la montagne soit éclairée.",
    },
    patience: {
      image: "/scenes/mountain-lighthouse/wet_map_path.png",
      title: "Besoin de patience",
      ending: "Tu t'abrites près d'un rocher.",
      story: [
        "La brume continue de passer devant toi.",
        "Peu à peu, le chemin cesse de se confondre avec le ciel.",
      ],
      subtitle: "Tu n'es peut-être pas obligé de forcer une réponse maintenant.",
      desc:
        "Parfois, l'incertitude demande un peu de temps avant de devenir lisible. Attendre n'est pas toujours éviter.",
      reflection:
        "Cela peut être une manière de laisser apparaître ce qui était encore trop couvert. La patience dont tu as besoin n'est pas l'immobilité, mais une attention calme à ce qui se précise.",
      suggestions: [
        "Donne-toi un délai clair.",
        "Pas pour repousser indéfiniment. Pour observer sans te presser.",
        "Demande-toi : « Qu'est-ce qui a besoin de temps avant que je choisisse ? »",
      ],
      shareText:
        "Certaines directions ne se révèlent pas sous la pression, mais dans l'espace.",
    },
    boussole: {
      image: "/scenes/mountain-lighthouse/lighthouse_door.png",
      title: "Besoin d'une boussole intérieure",
      ending: "Dans la tour du phare, la lumière tourne autour de toi.",
      story: [
        "Mais le vrai repère ne vient pas seulement du dehors.",
        "Quelque chose en toi sait reconnaître le nord.",
      ],
      subtitle:
        "Tu as peut-être beaucoup regardé les attentes, les avis ou les chemins déjà tracés.",
      desc:
        "Ils peuvent aider, mais ils ne peuvent pas toujours choisir à ta place. Ce dont tu as besoin ressemble peut-être à un retour vers tes propres critères.",
      reflection:
        "Ta boussole intérieure peut être faite de valeurs, de sensations, de limites et d'élans discrets. Elle ne crie pas toujours, mais elle revient quand tu lui laisses un peu de silence.",
      suggestions: [
        "Note une décision actuelle.",
        "Puis demande-toi ce qui serait fidèle à toi, même si ce n'est pas le choix le plus évident.",
        "Demande-toi : « Est-ce que je cherche une direction, ou une permission extérieure ? »",
      ],
      shareText:
        "Un repère intérieur n'éclaire pas tout. Mais il t'aide à ne pas te quitter.",
    },
  },
};
