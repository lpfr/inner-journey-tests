export const candyForestScene = {
  id: "candy-forest",
  title: "La Forêt des Bonbons",
  description:
    "Une traversée lumineuse sur la façon dont l'impulsion, la fatigue et les récompenses immédiates prennent parfois le pas sur ce que tu voulais faire.",
  subtitle:
    "Pourquoi est-ce que tu sais ce que tu devrais faire... mais tu n'y arrives pas ?",
  theme: "autocontrôle",
  targetAudience:
    "Personnes qui repoussent, s'épuisent, scrollent trop ou ont du mal à tenir leurs plans.",
  psychologyFrame:
    "Auto-régulation, impulsivité, fatigue mentale et récompense immédiate. Cette expérience n'est pas un outil médical ni un diagnostic psychologique.",
  coverImage: "/scenes/candy-forest/candy_forest_home.png",
  cover: "/scenes/candy-forest/candy_forest_home.png",
  background: "/scenes/candy-forest/candy_forest_home.png",
  introImage: "/scenes/candy-forest/forest_opening.png",
  status: "Disponible",
  resultTypes: ["satisfaction", "controle", "structure", "emotion"],
  tieBreakOrder: ["emotion", "structure", "satisfaction", "controle"],
  choices: [],
  disclaimer:
    "Cette expérience n'est pas un outil médical ni un diagnostic psychologique. Elle sert uniquement à l'introspection et au bien-être personnel.",
  audio: {
    ambience: "/scenes/candy-forest/audio/candy_forest_loop.mp3",
    choice: "/scenes/candy-forest/audio/choice_chime.mp3",
    temptation: "/scenes/candy-forest/audio/temptation_glow.mp3",
    ending: "/scenes/candy-forest/audio/ending_soft.mp3",
  },
  opening: {
    eyebrow: "Pause intérieure",
    title: "La Forêt des Bonbons",
    subtitle:
      "Un test doux, rapide et un peu trompeur sur l'impulsion, la fatigue et les petites échappées.",
    enterLabel: "Entrer dans la forêt",
    silentLabel: "Entrer en douceur",
  },
  intro: {
    time: "21 h 48 · Lisière sucrée",
    title: "La Forêt des Bonbons",
    line1: "Tu entres dans une forêt où chaque sentier promet un soulagement immédiat.",
    line2:
      "Certaines douceurs brillent. Certaines voix savent exactement quoi te dire. Et quelque part au bout du sentier, il y a ce que tu avais vraiment prévu de faire.",
    enter: "Entrer dans la forêt",
    silentEnter: "Entrer en douceur",
  },
  steps: [
    {
      id: "bonbon-lumineux",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/glowing_candy.png",
      rain: false,
      copy: {
        heading: "Un bonbon lumineux roule jusqu'à tes pieds.",
        line1: "Il pulse doucement, comme une notification que tu n'arrives pas à ignorer.",
        line2: "Il promet une minute de plaisir immédiat.",
      },
      choices: [
        {
          id: "mange-tout-de-suite",
          text: "Tu le manges tout de suite, juste pour voir.",
          sub: "Le soulagement arrive avant la réflexion.",
          score: { satisfaction: 1 },
        },
        {
          id: "interdiction-totale",
          text: "Tu te l'interdis même du regard.",
          sub: "Tu veux couper l'envie à la racine.",
          score: { controle: 1 },
        },
        {
          id: "petite-boite",
          text: "Tu le mets dans une petite boîte et tu fixes l'heure du choix.",
          sub: "Le plaisir a besoin d'un cadre.",
          score: { structure: 1 },
        },
        {
          id: "pourquoi-maintenant",
          text: "Tu t'assois et tu te demandes pourquoi tu en as si envie maintenant.",
          sub: "L'émotion cherche à parler avant l'action.",
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
      image: "/scenes/candy-forest/talking_fox.png",
      rain: false,
      copy: {
        heading: "Un renard apparaît entre deux arbres.",
        line1: "Il connaît un raccourci vers la sortie, mais il te demande de laisser ta carte.",
        line2: "Le chemin simple a l'air tentant.",
      },
      choices: [
        {
          id: "suis-raccourci",
          text: "Tu le suis, parce que le chemin a l'air plus facile.",
          sub: "La promesse d'un gain rapide l'emporte.",
          score: { satisfaction: 1 },
        },
        {
          id: "refuse-sechement",
          text: "Tu refuses sèchement et tu continues sans écouter.",
          sub: "Tu préfères garder le contrôle complet.",
          score: { controle: 1 },
        },
        {
          id: "compare-carte",
          text: "Tu compares son raccourci avec ta carte avant de décider.",
          sub: "Tu veux décider avec des repères.",
          score: { structure: 1 },
        },
        {
          id: "pourquoi-peur",
          text: "Tu lui demandes pourquoi tu as peur de prendre le long chemin.",
          sub: "La question vise ce que l'envie protège.",
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
      image: "/scenes/candy-forest/candy_rain.png",
      rain: false,
      copy: {
        heading: "Une pluie de bonbons tombe du ciel.",
        line1: "Tout scintille, tout appelle, tout veut être choisi maintenant.",
        line2: "La forêt devient plus bruyante quand tu es fatigué.",
      },
      choices: [
        {
          id: "attrape-un",
          text: "Tu en attrapes un juste pour t'alléger tout de suite.",
          sub: "La gratification t'attrape avant la règle.",
          score: { satisfaction: 1 },
        },
        {
          id: "dos-tournee",
          text: "Tu tournes le dos et tu accélères sans discuter.",
          sub: "Tu veux dominer la tentation d'un coup.",
          score: { controle: 1 },
        },
        {
          id: "pause-programmee",
          text: "Tu te fixes une pause précise avant de reprendre la marche.",
          sub: "Tu gardes la douceur, mais avec une frontière.",
          score: { structure: 1 },
        },
        {
          id: "calme-cache",
          text: "Tu remarques que la pluie sucrée vient calmer quelque chose en toi.",
          sub: "L'émotion explique parfois l'urgence.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "miroir",
    },
    {
      id: "miroir",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/mirror_abandoned_self.png",
      rain: false,
      copy: {
        heading: "Un miroir montre une version de toi qui a déjà abandonné.",
        line1: "Elle a l'air soulagée. C'est presque insultant.",
        line2: "La vraie question n'est pas ce qu'elle a fait, mais ce qu'elle essayait d'éviter.",
      },
      choices: [
        {
          id: "distrait",
          text: "Tu détournes les yeux et tu cherches quelque chose de plus simple.",
          sub: "Le confort gagne par sidération.",
          score: { satisfaction: 1 },
        },
        {
          id: "brise-reflet",
          text: "Tu refuses de la regarder plus longtemps.",
          sub: "Tu veux couper la scène avant qu'elle ne t'atteigne.",
          score: { controle: 1 },
        },
        {
          id: "note-ce-qu-elle-montre",
          text: "Tu notes ce qu'elle montre avant de décider quoi faire.",
          sub: "La structure transforme le reflet en information.",
          score: { structure: 1 },
        },
        {
          id: "ce-qu-elle-calme",
          text: "Tu te demandes quelle douleur elle essayait de calmer.",
          sub: "Tu suis l'émotion jusque sous le geste.",
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
      image: "/scenes/candy-forest/marshmallow_tree.png",
      rain: false,
      copy: {
        heading: "Un arbre de guimauve te propose de dormir cinq minutes de plus.",
        line1: "Ses branches se plient comme un oreiller.",
        line2: "Le repos ressemble soudain à une excellente idée.",
      },
      choices: [
        {
          id: "dors-maintenant",
          text: "Tu t'allonges tout de suite.",
          sub: "Le corps demande d'abord un apaisement rapide.",
          score: { satisfaction: 1 },
        },
        {
          id: "reste-droit",
          text: "Tu refuses de t'asseoir, même une seconde.",
          sub: "Tu ne veux pas risquer une faille.",
          score: { controle: 1 },
        },
        {
          id: "repos-autorise",
          text: "Tu autorises un vrai temps de pause, cadré et limité.",
          sub: "La règle peut soutenir le repos.",
          score: { structure: 1 },
        },
        {
          id: "fatigue-nommee",
          text: "Tu reconnais que la fatigue te tire vers le sol.",
          sub: "L'émotion réclame d'être entendue avant l'effort.",
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
      image: "/scenes/candy-forest/notification_fireflies.png",
      rain: false,
      copy: {
        heading: "Des lucioles-notifications entourent ton visage.",
        line1: "Chaque éclat promet une réponse rapide.",
        line2: "Tu sais déjà quelle fenêtre tu ne devrais pas ouvrir.",
      },
      choices: [
        {
          id: "ouvre-maintenant",
          text: "Tu ouvres la fenêtre tout de suite.",
          sub: "La récompense instantanée gagne du terrain.",
          score: { satisfaction: 1 },
        },
        {
          id: "mode-avion",
          text: "Tu coupes tout sans discuter.",
          sub: "Tu veux tuer le bruit d'un seul geste.",
          score: { controle: 1 },
        },
        {
          id: "regle-de-temps",
          text: "Tu poses une règle de temps avant de répondre.",
          sub: "Le cadre rend l'attente habitable.",
          score: { structure: 1 },
        },
        {
          id: "vide-ou-angoisse",
          text: "Tu demandes ce que ce besoin de réponse essaie de calmer.",
          sub: "L'envie peut cacher un manque plus ancien.",
          score: { emotion: 1 },
        },
      ],
      nextStep: "carte",
    },
    {
      id: "carte",
      type: "question",
      layout: "choices",
      phaseDelays: [520, 1180],
      image: "/scenes/candy-forest/magic_map.png",
      rain: false,
      copy: {
        heading: "Une carte magique réorganise ton chemin.",
        line1: "Chaque détour devient visible. Chaque raccourci a un prix.",
        line2: "La forêt se calme quand les repères apparaissent.",
      },
      choices: [
        {
          id: "itineraire-facile",
          text: "Tu prends l'itinéraire qui promet le plus de soulagement.",
          sub: "Le résultat rapide reste le plus attirant.",
          score: { satisfaction: 1 },
        },
        {
          id: "jette-carte",
          text: "Tu rejettes la carte et tu avances à l'instinct.",
          sub: "Tu veux rester libre de toute contrainte.",
          score: { controle: 1 },
        },
        {
          id: "dessine-par-etapes",
          text: "Tu redessines le trajet en étapes courtes et claires.",
          sub: "La structure protège ton élan.",
          score: { structure: 1 },
        },
        {
          id: "pourquoi-besoin",
          text: "Tu te demandes pourquoi il te faut une carte pour avancer.",
          sub: "L'émotion prend forme dans la question.",
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
      image: "/scenes/candy-forest/sugar_door_waiting.png",
      rain: false,
      copy: {
        heading: "Une porte en sucre ne s'ouvre que si tu attends.",
        line1: "La surface craque doucement sous la patience.",
        line2: "L'attente te paraît presque plus sucrée que la porte elle-même.",
      },
      choices: [
        {
          id: "force-porte",
          text: "Tu pousses tout de suite, sans attendre.",
          sub: "Le gain immédiat reste la pente la plus forte.",
          score: { satisfaction: 1 },
        },
        {
          id: "recule-ferme",
          text: "Tu recules et tu refuses d'être tenté.",
          sub: "Tu veux garder la maîtrise jusqu'au bout.",
          score: { controle: 1 },
        },
        {
          id: "attends-chrono",
          text: "Tu l'ouvres seulement après avoir compté trente secondes.",
          sub: "Le délai devient un outil.",
          score: { structure: 1 },
        },
        {
          id: "qu-est-ce-que-ca-calme",
          text: "Tu restes là à écouter ce que l'attente réveille en toi.",
          sub: "Ce n'est pas seulement la porte qui parle.",
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
        "Ce résultat n'est pas un diagnostic. Il sert uniquement à mettre des mots sur une manière possible de gérer l'envie, la fatigue et la récompense immédiate.",
      restartLabel: "Recommencer la forêt",
    },
  ],
  scores: {
    "bonbon-lumineux": {
      "mange-tout-de-suite": { satisfaction: 1 },
      "interdiction-totale": { controle: 1 },
      "petite-boite": { structure: 1 },
      "pourquoi-maintenant": { emotion: 1 },
    },
    renard: {
      "suis-raccourci": { satisfaction: 1 },
      "refuse-sechement": { controle: 1 },
      "compare-carte": { structure: 1 },
      "pourquoi-peur": { emotion: 1 },
    },
    pluie: {
      "attrape-un": { satisfaction: 1 },
      "dos-tournee": { controle: 1 },
      "pause-programmee": { structure: 1 },
      "calme-cache": { emotion: 1 },
    },
    miroir: {
      distrait: { satisfaction: 1 },
      "brise-reflet": { controle: 1 },
      "note-ce-qu-elle-montre": { structure: 1 },
      "ce-qu-elle-calme": { emotion: 1 },
    },
    guimauve: {
      "dors-maintenant": { satisfaction: 1 },
      "reste-droit": { controle: 1 },
      "repos-autorise": { structure: 1 },
      "fatigue-nommee": { emotion: 1 },
    },
    lucioles: {
      "ouvre-maintenant": { satisfaction: 1 },
      "mode-avion": { controle: 1 },
      "regle-de-temps": { structure: 1 },
      "vide-ou-angoisse": { emotion: 1 },
    },
    carte: {
      "itineraire-facile": { satisfaction: 1 },
      "jette-carte": { controle: 1 },
      "dessine-par-etapes": { structure: 1 },
      "pourquoi-besoin": { emotion: 1 },
    },
    porte: {
      "force-porte": { satisfaction: 1 },
      "recule-ferme": { controle: 1 },
      "attends-chrono": { structure: 1 },
      "qu-est-ce-que-ca-calme": { emotion: 1 },
    },
  },
  results: {
    satisfaction: {
      image: "/scenes/candy-forest/ending_satisfaction.png",
      ending:
        "Tu finis par suivre les bonbons lumineux jusqu'à une clairière pleine de couleurs.",
      story: [
        "Tout y est doux, rapide, brillant.",
        "Mais au centre de la clairière, tu remarques que le vrai chemin n'a pas disparu : il attend simplement que tu reviennes.",
      ],
      title: "Satisfaction immédiate",
      subtitle: "Tu sembles sensible aux récompenses rapides.",
      description:
        "Quand quelque chose promet un soulagement court et net, ton attention quitte parfois l'objectif initial avant même que tu aies le temps d'évaluer la suite.",
      reflection:
        "Tu ne manques pas forcément de volonté. Ton environnement peut simplement proposer trop de petites récompenses faciles, trop tôt.",
      suggestions: [
        "Rends la distraction moins accessible pendant 25 minutes.",
        "Réduis le premier pas de ton objectif à une action presque ridicule de simplicité.",
        "Commence avant de te demander si tu en as vraiment envie.",
      ],
      shareText: "Un pas minuscule vaut mieux qu'un plan parfait jamais commencé.",
    },
    controle: {
      image: "/scenes/candy-forest/ending_control.png",
      ending: "Tu traverses la forêt sans toucher un seul bonbon.",
      story: [
        "À la sortie, tes poches sont vides, mais tes mains tremblent.",
        "Tu comprends que résister à tout peut parfois devenir une autre forme de fatigue.",
      ],
      title: "Contrôle excessif",
      subtitle: "Tu peux parfois tenir très fort... puis t'épuiser à tenir.",
      description:
        "Le problème n'est pas l'absence de discipline. C'est la pression continue qui finit par rendre chaque envie plus lourde qu'elle ne l'est vraiment.",
      reflection:
        "Relâcher un peu n'est pas échouer. C'est parfois la seule manière de garder un système vivant.",
      suggestions: [
        "Remplace une règle absolue par une règle souple et lisible.",
        "Prévois volontairement une petite pause autorisée aujourd'hui.",
        "Note l'heure, la durée et la limite avant de te laisser une permission.",
      ],
      shareText: "La maîtrise qui dure a besoin d'un peu d'air.",
    },
    structure: {
      image: "/scenes/candy-forest/ending_structure.png",
      ending: "Tu ouvres la carte magique et les chemins cessent de bouger.",
      story: [
        "Les bonbons brillent encore, le renard parle encore, mais quelque chose a changé.",
        "Tu n'as plus besoin de négocier avec chaque tentation : le cadre parle à ta place.",
      ],
      title: "Exécution par structure",
      subtitle: "Tu fonctionnes mieux quand l'environnement t'aide à choisir.",
      description:
        "Tu sembles gagner en stabilité quand les règles, les repères visuels et les petits systèmes t'évitent de tout porter seul.",
      reflection:
        "Ton self-control dépend peut-être moins d'un immense effort intérieur que d'une bonne architecture autour de toi.",
      suggestions: [
        "Prépare la décision avant le moment difficile.",
        "Écris l'heure, le lieu, la durée et la première action avant de commencer.",
        "Réduis les options au moment où la tentation arrive.",
      ],
      shareText: "Quand le chemin est déjà dessiné, l'énergie reste disponible pour avancer.",
    },
    emotion: {
      image: "/scenes/candy-forest/ending_emotion.png",
      ending: "Tu t'assois au bord du sentier.",
      story: [
        "La forêt devient moins bruyante quand tu cesses de courir.",
        "Le bonbon dans ta main ne disparaît pas, mais tu comprends enfin ce qu'il essayait de calmer.",
      ],
      title: "Émotion dominante",
      subtitle: "L'impulsion semble monter quand l'intérieur demande de l'aide.",
      description:
        "L'envie peut devenir plus forte quand tu es stressé, triste, seul, vide ou fatigué. Dans ces moments-là, le geste essaie souvent de protéger quelque chose d'autre.",
      reflection:
        "Ce n'est pas seulement une histoire de discipline. Parfois, le comportement vient protéger une émotion qui n'a pas encore été entendue.",
      suggestions: [
        "Avant d'agir, nomme ce qui se passe en toi.",
        "Écris : « Je ressens... », « J'ai besoin de... », « Le plus petit geste possible est... »",
        "Laisse l'émotion perdre un peu de pouvoir avant d'exiger de toi une solution.",
      ],
      shareText: "Nommer l'émotion n'efface pas l'envie, mais change déjà la scène.",
    },
  },
};
