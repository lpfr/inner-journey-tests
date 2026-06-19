export const glassGreenhouseScene = {
  id: "glass-greenhouse",
  title: "La serre de verre",
  description: "Une visite douce sur ce que tu ressens, absorbes et protèges.",
  subtitle: "Comment te protéger sans te fermer ?",
  theme: "sensibilité",
  targetAudience:
    "Pour les moments où tu ressens beaucoup et cherches comment rester ouvert sans te laisser envahir.",
  psychologyFrame:
    "Sensibilité, limites, douceur, filtrage et ouverture protégée.",
  status: "Disponible",
  coverImage: "/scenes/glass-greenhouse/glass_greenhouse_home.png",
  cover: "/scenes/glass-greenhouse/glass_greenhouse_home.png",
  background: "/scenes/glass-greenhouse/glass_greenhouse_home.png",
  introImage: "/scenes/glass-greenhouse/greenhouse_intro.png",
  resultTypes: ["limites", "douceur", "filtrage", "ouverture"],
  tieBreakOrder: ["limites", "filtrage", "douceur", "ouverture"],
  choices: [],
  disclaimer:
    "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux écouter ce que ta sensibilité demande en ce moment.",
  audio: {
    ambience: "/scenes/glass-greenhouse/audio/greenhouse_ambience.mp3",
    choice: "/scenes/glass-greenhouse/audio/choice_soft.mp3",
    step: "/scenes/glass-greenhouse/audio/water_drops.mp3",
    ending: "/scenes/glass-greenhouse/audio/ending_greenhouse.mp3",
  },
  opening: {
    eyebrow: "Grande sensibilité",
    title: "La serre de verre",
    subtitle: "Une visite douce sur ce que tu ressens, absorbes et protèges.",
    enterLabel: "Entrer dans la serre",
    silentLabel: "Entrer sans le son",
  },
  intro: {
    time: "15 h 06 · Verrière humide",
    title: "La serre de verre",
    line1:
      "La serre respire doucement sous la lumière. Chaque feuille semble retenir une goutte, chaque vitre laisse passer un peu trop du monde.",
    line2:
      "Tu n’es pas ici pour devenir moins sensible. Seulement pour découvrir ce qui pourrait te protéger sans t’éteindre.",
    enter: "Entrer dans la serre",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "vitre-embuee",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/glass-greenhouse/fogged_glass.png",
      copy: {
        heading: "La vitre embuée",
        line1: "Que fais-tu quand tout devient flou ?",
        line2:
          "La buée recouvre une grande vitre. Dehors, les formes bougent sans vraiment entrer.",
      },
      choices: [
        { id: "ligne-claire", text: "Tu traces une ligne claire sur la vitre.", score: { limites: 1 } },
        { id: "main-verre", text: "Tu poses ta main contre le verre.", score: { douceur: 1 } },
        {
          id: "petit-cercle",
          text: "Tu essuies seulement un petit cercle.",
          score: { filtrage: 1 },
        },
        {
          id: "regarde-dehors",
          text: "Tu regardes dehors sans ouvrir la porte.",
          score: { ouverture: 1 },
        },
      ],
      nextStep: "plante-exposee",
    },
    {
      id: "plante-exposee",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/glass-greenhouse/exposed_plant.png",
      copy: {
        heading: "La plante trop exposée",
        line1: "Comment prends-tu soin d’elle ?",
        line2:
          "Une plante fragile reçoit trop de lumière. Ses feuilles brillent, mais certaines commencent à se replier.",
      },
      choices: [
        { id: "rideau", text: "Tu tires doucement un rideau.", score: { limites: 1 } },
        { id: "arrose", text: "Tu l’arroses avec patience.", score: { douceur: 1 } },
        {
          id: "lumiere-douce",
          text: "Tu déplaces le pot vers une lumière plus douce.",
          score: { filtrage: 1 },
        },
        {
          id: "verriere",
          text: "Tu ouvres la verrière juste un instant.",
          score: { ouverture: 1 },
        },
      ],
      nextStep: "bruit-pluie",
    },
    {
      id: "bruit-pluie",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/glass-greenhouse/rain_on_glass.png",
      copy: {
        heading: "Le bruit de la pluie",
        line1: "Que laisses-tu entrer ?",
        line2:
          "La pluie frappe le toit de verre. Le son est beau, mais il prend toute la place.",
      },
      choices: [
        { id: "porte-interieure", text: "Tu fermes la porte intérieure.", score: { limites: 1 } },
        { id: "ralentis", text: "Tu t’assois et tu ralentis.", score: { douceur: 1 } },
        {
          id: "coin-calme",
          text: "Tu t’éloignes vers un coin plus calme.",
          score: { filtrage: 1 },
        },
        {
          id: "ecoute-leger",
          text: "Tu écoutes sans chercher à tout retenir.",
          score: { ouverture: 1 },
        },
      ],
      nextStep: "fleur-fissuree",
    },
    {
      id: "fleur-fissuree",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/glass-greenhouse/cracked_flower.png",
      copy: {
        heading: "La fleur fissurée",
        line1: "Que fais-tu devant ce qui semble fragile ?",
        line2:
          "Une fleur pousse dans un pot fendu. Elle tient encore, mais son équilibre demande de l’attention.",
      },
      choices: [
        { id: "endroit-sur", text: "Tu poses le pot dans un endroit sûr.", score: { limites: 1 } },
        {
          id: "soutiens-tige",
          text: "Tu soutiens la tige avec délicatesse.",
          score: { douceur: 1 },
        },
        {
          id: "enleve-poids",
          text: "Tu enlèves ce qui pèse autour d’elle.",
          score: { filtrage: 1 },
        },
        {
          id: "un-peu-air",
          text: "Tu la laisses recevoir un peu d’air.",
          score: { ouverture: 1 },
        },
      ],
      nextStep: "porte-serre",
    },
    {
      id: "porte-serre",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/glass-greenhouse/greenhouse_door.png",
      copy: {
        heading: "La porte de la serre",
        line1: "Comment sors-tu vers le jardin ?",
        line2:
          "La porte donne sur un jardin plus vaste. Le vent attend dehors, ni hostile ni parfaitement doux.",
      },
      choices: [
        { id: "main-poignee", text: "Tu gardes une main sur la poignée.", score: { limites: 1 } },
        { id: "ton-rythme", text: "Tu avances à ton rythme.", score: { douceur: 1 } },
        {
          id: "chemin-calme",
          text: "Tu choisis le chemin le moins bruyant.",
          score: { filtrage: 1 },
        },
        {
          id: "entrouvre",
          text: "Tu entrouvres la porte et tu respires.",
          score: { ouverture: 1 },
        },
      ],
      nextStep: "result",
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [900, 2100],
      note:
        "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux écouter ce que ta sensibilité demande en ce moment.",
      restartLabel: "Recommencer la visite",
    },
  ],
  scores: {
    "vitre-embuee": {
      "ligne-claire": { limites: 1 },
      "main-verre": { douceur: 1 },
      "petit-cercle": { filtrage: 1 },
      "regarde-dehors": { ouverture: 1 },
    },
    "plante-exposee": {
      rideau: { limites: 1 },
      arrose: { douceur: 1 },
      "lumiere-douce": { filtrage: 1 },
      verriere: { ouverture: 1 },
    },
    "bruit-pluie": {
      "porte-interieure": { limites: 1 },
      ralentis: { douceur: 1 },
      "coin-calme": { filtrage: 1 },
      "ecoute-leger": { ouverture: 1 },
    },
    "fleur-fissuree": {
      "endroit-sur": { limites: 1 },
      "soutiens-tige": { douceur: 1 },
      "enleve-poids": { filtrage: 1 },
      "un-peu-air": { ouverture: 1 },
    },
    "porte-serre": {
      "main-poignee": { limites: 1 },
      "ton-rythme": { douceur: 1 },
      "chemin-calme": { filtrage: 1 },
      entrouvre: { ouverture: 1 },
    },
  },
  results: {
    limites: {
      image: "/scenes/glass-greenhouse/ending_limites.png",
      ending: "La lumière devient plus douce quand le rideau descend.",
      story: ["Rien ne disparaît.", "Mais tout cesse d’entrer en même temps."],
      title: "Besoin de limites",
      subtitle: "Ta sensibilité a peut-être besoin de frontières plus lisibles.",
      desc: "Poser une limite ne veut pas dire fermer ton cœur. Cela peut simplement t’aider à rester présent sans te laisser envahir.",
      reflection:
        "Ce n’est pas une dureté : c’est une façon de donner au lien une forme respirable.",
      suggestions: [
        "Choisis une limite simple pour cette semaine.",
        "Essaie une heure sans messages, une réponse plus lente ou un non plus clair.",
        "Demande-toi : « Qu’est-ce que je laisse entrer trop vite ? »",
      ],
      shareText: "Une limite juste ne coupe pas le lien. Elle lui donne une forme respirable.",
    },
    douceur: {
      image: "/scenes/glass-greenhouse/ending_douceur.png",
      ending: "La plante ne se redresse pas sous la pression.",
      story: [
        "Elle revient lentement quand l’eau arrive au bon rythme.",
        "La serre devient plus calme autour d’elle.",
      ],
      title: "Besoin de douceur",
      subtitle:
        "Tu as peut-être tendance à te demander d’être plus solide que tu ne peux l’être aujourd’hui.",
      desc: "Ta sensibilité n’a pas besoin d’être corrigée. Elle a peut-être besoin d’être accueillie avec moins de dureté.",
      reflection: "Ce n’est pas une faiblesse : la douceur peut aider la force à revenir.",
      suggestions: [
        "Remplace une exigence par un geste plus tendre.",
        "Ralentis une chose.",
        "Parle-toi comme tu parlerais à quelqu’un que tu veux protéger.",
      ],
      shareText: "La douceur n’enlève pas la force. Elle l’aide à revenir.",
    },
    filtrage: {
      image: "/scenes/glass-greenhouse/ending_filtrage.png",
      ending: "Tu essuies seulement une petite partie de la vitre.",
      story: [
        "Le monde reste là.",
        "Mais il devient possible de le regarder sans tout absorber.",
      ],
      title: "Besoin de filtrer",
      subtitle:
        "Tu reçois peut-être trop d’informations, trop d’ambiances ou trop de demandes à la fois.",
      desc: "Le problème n’est pas de ressentir. C’est parfois de tout laisser entrer sans filtre.",
      reflection:
        "Ce n’est pas ignorer le monde : c’est choisir comment le rencontrer.",
      suggestions: [
        "Réduis une source de bruit.",
        "Choisis ce que tu consultes.",
        "Fais une pause avant de répondre.",
      ],
      shareText: "Filtrer, ce n’est pas ignorer le monde. C’est choisir comment le rencontrer.",
    },
    ouverture: {
      ending: "La porte s’entrouvre.",
      story: [
        "L’air entre doucement, sans tout renverser.",
        "Tu comprends que tu peux rester sensible sans rester sans défense.",
      ],
      title: "Besoin d’ouverture protégée",
      subtitle: "Une part de toi veut encore s’ouvrir, aimer, sentir, répondre.",
      desc: "Mais elle a besoin de conditions plus sûres pour le faire. Tu n’as pas à choisir entre tout recevoir et tout fermer.",
      reflection: "Ce n’est pas une contradiction : tu peux t’ouvrir sans te perdre.",
      suggestions: [
        "Approche-toi d’une chose vivante, mais à petite dose.",
        "Choisis une conversation courte, un lieu calme ou un lien qui ne t’efface pas.",
        "Demande-toi : « Où puis-je m’ouvrir un peu, sans me perdre ? »",
      ],
      shareText: "Tu peux rester ouvert, à condition de rester avec toi.",
    },
  },
};
