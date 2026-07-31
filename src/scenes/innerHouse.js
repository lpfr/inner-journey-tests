export const innerHouseScene = {
  id: "inner-house",
  title: "Les quatre voix dans la maison",
  description: "Une visite douce pour écouter ce qui parle le plus fort en toi.",
  subtitle: "Quelle part de toi parle le plus fort ?",
  theme: "voix intérieures",
  targetAudience:
    "Pour les moments où plusieurs élans, peurs ou besoins se répondent en même temps.",
  psychologyFrame:
    "Repérer une voix intérieure dominante sans la juger, pour mieux comprendre ce qu'elle cherche à protéger.",
  status: "Disponible",
  coverImage: "/scenes/inner-house/inner_house_home.png",
  cover: "/scenes/inner-house/inner_house_home.png",
  background: "/scenes/inner-house/inner_house_home.png",
  introImage: "/scenes/inner-house/inner_house_intro.png",
  resultTypes: ["securite", "elan", "douceur", "repos"],
  tieBreakOrder: ["securite", "elan", "douceur", "repos"],
  choices: [],
  disclaimer:
    "Ce résultat n'est pas un diagnostic. C'est seulement une piste pour mieux écouter la part de toi qui demande de l'attention en ce moment.",
  audio: {
    ambience: "/scenes/two-person-room/audio/room_ambience.mp3",
    choice: "/scenes/two-person-room/audio/choice_soft.mp3",
    step: "/scenes/two-person-room/audio/lamp_soft.mp3",
    ending: "/scenes/two-person-room/audio/ending_room.mp3",
  },
  opening: {
    eyebrow: "Voix intérieures",
    title: "Les quatre voix dans la maison",
    subtitle: "Une visite calme pour entendre ce qui parle le plus fort en toi.",
    enterLabel: "Entrer dans la maison",
    silentLabel: "Entrer sans le son",
  },
  intro: {
    time: "21 h 06 · Maison intérieure",
    title: "Les quatre voix dans la maison",
    line1:
      "La maison est calme, mais chaque pièce garde une voix différente. Aucune n'est là pour te piéger.",
    line2:
      "Tu n'es pas ici pour choisir la bonne voix. Seulement pour entendre celle qui demande le plus d'attention.",
    enter: "Entrer dans la maison",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "couloir",
      type: "question",
      layout: "choices",
      phaseDelays: [650, 1350],
      image: "/scenes/inner-house/inner_house_home.png",
      copy: {
        heading: "Le couloir",
        line1: "Quelle porte t'attire d'abord ?",
        line2:
          "Quatre portes sont entrouvertes. Derrière chacune, une voix attend sans hausser le ton.",
      },
      choices: [
        { id: "porte-fermee", text: "Celle qui veut vérifier si tout est sûr.", score: { securite: 1 } },
        { id: "porte-lumineuse", text: "Celle qui laisse passer une lumière vive.", score: { elan: 1 } },
        { id: "porte-rangee", text: "Celle où tout semble devoir être parfait.", score: { douceur: 1 } },
        { id: "porte-silencieuse", text: "Celle où l'on peut enfin s'asseoir.", score: { repos: 1 } },
      ],
      nextStep: "table",
    },
    {
      id: "table",
      type: "question",
      layout: "choices",
      phaseDelays: [650, 1350],
      image: "/scenes/inner-house/table_round.png",
      copy: {
        heading: "La table ronde",
        line1: "Qui prend la parole en premier ?",
        line2:
          "Au centre de la pièce, quatre chaises entourent une lampe. Une conversation commence doucement.",
      },
      choices: [
        { id: "anticiper", text: "La voix qui anticipe ce qui pourrait arriver.", score: { securite: 1 } },
        { id: "essayer", text: "La voix qui voudrait essayer autre chose.", score: { elan: 1 } },
        { id: "corriger", text: "La voix qui repère ce qui n'est pas assez bien.", score: { douceur: 1 } },
        { id: "fatigue", text: "La voix qui dit qu'elle n'en peut plus.", score: { repos: 1 } },
      ],
      nextStep: "fenetre",
    },
    {
      id: "fenetre",
      type: "question",
      layout: "choices",
      phaseDelays: [650, 1350],
      image: "/scenes/inner-house/open_window.png",
      copy: {
        heading: "La fenêtre ouverte",
        line1: "Que ressens-tu face au dehors ?",
        line2:
          "La fenêtre donne sur une rue douce et sombre. L'air frais entre sans demander de réponse immédiate.",
      },
      choices: [
        { id: "recul", text: "Tu veux d'abord garder un peu de recul.", score: { securite: 1 } },
        { id: "sortir", text: "Tu sens une envie de sortir respirer.", score: { elan: 1 } },
        { id: "pas-prete", text: "Tu te demandes si tu es vraiment prêt.", score: { douceur: 1 } },
        { id: "fermer-rideau", text: "Tu préfères fermer le rideau un moment.", score: { repos: 1 } },
      ],
      nextStep: "miroir",
    },
    {
      id: "miroir",
      type: "question",
      layout: "choices",
      phaseDelays: [650, 1350],
      image: "/scenes/inner-house/salon_mirror.png",
      copy: {
        heading: "Le miroir du salon",
        line1: "Que remarques-tu dans ton reflet ?",
        line2:
          "Le miroir ne donne pas une réponse unique. Il montre plusieurs expressions sur le même visage.",
      },
      choices: [
        { id: "vigilance", text: "Une vigilance qui essaie de te protéger.", score: { securite: 1 } },
        { id: "vivant", text: "Quelque chose de vivant qui revient.", score: { elan: 1 } },
        { id: "durete", text: "Une dureté qui aimerait se relâcher.", score: { douceur: 1 } },
        { id: "lenteur", text: "Une lenteur qui demande moins de bruit.", score: { repos: 1 } },
      ],
      nextStep: "lampe",
    },
    {
      id: "lampe",
      type: "question",
      layout: "choices",
      phaseDelays: [650, 1350],
      image: "/scenes/inner-house/table_round.png",
      copy: {
        heading: "La lampe du soir",
        line1: "Quelle voix veux-tu écouter avec douceur ?",
        line2:
          "La lampe éclaire juste assez la pièce. Les voix deviennent plus calmes quand elles se savent entendues.",
      },
      choices: [
        { id: "besoin-cadre", text: "Celle qui demande un cadre plus sûr.", score: { securite: 1 } },
        { id: "besoin-elan", text: "Celle qui cherche un peu plus d'élan.", score: { elan: 1 } },
        { id: "besoin-indulgence", text: "Celle qui a besoin d'indulgence.", score: { douceur: 1 } },
        { id: "besoin-repos", text: "Celle qui réclame du repos.", score: { repos: 1 } },
      ],
      nextStep: "result",
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [900, 2100],
      note:
        "Ce résultat n'est pas un diagnostic. C'est seulement une piste pour mieux écouter la part de toi qui demande de l'attention en ce moment.",
      restartLabel: "Recommencer la visite",
    },
  ],
  scores: {
    couloir: {
      "porte-fermee": { securite: 1 },
      "porte-lumineuse": { elan: 1 },
      "porte-rangee": { douceur: 1 },
      "porte-silencieuse": { repos: 1 },
    },
    table: {
      anticiper: { securite: 1 },
      essayer: { elan: 1 },
      corriger: { douceur: 1 },
      fatigue: { repos: 1 },
    },
    fenetre: {
      recul: { securite: 1 },
      sortir: { elan: 1 },
      "pas-prete": { douceur: 1 },
      "fermer-rideau": { repos: 1 },
    },
    miroir: {
      vigilance: { securite: 1 },
      vivant: { elan: 1 },
      durete: { douceur: 1 },
      lenteur: { repos: 1 },
    },
    lampe: {
      "besoin-cadre": { securite: 1 },
      "besoin-elan": { elan: 1 },
      "besoin-indulgence": { douceur: 1 },
      "besoin-repos": { repos: 1 },
    },
  },
  results: {
    securite: {
      image: "/scenes/inner-house/inner_house_home.png",
      title: "Besoin de sécurité",
      ending: "Dans la maison, une porte reste entrouverte.",
      story: [
        "La voix qui veille n'essaie pas de t'arrêter.",
        "Elle veut seulement savoir que tu ne vas pas te perdre.",
      ],
      subtitle:
        "Une part de toi cherche peut-être un cadre plus clair avant de se détendre.",
      desc:
        "Quand tout semble trop incertain, cette voix peut devenir plus forte pour éviter que tu avances trop vite.",
      reflection:
        "Ce n'est pas de la peur inutile. C'est peut-être un besoin de repères simples, de limites lisibles et d'un peu plus de sécurité intérieure.",
      suggestions: [
        "Choisis une petite limite qui te protège aujourd'hui.",
        "Clarifie une chose : ce que tu peux faire maintenant, et ce qui peut attendre.",
        "Demande-toi : « Qu'est-ce qui m'aiderait à me sentir assez en sécurité pour avancer doucement ? »",
      ],
      shareText: "Une porte sûre peut rendre le mouvement plus possible.",
    },
    elan: {
      image: "/scenes/inner-house/open_window.png",
      title: "Besoin d'élan",
      ending: "Une fenêtre laisse entrer l'air du soir.",
      story: [
        "La voix qui appelle dehors ne demande pas de tout quitter.",
        "Elle rappelle seulement qu'une part de toi veut encore sentir du vivant.",
      ],
      subtitle:
        "Tu as peut-être besoin de retrouver un peu de désir, de curiosité ou de mouvement.",
      desc:
        "Cette voix peut apparaître quand tu t'adaptes beaucoup, quand tu attends longtemps, ou quand tes choix deviennent trop petits.",
      reflection:
        "Ce n'est pas un caprice. C'est peut-être une énergie discrète qui cherche une place plus juste dans ta journée.",
      suggestions: [
        "Fais une petite chose qui remet du mouvement : marcher, écrire, appeler, créer, essayer.",
        "Garde-la simple, sans la transformer en grand projet.",
        "Demande-toi : « Qu'est-ce qui me redonne un peu d'élan sans me brusquer ? »",
      ],
      shareText: "Un petit élan peut suffire à rouvrir une fenêtre.",
    },
    douceur: {
      image: "/scenes/inner-house/salon_mirror.png",
      title: "Besoin de douceur",
      ending: "Près du miroir, une voix baisse enfin le ton.",
      story: [
        "Elle a longtemps cru qu'il fallait corriger pour protéger.",
        "Mais ce soir, elle peut apprendre une manière plus douce de parler.",
      ],
      subtitle:
        "Une part de toi est peut-être très attentive à ce qui pourrait être mieux.",
      desc:
        "Cette exigence peut t'avoir aidé à tenir, à progresser ou à éviter certaines erreurs. Mais elle peut aussi devenir lourde si elle ne laisse jamais de repos.",
      reflection:
        "Ce n'est pas une faiblesse de vouloir moins de dureté. Tu as peut-être besoin d'une voix intérieure qui guide sans blesser.",
      suggestions: [
        "Remplace une phrase dure par une phrase plus précise et plus juste.",
        "Essaie : « Ce n'est pas parfait, mais je peux avancer avec ça. »",
        "Demande-toi : « Comment pourrais-je me parler sans me diminuer ? »",
      ],
      shareText: "La clarté peut exister sans dureté.",
    },
    repos: {
      image: "/scenes/inner-house/table_round.png",
      title: "Besoin de repos",
      ending: "Dans la pièce la plus calme, la lumière reste basse.",
      story: [
        "La voix fatiguée ne veut pas disparaître.",
        "Elle veut seulement que tu reconnaisses ce qu'elle porte depuis trop longtemps.",
      ],
      subtitle:
        "Tu as peut-être besoin de moins de bruit, moins d'effort ou moins de pression immédiate.",
      desc:
        "Quand cette voix devient forte, elle ne dit pas forcément que tout est impossible. Elle peut simplement signaler que ton énergie demande une vraie attention.",
      reflection:
        "Ce n'est pas de la paresse. C'est peut-être une part de toi qui cherche un rythme plus humain.",
      suggestions: [
        "Enlève une chose non essentielle de ta journée.",
        "Prévois un vrai moment sans décision, même court.",
        "Demande-toi : « Qu'est-ce que je continue à porter alors que je suis déjà fatigué ? »",
      ],
      shareText: "Se reposer peut être une manière de revenir à soi.",
    },
  },
};
