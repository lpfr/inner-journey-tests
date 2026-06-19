export const roomForTwoScene = {
  id: "room-for-two",
  title: "La chambre à deux",
  description: "Une expérience douce sur la place que tu cherches dans le lien.",
  subtitle: "Que cherches-tu dans la relation ?",
  theme: "lien",
  targetAudience:
    "Pour les moments où tu veux mieux comprendre ce dont tu as besoin avec quelqu’un qui compte.",
  psychologyFrame: "Sécurité, espace, réciprocité et authenticité dans les liens proches.",
  status: "Disponible",
  coverImage: "/scenes/two-person-room/two_person_room_home.png",
  cover: "/scenes/two-person-room/two_person_room_home.png",
  background: "/scenes/two-person-room/two_person_room_home.png",
  introImage: "/scenes/two-person-room/room_intro.png",
  resultTypes: ["securite", "espace", "reciprocite", "authenticite"],
  tieBreakOrder: ["securite", "espace", "reciprocite", "authenticite"],
  choices: [],
  disclaimer:
    "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux écouter ce que tu cherches dans le lien.",
  audio: {
    ambience: "/scenes/two-person-room/audio/room_ambience.mp3",
    choice: "/scenes/two-person-room/audio/choice_soft.mp3",
    step: "/scenes/two-person-room/audio/lamp_soft.mp3",
    ending: "/scenes/two-person-room/audio/ending_room.mp3",
  },
  opening: {
    eyebrow: "Lien à l’autre",
    title: "La chambre à deux",
    subtitle: "Une expérience douce sur la place que tu cherches dans le lien.",
    enterLabel: "Entrer dans la chambre",
    silentLabel: "Entrer sans le son",
  },
  intro: {
    time: "20 h 32 · Chambre silencieuse",
    title: "La chambre à deux",
    line1:
      "La porte s’ouvre sur une chambre calme. Deux chaises se font face, comme si une conversation avait été interrompue.",
    line2:
      "Tu n’es pas ici pour juger une relation. Seulement pour sentir ce que ton cœur cherche quand quelqu’un compte pour toi.",
    enter: "Entrer dans la chambre",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "deuxieme-chaise",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/two-person-room/second_chair.png",
      copy: {
        heading: "La deuxième chaise",
        line1: "Où t’assois-tu ?",
        line2:
          "Deux chaises attendent dans la lumière basse. L’une est proche de la lampe, l’autre près de la fenêtre.",
      },
      choices: [
        { id: "lampe-allumee", text: "Près de la lampe allumée.", score: { securite: 1 } },
        { id: "fenetre-entrouverte", text: "Près de la fenêtre entrouverte.", score: { espace: 1 } },
        { id: "face-chaise", text: "Face à l’autre chaise.", score: { reciprocite: 1 } },
        { id: "rester-soi", text: "Là où tu peux rester toi-même.", score: { authenticite: 1 } },
      ],
      nextStep: "fil-mains",
    },
    {
      id: "fil-mains",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/two-person-room/thread_between_cups.png",
      copy: {
        heading: "Le fil entre les mains",
        line1: "Que fais-tu du fil ?",
        line2:
          "Un fil fin relie les deux tasses posées sur la table. Il semble fragile, mais il ne casse pas.",
      },
      choices: [
        { id: "verifier-fil", text: "Tu vérifies qu’il tient.", score: { securite: 1 } },
        { id: "laisser-jeu", text: "Tu lui laisses du jeu.", score: { espace: 1 } },
        { id: "tendre-doucement", text: "Tu le tends doucement vers l’autre côté.", score: { reciprocite: 1 } },
        { id: "ressentir-fil", text: "Tu regardes ce qu’il te fait ressentir.", score: { authenticite: 1 } },
      ],
      nextStep: "tasse-refroidie",
    },
    {
      id: "tasse-refroidie",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/two-person-room/cooling_cup.png",
      copy: {
        heading: "La tasse refroidie",
        line1: "Que fais-tu quand l’autre tarde à répondre ?",
        line2:
          "Une tasse de thé reste posée devant la chaise vide. La vapeur disparaît lentement.",
      },
      choices: [
        { id: "signe-clair", text: "Tu attends un signe clair.", score: { securite: 1 } },
        { id: "eloigner-moment", text: "Tu t’éloignes un moment.", score: { espace: 1 } },
        { id: "tenir-seul", text: "Tu te demandes si tu tiens le lien seul.", score: { reciprocite: 1 } },
        { id: "ecrire-vrai", text: "Tu écris ce que tu n’oses pas dire.", score: { authenticite: 1 } },
      ],
      nextStep: "fenetre-ouverte",
    },
    {
      id: "fenetre-ouverte",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/two-person-room/open_window.png",
      copy: {
        heading: "La fenêtre ouverte",
        line1: "Que laisses-tu entrer ?",
        line2:
          "La fenêtre s’ouvre sur une nuit douce. L’air frais traverse la pièce sans rien renverser.",
      },
      choices: [
        { id: "rideau", text: "Tu fermes un peu le rideau.", score: { securite: 1 } },
        { id: "respirer", text: "Tu respires près de la fenêtre.", score: { espace: 1 } },
        { id: "autre-porte", text: "Tu ouvres aussi la porte de l’autre côté.", score: { reciprocite: 1 } },
        { id: "visage-detendu", text: "Tu laisses ton visage se détendre.", score: { authenticite: 1 } },
      ],
      nextStep: "lumiere-partagee",
    },
    {
      id: "lumiere-partagee",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/two-person-room/shared_light.png",
      copy: {
        heading: "La lumière partagée",
        line1: "Comment restes-tu dans la pièce ?",
        line2:
          "La lampe éclaire les deux chaises à la fois. La pièce semble attendre une manière plus juste d’être ensemble.",
      },
      choices: [
        { id: "lampe-vers-toi", text: "Tu rapproches la lampe de toi.", score: { securite: 1 } },
        { id: "distance-juste", text: "Tu gardes une distance confortable.", score: { espace: 1 } },
        { id: "lampe-milieu", text: "Tu places la lampe au milieu.", score: { reciprocite: 1 } },
        { id: "phrase-vraie", text: "Tu dis une phrase vraie, même simple.", score: { authenticite: 1 } },
      ],
      nextStep: "result",
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [900, 2100],
      note:
        "Ce résultat n’est pas un diagnostic. C’est seulement une piste pour mieux écouter ce que tu cherches dans le lien.",
      restartLabel: "Recommencer la visite",
    },
  ],
  scores: {
    "deuxieme-chaise": {
      "lampe-allumee": { securite: 1 },
      "fenetre-entrouverte": { espace: 1 },
      "face-chaise": { reciprocite: 1 },
      "rester-soi": { authenticite: 1 },
    },
    "fil-mains": {
      "verifier-fil": { securite: 1 },
      "laisser-jeu": { espace: 1 },
      "tendre-doucement": { reciprocite: 1 },
      "ressentir-fil": { authenticite: 1 },
    },
    "tasse-refroidie": {
      "signe-clair": { securite: 1 },
      "eloigner-moment": { espace: 1 },
      "tenir-seul": { reciprocite: 1 },
      "ecrire-vrai": { authenticite: 1 },
    },
    "fenetre-ouverte": {
      rideau: { securite: 1 },
      respirer: { espace: 1 },
      "autre-porte": { reciprocite: 1 },
      "visage-detendu": { authenticite: 1 },
    },
    "lumiere-partagee": {
      "lampe-vers-toi": { securite: 1 },
      "distance-juste": { espace: 1 },
      "lampe-milieu": { reciprocite: 1 },
      "phrase-vraie": { authenticite: 1 },
    },
  },
  results: {
    securite: {
      image: "/scenes/two-person-room/ending_securite.png",
      title: "Besoin de sécurité",
      ending: "La lampe reste allumée.",
      story: [
        "Sa lumière ne promet pas tout, mais elle ne disparaît pas.",
        "Dans la chambre, quelque chose devient plus calme.",
      ],
      subtitle: "Tu cherches peut-être un lien fiable.",
      desc:
        "Pas forcément un lien parfait. Plutôt une présence assez stable pour que ton cœur n’ait pas à tout deviner.",
      reflection:
        "Ce besoin n’est pas une faiblesse. Il peut simplement dire qu’une part de toi a besoin de repères clairs pour oser se poser.",
      suggestions: [
        "Observe les liens où tu te sens plus tranquille.",
        "Remarque ceux où les mots, les gestes et les silences restent cohérents.",
        "Demande-toi : « Qu’est-ce qui me fait sentir en sécurité dans une relation ? »",
      ],
      shareText:
        "Un lien sûr n’enferme pas. Il permet de respirer sans avoir peur de tomber.",
    },
    espace: {
      image: "/scenes/two-person-room/ending_espace.png",
      title: "Besoin d’espace",
      ending: "La fenêtre reste entrouverte.",
      story: [
        "L’air circule doucement dans la pièce.",
        "Tu comprends qu’être proche ne veut pas dire disparaître.",
      ],
      subtitle: "Tu as peut-être besoin d’un lien qui respecte ton rythme.",
      desc:
        "Un lien où tu peux aimer, répondre et être présent, sans perdre ton propre espace intérieur.",
      reflection:
        "Ce n’est pas un rejet de l’autre. C’est peut-être une manière de rester vivant dans la relation.",
      suggestions: [
        "Choisis un petit espace à préserver.",
        "Un moment seul, une réponse plus lente, une activité qui reste à toi.",
        "Demande-toi : « Où ai-je besoin de plus d’air pour rester vraiment présent ? »",
      ],
      shareText:
        "La bonne distance ne coupe pas le lien. Elle peut parfois le rendre plus juste.",
    },
    reciprocite: {
      image: "/scenes/two-person-room/ending_reciprocite.png",
      title: "Besoin de réciprocité",
      ending: "La lampe placée au milieu éclaire les deux chaises.",
      story: [
        "La pièce ne demande plus à une seule personne de porter toute la lumière.",
        "Le lien devient moins lourd.",
      ],
      subtitle:
        "Tu cherches peut-être une relation où l’effort circule dans les deux sens.",
      desc:
        "Être attentionné ne devrait pas signifier tout porter seul. Un lien vivant a besoin de gestes, d’écoute et de présence partagés.",
      reflection:
        "Ce besoin peut apparaître quand tu as beaucoup donné, ou quand tu attends en silence quelque chose qui ne revient pas.",
      suggestions: [
        "Regarde un lien important avec honnêteté.",
        "Qu’est-ce que tu donnes ? Qu’est-ce que tu reçois ?",
        "Demande-toi : « Est-ce que ce lien me nourrit aussi ? »",
      ],
      shareText:
        "La réciprocité ne se mesure pas parfaitement. Mais elle se sent quand le cœur se repose un peu.",
    },
    authenticite: {
      image: "/scenes/two-person-room/ending_authenticite.png",
      title: "Besoin d’être vrai",
      ending: "La pièce devient plus silencieuse.",
      story: [
        "Tu n’as plus besoin de tenir ton visage en place.",
        "Une phrase simple suffit à rendre l’air plus vivant.",
      ],
      subtitle: "Tu cherches peut-être un lien où tu peux exister sans jouer un rôle.",
      desc:
        "Un endroit où tu n’as pas besoin d’être plus léger, plus fort ou plus disponible que tu ne l’es vraiment.",
      reflection:
        "Ce besoin parle d’une envie d’être vu avec plus de justesse, avec moins de masque.",
      suggestions: [
        "Choisis une vérité petite, mais réelle.",
        "Une phrase simple, un besoin nommé calmement, une limite dite sans trop te justifier.",
        "Demande-toi : « Quelle part de moi reste cachée pour préserver le lien ? »",
      ],
      shareText:
        "Être vrai ne détruit pas toujours la relation. Parfois, cela montre où elle peut devenir plus vivante.",
    },
  },
};
