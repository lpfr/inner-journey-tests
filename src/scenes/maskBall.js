export const maskBallScene = {
  id: "mask-ball",
  title: "Le bal des masques",
  description: "Une expérience douce autour des rôles que l'on porte pour rester accepté.",
  subtitle: "Quel rôle te fatigue ?",
  theme: "rôles",
  targetAudience:
    "Pour les moments où tu sens qu'un rôle commence à prendre trop de place.",
  psychologyFrame:
    "Explorer ce que tu montres, ce que tu caches, et ce qui demande une manière plus douce de revenir vers toi.",
  status: "Disponible",
  coverImage: "/scenes/masked-ball/masked_ball_home.jpg",
  cover: "/scenes/masked-ball/masked_ball_home.jpg",
  background: "/scenes/masked-ball/masked_ball_home.jpg",
  introImage: "/scenes/masked-ball/ballroom_intro.jpg",
  resultTypes: ["performance", "sauveur", "effacement", "conformite"],
  tieBreakOrder: ["performance", "sauveur", "effacement", "conformite"],
  choices: [],
  disclaimer:
    "Ce résultat n'est pas un diagnostic. C'est seulement une piste pour mieux écouter le rôle qui te fatigue en ce moment.",
  audio: {
    ambience: "/scenes/masked-ball/audio/ballroom_ambience.mp3",
    choice: "/scenes/masked-ball/audio/choice_soft.mp3",
    step: "/scenes/masked-ball/audio/mask_chime.mp3",
    ending: "/scenes/masked-ball/audio/ending_ballroom.mp3",
    endingByResult: {
      performance: "/scenes/masked-ball/audio/ending_performance.mp3",
      sauveur: "/scenes/masked-ball/audio/ending_sauveur.mp3",
      effacement: "/scenes/masked-ball/audio/ending_effacement.mp3",
      conformite: "/scenes/masked-ball/audio/ending_conformite.mp3",
    },
  },
  opening: {
    eyebrow: "Rôles et masques",
    title: "Le bal des masques",
    subtitle: "Une traversée douce autour des rôles que l'on porte pour rester accepté.",
    enterLabel: "Entrer dans le bal",
    silentLabel: "Entrer sans le son",
  },
  intro: {
    time: "22 h 18 · Salle des miroirs",
    title: "Le bal des masques",
    line1:
      "La musique glisse sous les lustres. Autour de toi, chacun porte un masque qui brille juste assez pour ne pas trembler.",
    line2:
      "Tu n'es pas ici pour arracher le tien. Seulement pour sentir quel rôle commence à te fatiguer.",
    enter: "Entrer dans le bal",
    silentEnter: "Entrer sans le son",
  },
  steps: [
    {
      id: "masque-choisi",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/masked-ball/chosen_mask.jpg",
      copy: {
        heading: "Le masque choisi",
        line1: "Quel masque prends-tu ?",
        line2:
          "Sur une table de velours, quatre masques attendent. Chacun semble connaître une manière de traverser la soirée.",
      },
      choices: [
        { id: "sourire-lumineux", text: "Le masque au sourire lumineux.", score: { performance: 1 } },
        { id: "dore-rassure", text: "Le masque doré qui rassure.", score: { sauveur: 1 } },
        { id: "pale-transparent", text: "Le masque pâle, presque transparent.", score: { effacement: 1 } },
        { id: "assorti-aux-autres", text: "Le masque parfaitement assorti aux autres.", score: { conformite: 1 } },
      ],
      nextStep: "premiere-danse",
    },
    {
      id: "premiere-danse",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/masked-ball/first_dance.jpg",
      copy: {
        heading: "La première danse",
        line1: "Comment entres-tu dans la danse ?",
        line2:
          "Les invités tournent lentement sous les lustres. La musique laisse peu de place à l'hésitation.",
      },
      choices: [
        { id: "danser-sans-effort", text: "Tu souris et tu danses sans montrer l'effort.", score: { performance: 1 } },
        { id: "guider-perdu", text: "Tu guides quelqu'un qui semble perdu.", score: { sauveur: 1 } },
        { id: "bord-salle", text: "Tu restes près du bord de la salle.", score: { effacement: 1 } },
        { id: "suivre-les-pas", text: "Tu suis les pas que tout le monde connaît.", score: { conformite: 1 } },
      ],
      nextStep: "couloir-miroirs",
    },
    {
      id: "couloir-miroirs",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/masked-ball/mirror_corridor.jpg",
      copy: {
        heading: "Le couloir des miroirs",
        line1: "Que regardes-tu dans le miroir ?",
        line2:
          "Un couloir de miroirs s'ouvre derrière la salle. Ton reflet change selon la lumière.",
      },
      choices: [
        { id: "ajuster-sourire", text: "Tu ajustes ton sourire.", score: { performance: 1 } },
        { id: "verifier-autres", text: "Tu vérifies si les autres vont bien.", score: { sauveur: 1 } },
        { id: "baisser-yeux", text: "Tu baisses un peu les yeux.", score: { effacement: 1 } },
        { id: "fondre-decor", text: "Tu corriges un détail pour mieux te fondre dans le décor.", score: { conformite: 1 } },
      ],
      nextStep: "musique-arrete",
    },
    {
      id: "musique-arrete",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/masked-ball/music_stops.jpg",
      copy: {
        heading: "Quand la musique s'arrête",
        line1: "Que fais-tu dans le silence ?",
        line2:
          "La musique s'interrompt soudain. Pendant quelques secondes, plus personne ne sait quoi faire.",
      },
      choices: [
        { id: "phrase-legere", text: "Tu remplis le silence d'une phrase légère.", score: { performance: 1 } },
        { id: "rassurer-proche", text: "Tu rassures la personne la plus proche.", score: { sauveur: 1 } },
        { id: "attendre-invisible", text: "Tu attends que personne ne te remarque.", score: { effacement: 1 } },
        { id: "regarder-autres", text: "Tu regardes les autres avant de bouger.", score: { conformite: 1 } },
      ],
      nextStep: "balcon",
    },
    {
      id: "balcon",
      type: "question",
      layout: "choices",
      phaseDelays: [700, 1500],
      image: "/scenes/masked-ball/balcony_night.jpg",
      copy: {
        heading: "Le balcon",
        line1: "Que fais-tu loin de la salle ?",
        line2:
          "Une porte donne sur un balcon calme. L'air de la nuit touche doucement le bord de ton masque.",
      },
      choices: [
        { id: "tomber-sourire", text: "Tu laisses tomber ton sourire un instant.", score: { performance: 1 } },
        { id: "poser-poids", text: "Tu poses enfin ce que tu portais pour les autres.", score: { sauveur: 1 } },
        { id: "relever-visage", text: "Tu relèves un peu le visage.", score: { effacement: 1 } },
        { id: "choisir-sans-regard", text: "Tu demandes ce que tu choisirais sans le regard des autres.", score: { conformite: 1 } },
      ],
      nextStep: "result",
    },
    {
      id: "result",
      type: "result",
      phaseDelays: [900, 2100],
      note:
        "Ce résultat n'est pas un diagnostic. C'est seulement une piste pour mieux écouter le rôle qui te fatigue en ce moment.",
      restartLabel: "Recommencer le bal",
    },
  ],
  scores: {
    "masque-choisi": {
      "sourire-lumineux": { performance: 1 },
      "dore-rassure": { sauveur: 1 },
      "pale-transparent": { effacement: 1 },
      "assorti-aux-autres": { conformite: 1 },
    },
    "premiere-danse": {
      "danser-sans-effort": { performance: 1 },
      "guider-perdu": { sauveur: 1 },
      "bord-salle": { effacement: 1 },
      "suivre-les-pas": { conformite: 1 },
    },
    "couloir-miroirs": {
      "ajuster-sourire": { performance: 1 },
      "verifier-autres": { sauveur: 1 },
      "baisser-yeux": { effacement: 1 },
      "fondre-decor": { conformite: 1 },
    },
    "musique-arrete": {
      "phrase-legere": { performance: 1 },
      "rassurer-proche": { sauveur: 1 },
      "attendre-invisible": { effacement: 1 },
      "regarder-autres": { conformite: 1 },
    },
    balcon: {
      "tomber-sourire": { performance: 1 },
      "poser-poids": { sauveur: 1 },
      "relever-visage": { effacement: 1 },
      "choisir-sans-regard": { conformite: 1 },
    },
  },
  results: {
    performance: {
      image: "/scenes/masked-ball/ending_performance.jpg",
      title: "Besoin d'arrêter de performer",
      ending: "Le sourire du masque brille encore.",
      story: [
        "Mais dans le calme du balcon, tu sens enfin l'effort qu'il demandait.",
        "La nuit ne te demande plus d'être impeccable.",
      ],
      subtitle:
        "Tu as peut-être pris l'habitude de montrer une version de toi qui tient, qui rassure, qui réussit ou qui reste légère.",
      desc:
        "Ce rôle a pu t'aider à avancer. Mais il peut devenir épuisant s'il ne te laisse jamais déposer la pression.",
      reflection:
        "Tu n'as pas besoin d'être moins capable. Tu as peut-être besoin d'un endroit où tu n'as plus à prouver que tout va bien.",
      suggestions: [
        "Choisis une personne ou un moment où tu peux enlever un peu de performance.",
        "Pas tout. Juste une phrase plus vraie, moins brillante.",
        "Demande-toi : « Où est-ce que je fais semblant d'aller bien pour ne pas déranger ? »",
      ],
      shareText:
        "Tu n'as pas besoin d'être impressionnant pour mériter une présence douce.",
    },
    sauveur: {
      image: "/scenes/masked-ball/ending_sauveur.jpg",
      title: "Besoin de ne plus tout porter",
      ending: "Dans la salle, tu entends encore les voix que tu voulais rassurer.",
      story: [
        "Mais sur le balcon, tes mains se vident doucement.",
        "Tout ne dépend pas de toi.",
      ],
      subtitle:
        "Tu as peut-être appris à être celui ou celle qui aide, apaise, comprend et tient les choses ensemble.",
      desc:
        "Ce rôle peut venir d'une grande sensibilité aux autres. Mais il peut aussi te faire oublier que tu as, toi aussi, besoin d'être soutenu.",
      reflection:
        "Aimer ne veut pas dire porter tout le poids. Être présent ne veut pas dire devenir responsable de l'équilibre de chacun.",
      suggestions: [
        "Cette semaine, remarque une situation où tu veux intervenir tout de suite.",
        "Attends un instant. Demande-toi si l'autre te demande vraiment de porter cela.",
        "Demande-toi : « Qu'est-ce que je porte alors que cela ne m'appartient pas entièrement ? »",
      ],
      shareText:
        "Le lien devient plus juste quand tes épaules ne sont pas le seul endroit où tout repose.",
    },
    effacement: {
      image: "/scenes/masked-ball/ending_effacement.jpg",
      title: "Besoin d'être vu sans te forcer",
      ending: "Ton masque presque transparent se confondait avec la lumière.",
      story: [
        "Mais dans le silence, ton visage existe encore.",
        "Il n'a pas besoin de faire du bruit pour avoir une place.",
      ],
      subtitle:
        "Tu as peut-être tendance à te faire discret, à prendre peu de place, à ne pas demander trop.",
      desc:
        "Ce rôle peut protéger de l'exposition ou du rejet. Mais il peut aussi te laisser seul avec ce que tu n'oses pas montrer.",
      reflection:
        "Tu n'as pas besoin de devenir quelqu'un de plus fort ou de plus visible d'un coup. Tu as peut-être seulement besoin d'un regard sûr, capable de t'accueillir sans te pousser.",
      suggestions: [
        "Choisis une petite manière d'exister davantage.",
        "Dire une préférence. Prendre un peu plus de temps. Ne pas t'excuser d'être là.",
        "Demande-toi : « Où est-ce que je disparais pour que tout reste simple ? »",
      ],
      shareText: "Être vu doucement peut être une forme de repos.",
    },
    conformite: {
      image: "/scenes/masked-ball/ending_conformite.jpg",
      title: "Besoin de choisir ce qui te ressemble",
      ending: "Dans le miroir, ton masque était parfaitement à sa place.",
      story: [
        "Peut-être trop.",
        "La nuit te laisse sentir ce qui, en toi, ne veut plus seulement correspondre.",
      ],
      subtitle: "Tu as peut-être appris à lire les attentes et à t'y adapter.",
      desc:
        "Faire ce qu'il faut, dire ce qui convient, ne pas déranger l'ordre autour de toi. Ce rôle peut donner une forme de sécurité, mais il peut aussi t'éloigner doucement de ton propre choix.",
      reflection:
        "Tu n'as pas besoin de tout refuser. Tu as peut-être besoin de retrouver ce qui vient vraiment de toi.",
      suggestions: [
        "Choisis une petite décision qui te ressemble.",
        "Une couleur, un rythme, une réponse, une préférence dite simplement.",
        "Demande-toi : « Qu'est-ce que je choisirais si je ne cherchais pas d'abord à être correct ? »",
      ],
      shareText:
        "Te ressembler davantage n'est pas forcément t'opposer aux autres. C'est revenir un peu vers toi.",
    },
  },
};
