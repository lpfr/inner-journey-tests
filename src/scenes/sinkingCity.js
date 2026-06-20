export const sinkingCityScene = {
  id: "sinking-city",
  title: "La ville qui s’effondre",
  description: "Une traversée calme au milieu de ce qui vacille.",
  subtitle: "Quand tout vacille, qu’est-ce qui t’aide à rester présent ?",
  theme: "instabilité",
  targetAudience:
    "Pour les moments où la pression, l’incertitude ou les changements deviennent difficiles à porter.",
  psychologyFrame:
    "Sécurité intérieure, ancrage corporel, appui et petits gestes concrets.",
  status: "Disponible",
  coverImage: "/scenes/collapsing-city/collapsing_city_home.webp",
  cover: "/scenes/collapsing-city/collapsing_city_home.webp",
  background: "/scenes/collapsing-city/collapsing_city_home.webp",
  introImage: "/scenes/collapsing-city/city_intro.webp",
  resultTypes: ["ancrage", "abri", "mouvement", "appui"],
  tieBreakOrder: ["ancrage", "abri", "appui", "mouvement"],
  choices: [],
  disclaimer:
    "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux t’écouter.",
  audio: {
    ambience: "/scenes/collapsing-city/audio/city_ambience.mp3",
    rumble: "/scenes/collapsing-city/audio/soft_rumble.mp3",
    choice: "/scenes/collapsing-city/audio/choice_tap.mp3",
  },
  opening: {
    eyebrow: "Instabilité intérieure",
    title: "La ville qui s’effondre",
    subtitle: "Une traversée calme au milieu de ce qui vacille.",
    enterLabel: "Entrer dans la ville",
    silentLabel: "Entrer sans le son",
  },
  intro: {
    time: "00 h 13 · Avenue fissurée",
    title: "La ville qui s’effondre",
    line1:
      "La ville tremble doucement sous tes pas. Les fenêtres brillent encore, mais les rues ne tiennent plus tout à fait en place.",
    line2:
      "Tu n’es pas ici pour tout réparer. Seulement pour voir ce qui peut encore te soutenir.",
    enter: "Entrer dans la ville",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "fissure",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/collapsing-city/first_crack.webp",
      rain: false,
      copy: {
        heading: "La première fissure",
        line1: "Que fais-tu quand le sol bouge ?",
        line2:
          "Une ligne sombre traverse l’avenue. Autour de toi, les feux rouges clignotent dans la brume.",
      },
      choices: [
        { id: "pieds-au-sol", text: "Tu poses les deux pieds au sol.", score: { ancrage: 1 } },
        { id: "endroit-calme", text: "Tu cherches un endroit plus calme.", score: { abri: 1 } },
        {
          id: "rue-stable",
          text: "Tu fais un pas vers la rue la plus stable.",
          score: { mouvement: 1 },
        },
        { id: "quelquun-la", text: "Tu regardes si quelqu’un est encore là.", score: { appui: 1 } },
      ],
      nextStep: "immeubles",
    },
    {
      id: "immeubles",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/collapsing-city/leaning_buildings.webp",
      rain: false,
      copy: {
        heading: "Les immeubles penchés",
        line1: "Où portes-tu ton attention ?",
        line2:
          "Les façades se déplacent lentement. Plus tu regardes tout à la fois, plus la ville semble bouger.",
      },
      choices: [
        { id: "lumiere-immobile", text: "Tu fixes une lumière immobile.", score: { ancrage: 1 } },
        { id: "hall-silencieux", text: "Tu entres dans un hall silencieux.", score: { abri: 1 } },
        { id: "une-direction", text: "Tu choisis une seule direction.", score: { mouvement: 1 } },
        { id: "voix-familiere", text: "Tu appelles une voix familière.", score: { appui: 1 } },
      ],
      nextStep: "pont",
    },
    {
      id: "pont",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/collapsing-city/suspended_bridge.webp",
      rain: false,
      copy: {
        heading: "Le pont suspendu",
        line1: "Comment traverses-tu ?",
        line2:
          "Un pont tremble au-dessus d’une avenue vide. Il ne tombera peut-être pas, mais il demande de la prudence.",
      },
      choices: [
        { id: "compter-pas", text: "Tu avances en comptant tes pas.", score: { ancrage: 1 } },
        { id: "attendre-vent", text: "Tu attends que le vent baisse.", score: { abri: 1 } },
        {
          id: "pas-apres-pas",
          text: "Tu traverses lentement, un pas après l’autre.",
          score: { mouvement: 1 },
        },
        {
          id: "traverser-ensemble",
          text: "Tu demandes à quelqu’un de traverser avec toi.",
          score: { appui: 1 },
        },
      ],
      nextStep: "alarmes",
    },
    {
      id: "alarmes",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/collapsing-city/alarm_square.webp",
      rain: false,
      copy: {
        heading: "La place des alarmes",
        line1: "Que fais-tu avec tout ce bruit ?",
        line2:
          "Des sirènes lointaines se répondent. La ville semble vouloir toute ton attention.",
      },
      choices: [
        { id: "respire-lentement", text: "Tu respires plus lentement.", score: { ancrage: 1 } },
        { id: "ferme-porte", text: "Tu fermes une porte derrière toi.", score: { abri: 1 } },
        {
          id: "eteins-alarme",
          text: "Tu éteins une alarme à ta portée.",
          score: { mouvement: 1 },
        },
        {
          id: "besoin-instant",
          text: "Tu dis à quelqu’un : « J’ai besoin d’un instant. »",
          score: { appui: 1 },
        },
      ],
      nextStep: "lampadaire",
    },
    {
      id: "lampadaire",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/collapsing-city/last_lamppost.webp",
      rain: false,
      copy: {
        heading: "Le dernier lampadaire",
        line1: "Qu’est-ce qui t’aide à continuer ?",
        line2:
          "Au bout de la rue, un lampadaire reste allumé. Autour de lui, la ville respire plus doucement.",
      },
      choices: [
        { id: "pres-lumiere", text: "Tu restes près de cette lumière.", score: { ancrage: 1 } },
        { id: "abri-vent", text: "Tu t’assois à l’abri du vent.", score: { abri: 1 } },
        { id: "cercle-lumiere", text: "Tu suis le cercle de lumière.", score: { mouvement: 1 } },
        {
          id: "main-presence",
          text: "Tu tends la main vers une présence proche.",
          score: { appui: 1 },
        },
      ],
      nextStep: "result",
      playsEnding: false,
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [900, 2100],
      note:
        "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux t’écouter.",
      restartLabel: "Recommencer la traversée",
    },
  ],
  scores: {
    fissure: {
      "pieds-au-sol": { ancrage: 1 },
      "endroit-calme": { abri: 1 },
      "rue-stable": { mouvement: 1 },
      "quelquun-la": { appui: 1 },
    },
    immeubles: {
      "lumiere-immobile": { ancrage: 1 },
      "hall-silencieux": { abri: 1 },
      "une-direction": { mouvement: 1 },
      "voix-familiere": { appui: 1 },
    },
    pont: {
      "compter-pas": { ancrage: 1 },
      "attendre-vent": { abri: 1 },
      "pas-apres-pas": { mouvement: 1 },
      "traverser-ensemble": { appui: 1 },
    },
    alarmes: {
      "respire-lentement": { ancrage: 1 },
      "ferme-porte": { abri: 1 },
      "eteins-alarme": { mouvement: 1 },
      "besoin-instant": { appui: 1 },
    },
    lampadaire: {
      "pres-lumiere": { ancrage: 1 },
      "abri-vent": { abri: 1 },
      "cercle-lumiere": { mouvement: 1 },
      "main-presence": { appui: 1 },
    },
  },
  results: {
    ancrage: {
      image: "/scenes/collapsing-city/ending_ancrage.webp",
      ending: "La ville tremble encore.",
      story: [
        "Mais sous tes pieds, quelque chose devient plus réel.",
        "Tu n’as pas besoin de calmer tout le ciel pour retrouver un point d’appui.",
      ],
      title: "Besoin d’ancrage",
      subtitle: "Quand tout vacille, une part de toi cherche peut-être un point fixe.",
      desc: "Le concret peut t’aider à revenir ici : ton corps, ta respiration, une lumière, un objet.",
      reflection: "Ce n’est pas un manque de calme : c’est peut-être ton système intérieur qui cherche un appui.",
      cues: [
        "Choisis un ancrage très simple.",
        "Regarde une chose stable.",
        "Respire plus lentement.",
        "Sens tes pieds au sol.",
      ],
      shareText: "Le monde peut bouger. Tu peux revenir ici.",
    },
    abri: {
      image: "/scenes/collapsing-city/ending_abri.webp",
      ending: "Tu entres dans un lieu plus calme.",
      story: [
        "Dehors, la ville continue de changer.",
        "Mais pour un instant, tu n’as plus à tout recevoir.",
      ],
      title: "Besoin d’abri",
      subtitle: "Tu as peut-être besoin de réduire le bruit autour de toi.",
      desc: "Un espace plus doux peut t’aider à entendre ce qui compte vraiment.",
      reflection: "Ce n’est pas forcément une fuite : te protéger, c’est parfois reprendre un peu d’espace.",
      cues: [
        "Ferme une source de stimulation.",
        "Réduis une demande.",
        "Accorde-toi un endroit plus doux.",
      ],
      shareText: "Un abri n’est pas une fuite. C’est parfois le début du retour.",
    },
    mouvement: {
      image: "/scenes/collapsing-city/ending_mouvement.webp",
      ending: "Tu ne sais pas encore où mène la rue.",
      story: [
        "Mais un petit pas rend la ville moins immense.",
        "Le mouvement redonne une forme au chaos.",
      ],
      title: "Besoin de mouvement",
      subtitle:
        "Quand tout paraît trop grand, une petite action concrète peut redonner un peu de stabilité.",
      desc: "Le mouvement peut devenir un repère quand il reste simple et faisable.",
      reflection: "Ce n’est pas un retard de ne pas tout résoudre : il suffit parfois de commencer quelque part.",
      cues: ["Choisis une seule action.", "Très petite.", "Visible et faisable maintenant."],
      shareText: "Un petit geste peut rouvrir la rue.",
    },
    appui: {
      image: "/scenes/collapsing-city/ending_appui.webp",
      ending: "Dans la ville qui tremble, une présence reste près de toi.",
      story: ["Elle ne répare pas les murs.", "Mais elle rend la nuit moins seule."],
      title: "Besoin d’appui",
      subtitle: "Tu n’as peut-être pas besoin de porter l’instabilité seul.",
      desc: "Un lien sûr peut devenir un point fixe quand tout bouge.",
      reflection: "Ce n’est pas une faiblesse : parfois, la présence de quelqu’un aide simplement à tenir.",
      cues: [
        "Envoie un message simple.",
        "Dis ce qui se passe sans tout expliquer.",
        "Laisse quelqu’un rester près de toi, même en silence.",
      ],
      shareText: "Parfois, le soutien est la première structure qui tient.",
    },
  },
};
