export const STORAGE_KEY = "rain-night-station-language";

export const LANGS = ["fr"];

export const TRAIN_KEYS = ["rest", "release", "connection", "direction"];

export const RESULT_KEYS = ["rest", "release", "connection", "direction"];

export const translations = {
  fr: {
    langName: "Français",
    switcher: {
      fr: "FR",
    },
    audio: {
      on: "Son activé",
      off: "Son coupé",
    },
    common: {
      loading: "Préparation du récit…",
      restart: "Recommencer",
      continue: "Continuer",
      enter: "Entrer sur le quai",
      silentEnter: "Entrer sans le son",
    },
    languagePicker: {
      eyebrow: "Choisis la langue de ton voyage",
      titleLines: ["Rain Night Station", "La Gare sous la Pluie"],
      subtitle: "Choose the language of your journey.",
      buttons: {
        fr: "Français",
      },
    },
    intro: {
      time: "2 h 47 · Quai désert",
      title: "La Gare sous la Pluie",
      line1: "Tu ne te souviens pas pourquoi tu es ici.",
      line2: "Mais la voix du haut-parleur vient de prononcer ton nom.",
    },
    arrival: {
      broadcastLines: [
        "« Veuillez vous rendre au quai numéro sept. »",
        "« Ce soir, les trains ne vont que là où tu as vraiment besoin de te rendre. »",
      ],
      ticketLines: [
        "Tu baisses les yeux et trouves un billet trempé par la pluie à tes pieds.",
        "Aucune destination n’y est inscrite.",
        "Seulement ton nom.",
      ],
      platformLabel: "Quai numéro sept",
      rainRise: "La pluie devient plus forte.",
      headlights: "Des lumières commencent à apparaître au loin.",
      trainReveal: "Quatre faisceaux s’allument à la fois, et quatre trains émergent de la pluie.",
    },
    trains: {
      heading: "Quatre Portes",
      subheading: "Chaque porte ressemble à une nuit différente.",
      doors: {
        rest: {
          name: "Le Train Blanc",
          desc: "Ses fenêtres sont silencieuses, comme un lieu où tu pourrais enfin t’endormir.",
        },
        release: {
          name: "Le Vieux Train",
          desc: "Ses lumières semblent anciennes, comme une pluie que tu n’as jamais fini de pleurer.",
        },
        connection: {
          name: "Le Train des Lumières",
          desc: "À l’intérieur, une lumière chaude brille, comme si quelqu’un t’attendait depuis longtemps.",
        },
        direction: {
          name: "Le Train Sans Nom",
          desc: "Il n’a pas de destination, mais les rails continuent vers l’horizon.",
        },
      },
    },
    carriage: {
      line1: "Tu entres dans le wagon.",
      line2: "La pluie glisse le long de la vitre, comme tous les mots que tu n’as jamais dits.",
    },
    letter: {
      line1: "Le contrôleur s’arrête devant toi.",
      line2: "Il ne te demande pas où tu vas. Il te tend seulement une enveloppe portant ton nom.",
    },
    choices: {
      interiorTitle: "Où t’assois-tu ?",
      letterTitle: "Comment ouvres-tu la lettre ?",
      interior: [
        {
          id: "window",
          text: "Près de la fenêtre",
          sub: "Colle ton front à la vitre et laisse la pluie écrire lentement.",
        },
        {
          id: "quiet",
          text: "Le coin le plus calme",
          sub: "Garde une partie de toi à l’abri du monde.",
        },
        {
          id: "near",
          text: "Près d’un autre passager",
          sub: "Pas besoin de parler. Laisse simplement quelqu’un rester près de toi.",
        },
        {
          id: "end",
          text: "Au bout du wagon",
          sub: "Reste là où le mouvement se sent le plus fort et écoute le train avancer.",
        },
      ],
      letter: [
        {
          id: "open",
          text: "L’ouvrir doucement",
          sub: "Laisse la réponse réchauffer d’abord le bout de tes doigts.",
        },
        {
          id: "keep",
          text: "La garder dans ta poche",
          sub: "Tu n’es pas encore prêt à tout savoir.",
        },
        {
          id: "ask",
          text: "Demander qui l’a écrite",
          sub: "Tu veux que le silence te donne un nom.",
        },
        {
          id: "look",
          text: "Regarder d’abord par la fenêtre",
          sub: "Confie ton cœur à la pluie et respire une fois.",
        },
      ],
    },
    results: {
      note: "Ce résultat n’est pas un diagnostic psychologique. Il s’agit seulement d’une manière douce d’observer le type de soutien dont tu pourrais avoir besoin dans une période difficile.",
      restart: "Revoir le train de nuit",
      rest: {
        ending: "La pluie ralentit enfin.",
        story: [
          "Tu ne pars pas tout de suite. Tu restes sous la lumière un moment.",
          "Certaines nuits n’ont pas besoin de réponse. Elles ont seulement besoin d’un endroit où respirer.",
          "Ce soir, laisse-toi déposer un instant.",
        ],
        title: "Tu as besoin de repos",
        subtitle: "Laisse ton corps croire à nouveau qu’il est en sécurité.",
        desc: "Ce dont tu as peut-être le plus besoin maintenant, c’est d’une pause qui n’exige aucune explication.",
        cues: [
          "Offre-toi une soirée sans rien produire.",
          "Repose-toi d’abord, décide plus tard.",
        ],
      },
      release: {
        ending: "La pluie commence à se retirer.",
        story: [
          "Tu entends enfin l’émotion que tu retenais depuis si longtemps se desserrer.",
          "Tout n’a pas besoin d’être trié tout de suite.",
          "Certaines choses demandent seulement la permission de traverser.",
        ],
        title: "Tu as besoin de relâcher",
        subtitle: "Laisse ce qui pèse trouver une sortie.",
        desc: "Tu n’as pas à aller mieux d’un seul coup. Commence simplement à laisser bouger le poids.",
        cues: [
          "Trouve une sortie sûre.",
          "Ne range pas le ressenti avant de l’avoir laissé exister.",
        ],
      },
      connection: {
        ending: "Les lumières derrière la vitre se rapprochent une à une.",
        story: [
          "Tu n’es pas seul dans la nuit.",
          "Quelqu’un peut accueillir ton hésitation et entendre ce que tu n’as pas dit.",
          "Tu n’as pas besoin d’être complet pour être vu.",
        ],
        title: "Tu as besoin de lien",
        subtitle: "Être vu est déjà une forme de réparation lente.",
        desc: "Dans une période difficile, tu peux avoir besoin de compagnie plus que d’une réponse parfaite.",
        cues: [
          "Contacte une personne de confiance.",
          "Tu n’as pas besoin d’être prêt pour demander du soutien.",
        ],
      },
      direction: {
        ending: "Les rails s’étirent encore devant toi sous la pluie.",
        story: [
          "Tu fais un pas, même sans savoir exactement où il mène.",
          "Être perdu n’est pas un échec. C’est seulement le signe que tu te recalibres.",
          "Avance d’abord. La clarté pourra venir ensuite.",
        ],
        title: "Tu as besoin de direction",
        subtitle: "Trouve d’abord ta place, puis la sortie.",
        desc: "Ce dont tu as besoin maintenant n’est peut-être pas une réponse, mais un peu de courage pour continuer.",
        cues: [
          "Occupe-toi d’abord de la plus petite chose devant toi.",
          "Tu n’as pas besoin de toute la carte pour faire un pas.",
        ],
      },
    },
  },
};

export function normalizeLanguage() {
  return "fr";
}

export function getTrainCopy(_lang, key) {
  return translations.fr.trains.doors[key];
}

export function getResultCopy(_lang, key) {
  return translations.fr.results[key];
}
