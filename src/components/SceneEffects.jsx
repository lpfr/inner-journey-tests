import { useMemo } from "react";

const CANDY_PROFILES = {
  home: {
    id: "home",
    halo: 0.35,
    mist: 0.38,
    layers: [
      {
        name: "spark",
        kind: "orb",
        count: 10,
        palette: ["rgba(255, 246, 216, 0.92)", "rgba(255, 221, 244, 0.86)", "rgba(202, 255, 230, 0.76)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [1.8, 3.3],
        x: [6, 96],
        y: [10, 92],
        dx: [-16, 16],
        dy: [-34, -10],
        opacity: [0.32, 0.64],
        duration: [14, 18],
        delay: [0, 8],
        twinkle: 0.68,
        glow: ["rgba(255, 232, 160, 0.26)", "rgba(255, 190, 232, 0.2)", "rgba(194, 255, 231, 0.18)"],
      },
      {
        name: "petal",
        kind: "petal",
        count: 8,
        palette: ["rgba(255, 189, 226, 0.72)", "rgba(195, 250, 231, 0.58)", "rgba(255, 227, 143, 0.64)"],
        motions: ["candyFloatC", "candyFloatB"],
        size: [4, 8],
        x: [0, 100],
        y: [0, 96],
        dx: [-20, 20],
        dy: [-24, -8],
        opacity: [0.18, 0.38],
        duration: [18, 26],
        delay: [0, 12],
        twinkle: 0.25,
        glow: ["rgba(255, 195, 229, 0.12)", "rgba(196, 250, 231, 0.12)", "rgba(255, 226, 165, 0.1)"],
      },
      {
        name: "candy",
        kind: "candy",
        count: 8,
        palette: ["rgba(255, 179, 213, 0.72)", "rgba(245, 229, 164, 0.74)", "rgba(159, 255, 220, 0.58)"],
        motions: ["candyFloatA", "candyFloatOrbit"],
        size: [3.4, 7.5],
        x: [4, 96],
        y: [6, 92],
        dx: [-18, 18],
        dy: [-28, -10],
        opacity: [0.22, 0.46],
        duration: [16, 24],
        delay: [0, 10],
        twinkle: 0.22,
        glow: ["rgba(255, 201, 231, 0.14)", "rgba(255, 230, 153, 0.16)", "rgba(166, 255, 228, 0.12)"],
      },
    ],
  },
  glowingCandy: {
    id: "glowingCandy",
    halo: 0.58,
    mist: 0.46,
    layers: [
      {
        name: "spark",
        kind: "orb",
        count: 12,
        palette: ["rgba(255, 248, 218, 0.96)", "rgba(255, 187, 226, 0.82)", "rgba(255, 236, 167, 0.86)"],
        motions: ["candyFloatOrbit", "candyFloatA"],
        size: [2, 4],
        x: [8, 92],
        y: [12, 88],
        dx: [-22, 22],
        dy: [-30, -8],
        opacity: [0.34, 0.68],
        duration: [12, 16],
        delay: [0, 8],
        twinkle: 0.78,
        glow: ["rgba(255, 233, 173, 0.34)", "rgba(255, 185, 228, 0.26)", "rgba(255, 246, 210, 0.24)"],
      },
      {
        name: "orbit",
        kind: "candy",
        count: 10,
        palette: ["rgba(255, 174, 210, 0.78)", "rgba(255, 227, 149, 0.78)", "rgba(196, 255, 227, 0.66)"],
        motions: ["candyFloatOrbit", "candyFloatB"],
        size: [4, 8],
        x: [12, 88],
        y: [14, 86],
        dx: [-18, 18],
        dy: [-26, -8],
        opacity: [0.24, 0.5],
        duration: [14, 20],
        delay: [0, 10],
        twinkle: 0.42,
        glow: ["rgba(255, 194, 228, 0.18)", "rgba(255, 233, 163, 0.18)", "rgba(194, 255, 226, 0.14)"],
      },
      {
        name: "petal",
        kind: "petal",
        count: 8,
        palette: ["rgba(255, 201, 231, 0.58)", "rgba(255, 236, 178, 0.54)", "rgba(214, 255, 238, 0.46)"],
        motions: ["candyFloatC", "candyFloatA"],
        size: [5, 10],
        x: [0, 100],
        y: [8, 94],
        dx: [-18, 18],
        dy: [-26, -4],
        opacity: [0.16, 0.34],
        duration: [18, 28],
        delay: [0, 12],
        twinkle: 0.18,
        glow: ["rgba(255, 199, 228, 0.1)", "rgba(255, 230, 161, 0.1)", "rgba(199, 255, 231, 0.1)"],
      },
    ],
  },
  fox: {
    id: "fox",
    halo: 0.28,
    mist: 0.24,
    layers: [
      {
        name: "spark",
        kind: "orb",
        count: 8,
        palette: ["rgba(255, 231, 175, 0.86)", "rgba(255, 244, 226, 0.74)", "rgba(232, 214, 255, 0.42)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [1.6, 3],
        x: [4, 96],
        y: [8, 92],
        dx: [-14, 14],
        dy: [-26, -8],
        opacity: [0.18, 0.44],
        duration: [16, 22],
        delay: [0, 9],
        twinkle: 0.72,
        glow: ["rgba(255, 228, 169, 0.18)", "rgba(255, 245, 229, 0.14)", "rgba(232, 214, 255, 0.08)"],
      },
      {
        name: "dust",
        kind: "petal",
        count: 8,
        palette: ["rgba(255, 218, 154, 0.5)", "rgba(246, 234, 255, 0.34)", "rgba(255, 239, 203, 0.42)"],
        motions: ["candyFloatC", "candyFloatB"],
        size: [3, 6],
        x: [0, 100],
        y: [10, 92],
        dx: [-14, 14],
        dy: [-18, -6],
        opacity: [0.12, 0.28],
        duration: [18, 26],
        delay: [0, 12],
        twinkle: 0.18,
        glow: ["rgba(255, 222, 160, 0.08)", "rgba(246, 234, 255, 0.08)", "rgba(255, 243, 219, 0.08)"],
      },
    ],
  },
  candyRain: {
    id: "candyRain",
    halo: 0.62,
    mist: 0.5,
    layers: [
      {
        name: "rain",
        kind: "candy",
        count: 22,
        palette: ["rgba(255, 175, 211, 0.82)", "rgba(255, 232, 165, 0.78)", "rgba(170, 255, 225, 0.64)"],
        motions: ["candyFloatRain", "candyFloatRain", "candyFloatB"],
        size: [3, 8],
        x: [0, 100],
        y: [-8, 28],
        dx: [-10, 10],
        dy: [52, 86],
        fall: [72, 128],
        opacity: [0.2, 0.58],
        duration: [8, 14],
        delay: [0, 8],
        twinkle: 0.15,
        glow: ["rgba(255, 190, 225, 0.14)", "rgba(255, 233, 171, 0.12)", "rgba(168, 255, 227, 0.1)"],
      },
      {
        name: "spark",
        kind: "orb",
        count: 12,
        palette: ["rgba(255, 247, 225, 0.9)", "rgba(255, 217, 239, 0.8)", "rgba(206, 255, 236, 0.72)"],
        motions: ["candyFloatOrbit", "candyFloatA"],
        size: [1.8, 3.6],
        x: [4, 96],
        y: [10, 90],
        dx: [-18, 18],
        dy: [-22, -4],
        opacity: [0.22, 0.54],
        duration: [12, 18],
        delay: [0, 10],
        twinkle: 0.82,
        glow: ["rgba(255, 236, 176, 0.28)", "rgba(255, 198, 229, 0.22)", "rgba(204, 255, 232, 0.18)"],
      },
      {
        name: "burst",
        kind: "shard",
        count: 12,
        palette: ["rgba(255, 199, 232, 0.72)", "rgba(255, 229, 157, 0.76)", "rgba(201, 255, 232, 0.64)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [4, 9],
        x: [0, 100],
        y: [0, 96],
        dx: [-16, 16],
        dy: [-30, -12],
        opacity: [0.18, 0.46],
        duration: [14, 20],
        delay: [0, 10],
        twinkle: 0.26,
        glow: ["rgba(255, 201, 231, 0.12)", "rgba(255, 230, 168, 0.12)", "rgba(204, 255, 233, 0.1)"],
      },
    ],
  },
  mirror: {
    id: "mirror",
    halo: 0.14,
    mist: 0.14,
    layers: [
      {
        name: "spark",
        kind: "orb",
        count: 5,
        palette: ["rgba(255, 243, 226, 0.66)", "rgba(214, 228, 255, 0.44)", "rgba(255, 221, 233, 0.38)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [1.6, 2.8],
        x: [10, 90],
        y: [12, 88],
        dx: [-10, 10],
        dy: [-18, -6],
        opacity: [0.14, 0.32],
        duration: [18, 26],
        delay: [0, 10],
        twinkle: 0.42,
        glow: ["rgba(255, 243, 226, 0.14)", "rgba(214, 228, 255, 0.1)", "rgba(255, 221, 233, 0.08)"],
      },
      {
        name: "dust",
        kind: "petal",
        count: 4,
        palette: ["rgba(255, 235, 212, 0.34)", "rgba(214, 228, 255, 0.24)"],
        motions: ["candyFloatC", "candyFloatB"],
        size: [3, 5],
        x: [0, 100],
        y: [18, 94],
        dx: [-8, 8],
        dy: [-14, -4],
        opacity: [0.08, 0.2],
        duration: [22, 30],
        delay: [0, 12],
        twinkle: 0.08,
        glow: ["rgba(255, 235, 212, 0.06)", "rgba(214, 228, 255, 0.06)"],
      },
    ],
  },
  marshmallow: {
    id: "marshmallow",
    halo: 0.36,
    mist: 0.4,
    layers: [
      {
        name: "fluff",
        kind: "fluff",
        count: 12,
        palette: ["rgba(255, 248, 242, 0.76)", "rgba(255, 223, 236, 0.68)", "rgba(255, 241, 194, 0.58)"],
        motions: ["candyFloatOrbit", "candyFloatA"],
        size: [5, 10],
        x: [4, 96],
        y: [8, 92],
        dx: [-16, 16],
        dy: [-22, -6],
        opacity: [0.16, 0.38],
        duration: [18, 28],
        delay: [0, 12],
        twinkle: 0.24,
        glow: ["rgba(255, 247, 240, 0.18)", "rgba(255, 223, 236, 0.14)", "rgba(255, 241, 194, 0.12)"],
      },
      {
        name: "spark",
        kind: "orb",
        count: 8,
        palette: ["rgba(255, 251, 245, 0.88)", "rgba(255, 231, 241, 0.74)", "rgba(251, 245, 214, 0.72)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [1.8, 3.6],
        x: [8, 92],
        y: [12, 88],
        dx: [-14, 14],
        dy: [-24, -8],
        opacity: [0.2, 0.48],
        duration: [14, 20],
        delay: [0, 10],
        twinkle: 0.7,
        glow: ["rgba(255, 247, 240, 0.24)", "rgba(255, 223, 236, 0.18)", "rgba(251, 245, 214, 0.16)"],
      },
    ],
  },
  fireflies: {
    id: "fireflies",
    halo: 0.56,
    mist: 0.34,
    layers: [
      {
        name: "fly",
        kind: "firefly",
        count: 16,
        palette: ["rgba(255, 240, 150, 0.92)", "rgba(255, 255, 220, 0.86)", "rgba(189, 255, 219, 0.7)"],
        motions: ["candyFloatOrbit", "candyFloatChaos", "candyFloatA"],
        size: [1.8, 3.8],
        x: [4, 96],
        y: [10, 90],
        dx: [-18, 18],
        dy: [-22, -4],
        opacity: [0.18, 0.5],
        duration: [10, 16],
        delay: [0, 8],
        twinkle: 0.9,
        glow: ["rgba(255, 232, 130, 0.4)", "rgba(255, 255, 220, 0.34)", "rgba(189, 255, 219, 0.26)"],
      },
      {
        name: "spark",
        kind: "orb",
        count: 8,
        palette: ["rgba(255, 246, 204, 0.8)", "rgba(255, 227, 240, 0.62)", "rgba(198, 255, 229, 0.6)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [1.6, 3.2],
        x: [10, 90],
        y: [12, 88],
        dx: [-14, 14],
        dy: [-22, -6],
        opacity: [0.16, 0.4],
        duration: [14, 20],
        delay: [0, 10],
        twinkle: 0.76,
        glow: ["rgba(255, 236, 163, 0.24)", "rgba(255, 227, 240, 0.18)", "rgba(198, 255, 229, 0.16)"],
      },
    ],
  },
  map: {
    id: "map",
    halo: 0.3,
    mist: 0.24,
    layers: [
      {
        name: "line",
        kind: "line",
        count: 12,
        palette: ["rgba(255, 232, 170, 0.74)", "rgba(214, 249, 255, 0.58)", "rgba(193, 255, 226, 0.52)"],
        motions: ["candyFloatLine", "candyFloatA"],
        size: [1.6, 3.5],
        x: [4, 96],
        y: [12, 90],
        dx: [-18, 18],
        dy: [-18, -4],
        opacity: [0.2, 0.44],
        duration: [12, 18],
        delay: [0, 8],
        twinkle: 0.34,
        glow: ["rgba(255, 232, 170, 0.22)", "rgba(214, 249, 255, 0.16)", "rgba(193, 255, 226, 0.14)"],
      },
      {
        name: "spark",
        kind: "orb",
        count: 8,
        palette: ["rgba(255, 244, 210, 0.84)", "rgba(214, 249, 255, 0.64)", "rgba(197, 255, 229, 0.62)"],
        motions: ["candyFloatOrbit", "candyFloatB"],
        size: [1.8, 3.2],
        x: [8, 92],
        y: [10, 88],
        dx: [-14, 14],
        dy: [-22, -8],
        opacity: [0.16, 0.42],
        duration: [14, 20],
        delay: [0, 10],
        twinkle: 0.68,
        glow: ["rgba(255, 232, 170, 0.24)", "rgba(214, 249, 255, 0.16)", "rgba(193, 255, 226, 0.16)"],
      },
    ],
  },
  sugarDoor: {
    id: "sugarDoor",
    halo: 0.42,
    mist: 0.28,
    layers: [
      {
        name: "shard",
        kind: "shard",
        count: 12,
        palette: ["rgba(255, 225, 235, 0.74)", "rgba(255, 240, 181, 0.74)", "rgba(202, 255, 231, 0.58)"],
        motions: ["candyFloatA", "candyFloatB"],
        size: [3.5, 7],
        x: [2, 98],
        y: [10, 92],
        dx: [-14, 14],
        dy: [-18, -6],
        opacity: [0.18, 0.42],
        duration: [18, 26],
        delay: [0, 12],
        twinkle: 0.2,
        glow: ["rgba(255, 225, 235, 0.14)", "rgba(255, 240, 181, 0.14)", "rgba(202, 255, 231, 0.1)"],
      },
      {
        name: "spark",
        kind: "orb",
        count: 10,
        palette: ["rgba(255, 247, 223, 0.9)", "rgba(255, 235, 190, 0.76)", "rgba(216, 255, 236, 0.68)"],
        motions: ["candyFloatOrbit", "candyFloatA"],
        size: [1.8, 3.6],
        x: [8, 92],
        y: [8, 90],
        dx: [-12, 12],
        dy: [-18, -4],
        opacity: [0.18, 0.42],
        duration: [14, 20],
        delay: [0, 10],
        twinkle: 0.62,
        glow: ["rgba(255, 237, 191, 0.24)", "rgba(255, 235, 190, 0.2)", "rgba(216, 255, 236, 0.16)"],
      },
    ],
  },
  fatigue: {
    id: "fatigue",
    halo: 0.24,
    mist: 0.28,
    layers: [
      {
        name: "chaos",
        kind: "orb",
        count: 16,
        palette: ["rgba(255, 239, 164, 0.72)", "rgba(255, 219, 236, 0.62)", "rgba(197, 248, 255, 0.58)"],
        motions: ["candyFloatChaos", "candyFloatA", "candyFloatB"],
        size: [1.6, 3.8],
        x: [2, 98],
        y: [8, 94],
        dx: [-22, 22],
        dy: [-24, -2],
        opacity: [0.14, 0.44],
        duration: [8, 14],
        delay: [0, 8],
        twinkle: 0.68,
        glow: ["rgba(255, 239, 164, 0.2)", "rgba(255, 219, 236, 0.14)", "rgba(197, 248, 255, 0.12)"],
      },
      {
        name: "sparks",
        kind: "petal",
        count: 10,
        palette: ["rgba(255, 230, 195, 0.5)", "rgba(255, 221, 238, 0.42)", "rgba(214, 249, 255, 0.34)"],
        motions: ["candyFloatC", "candyFloatB"],
        size: [3, 6],
        x: [0, 100],
        y: [0, 96],
        dx: [-16, 16],
        dy: [-16, -4],
        opacity: [0.12, 0.28],
        duration: [14, 22],
        delay: [0, 10],
        twinkle: 0.24,
        glow: ["rgba(255, 230, 195, 0.08)", "rgba(255, 221, 238, 0.08)", "rgba(214, 249, 255, 0.06)"],
      },
    ],
  },
  result: {
    satisfaction: {
      id: "result-satisfaction",
      halo: 0.58,
      mist: 0.46,
      layers: [
        {
          name: "candy",
          kind: "candy",
          count: 12,
          palette: ["rgba(255, 175, 211, 0.82)", "rgba(255, 232, 164, 0.82)", "rgba(183, 255, 229, 0.68)"],
          motions: ["candyFloatOrbit", "candyFloatA"],
          size: [3.2, 7],
          x: [8, 92],
          y: [12, 88],
          dx: [-14, 14],
          dy: [-20, -6],
          opacity: [0.18, 0.46],
          duration: [12, 18],
          delay: [0, 10],
          twinkle: 0.6,
          glow: ["rgba(255, 175, 211, 0.22)", "rgba(255, 232, 164, 0.22)", "rgba(183, 255, 229, 0.16)"],
        },
        {
          name: "spark",
          kind: "orb",
          count: 10,
          palette: ["rgba(255, 246, 220, 0.92)", "rgba(255, 217, 240, 0.78)", "rgba(208, 255, 236, 0.7)"],
          motions: ["candyFloatA", "candyFloatB"],
          size: [1.8, 3.8],
          x: [4, 96],
          y: [10, 92],
          dx: [-16, 16],
          dy: [-22, -4],
          opacity: [0.22, 0.56],
          duration: [12, 18],
          delay: [0, 10],
          twinkle: 0.82,
          glow: ["rgba(255, 238, 182, 0.28)", "rgba(255, 217, 240, 0.2)", "rgba(208, 255, 236, 0.16)"],
        },
      ],
    },
    controle: {
      id: "result-control",
      halo: 0.28,
      mist: 0.2,
      layers: [
        {
          name: "spark",
          kind: "orb",
          count: 8,
          palette: ["rgba(255, 244, 210, 0.72)", "rgba(213, 230, 255, 0.52)", "rgba(235, 224, 178, 0.58)"],
          motions: ["candyFloatA", "candyFloatB"],
          size: [1.8, 3.2],
          x: [8, 92],
          y: [10, 88],
          dx: [-12, 12],
          dy: [-18, -4],
          opacity: [0.14, 0.38],
          duration: [14, 22],
          delay: [0, 10],
          twinkle: 0.44,
          glow: ["rgba(255, 244, 210, 0.16)", "rgba(213, 230, 255, 0.12)", "rgba(235, 224, 178, 0.12)"],
        },
        {
          name: "line",
          kind: "line",
          count: 4,
          palette: ["rgba(255, 244, 210, 0.56)", "rgba(213, 230, 255, 0.4)"],
          motions: ["candyFloatLine", "candyFloatA"],
          size: [1.4, 2.6],
          x: [12, 88],
          y: [14, 86],
          dx: [-10, 10],
          dy: [-14, -4],
          opacity: [0.12, 0.26],
          duration: [16, 24],
          delay: [0, 10],
          twinkle: 0.18,
          glow: ["rgba(255, 244, 210, 0.1)", "rgba(213, 230, 255, 0.08)"],
        },
      ],
    },
    structure: {
      id: "result-structure",
      halo: 0.32,
      mist: 0.24,
      layers: [
        {
          name: "line",
          kind: "line",
          count: 14,
          palette: ["rgba(255, 231, 160, 0.72)", "rgba(211, 246, 255, 0.56)", "rgba(193, 255, 226, 0.58)"],
          motions: ["candyFloatLine", "candyFloatA"],
          size: [1.4, 3],
          x: [4, 96],
          y: [10, 90],
          dx: [-16, 16],
          dy: [-16, -4],
          opacity: [0.16, 0.42],
          duration: [12, 18],
          delay: [0, 8],
          twinkle: 0.32,
          glow: ["rgba(255, 231, 160, 0.16)", "rgba(211, 246, 255, 0.12)", "rgba(193, 255, 226, 0.12)"],
        },
        {
          name: "spark",
          kind: "orb",
          count: 6,
          palette: ["rgba(255, 244, 210, 0.86)", "rgba(214, 249, 255, 0.66)", "rgba(198, 255, 229, 0.66)"],
          motions: ["candyFloatOrbit", "candyFloatB"],
          size: [1.8, 3.4],
          x: [10, 90],
          y: [10, 88],
          dx: [-14, 14],
          dy: [-18, -6],
          opacity: [0.16, 0.38],
          duration: [14, 20],
          delay: [0, 10],
          twinkle: 0.7,
          glow: ["rgba(255, 231, 160, 0.22)", "rgba(214, 249, 255, 0.16)", "rgba(198, 255, 229, 0.14)"],
        },
      ],
    },
    emotion: {
      id: "result-emotion",
      halo: 0.4,
      mist: 0.42,
      layers: [
        {
          name: "mist",
          kind: "fluff",
          count: 8,
          palette: ["rgba(255, 220, 237, 0.72)", "rgba(242, 247, 255, 0.62)", "rgba(255, 241, 200, 0.52)"],
          motions: ["candyFloatOrbit", "candyFloatA"],
          size: [4, 8],
          x: [0, 100],
          y: [12, 92],
          dx: [-14, 14],
          dy: [-18, -4],
          opacity: [0.12, 0.28],
          duration: [18, 28],
          delay: [0, 12],
          twinkle: 0.22,
          glow: ["rgba(255, 220, 237, 0.12)", "rgba(242, 247, 255, 0.1)", "rgba(255, 241, 200, 0.08)"],
        },
        {
          name: "spark",
          kind: "orb",
          count: 8,
          palette: ["rgba(255, 243, 245, 0.88)", "rgba(255, 223, 236, 0.76)", "rgba(219, 240, 255, 0.62)"],
          motions: ["candyFloatA", "candyFloatB"],
          size: [1.8, 3.2],
          x: [8, 92],
          y: [10, 90],
          dx: [-14, 14],
          dy: [-20, -6],
          opacity: [0.16, 0.42],
          duration: [14, 20],
          delay: [0, 10],
          twinkle: 0.66,
          glow: ["rgba(255, 243, 245, 0.2)", "rgba(255, 223, 236, 0.18)", "rgba(219, 240, 255, 0.14)"],
        },
      ],
    },
  },
};

const AMBIENT_PARTICLE_LAYERS = [
  {
    name: "ambient-mote",
    kind: "mote",
    count: 46,
    palette: ["rgba(255, 244, 214, 0.52)", "rgba(255, 211, 236, 0.46)", "rgba(196, 255, 230, 0.4)", "rgba(222, 230, 255, 0.36)"],
    motions: ["candyFloatA", "candyFloatB", "candyFloatOrbit"],
    size: [2.2, 8.8],
    x: [0, 100],
    y: [0, 100],
    dx: [-30, 30],
    dy: [-42, -10],
    opacity: [0.18, 0.42],
    duration: [18, 34],
    delay: [0, 18],
    twinkle: 0.45,
    glow: ["rgba(255, 232, 174, 0.28)", "rgba(255, 199, 228, 0.24)", "rgba(196, 255, 230, 0.22)", "rgba(222, 230, 255, 0.2)"],
  },
  {
    name: "ambient-haze",
    kind: "mote",
    count: 28,
    palette: ["rgba(255, 255, 245, 0.34)", "rgba(255, 229, 244, 0.32)", "rgba(222, 255, 239, 0.28)"],
    motions: ["candyFloatC", "candyFloatOrbit"],
    size: [6, 18],
    x: [0, 100],
    y: [0, 100],
    dx: [-18, 18],
    dy: [-24, 8],
    opacity: [0.12, 0.3],
    duration: [24, 42],
    delay: [0, 22],
    twinkle: 0.22,
    glow: ["rgba(255, 242, 210, 0.18)", "rgba(255, 220, 238, 0.18)", "rgba(214, 255, 238, 0.16)"],
  },
];

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRng(seed) {
  let state = seed || 1;
  return () => {
    state = Math.imul(1664525, state) + 1013904223;
    return (state >>> 0) / 4294967296;
  };
}

function pick(list, rand) {
  return list[Math.floor(rand() * list.length)];
}

function between(rand, min, max) {
  return min + (max - min) * rand();
}

function modeForScene(stepId, resultKey) {
  if (stepId === "intro" || !stepId) return "home";
  if (stepId === "bonbon-lumineux") return "glowingCandy";
  if (stepId === "renard") return "fox";
  if (stepId === "pluie") return "candyRain";
  if (stepId === "miroir") return "mirror";
  if (stepId === "guimauve") return "marshmallow";
  if (stepId === "lucioles") return "fireflies";
  if (stepId === "carte") return "map";
  if (stepId === "porte") return "sugarDoor";
  if (stepId === "result") return resultKey || "satisfaction";
  return "home";
}

function profileFor(stepId, resultKey) {
  const mode = modeForScene(stepId, resultKey);
  if (["satisfaction", "controle", "structure", "emotion"].includes(mode)) {
    return CANDY_PROFILES.result[mode];
  }
  return CANDY_PROFILES[mode] || CANDY_PROFILES.home;
}

function createParticle(rng, layer) {
  const size = between(rng, layer.size[0], layer.size[1]) * (layer.kind === "mote" ? 1.25 : 1.55) + (layer.kind === "orb" ? 0.8 : 0);
  const opacity = Math.min(0.68, between(rng, layer.opacity[0], layer.opacity[1]) * 1.08 + 0.04);
  const color = pick(layer.palette, rng);
  const glow = pick(layer.glow, rng);
  const motion = pick(layer.motions, rng);
  const twinkle = rng() < layer.twinkle;
  const twinkleLow = Math.max(0.1, opacity * 0.54);
  const twinkleHigh = Math.min(0.82, opacity * 1.28 + 0.12);
  const blur =
    layer.kind === "mote"
      ? between(rng, 0.45, 1.7)
      : layer.kind === "fluff"
        ? between(rng, 0.8, 2.4)
        : between(rng, 0.25, 1.2);

  return {
    kind: layer.kind,
    left: between(rng, layer.x[0], layer.x[1]),
    top: between(rng, layer.y[0], layer.y[1]),
    size,
    opacity,
    color,
    glow,
    motion,
    duration: (between(rng, layer.duration[0], layer.duration[1]) * 0.36).toFixed(2),
    delay: between(rng, layer.delay[0], layer.delay[1]).toFixed(2),
    dx: (between(rng, layer.dx[0], layer.dx[1]) * 1.35).toFixed(1),
    dy: (between(rng, layer.dy[0], layer.dy[1]) * 1.35).toFixed(1),
    fall: layer.fall ? (between(rng, layer.fall[0], layer.fall[1]) * 1.18).toFixed(1) : null,
    rot: between(rng, -24, 24).toFixed(1),
    scale: between(rng, 0.98, 1.18).toFixed(3),
    blur: blur.toFixed(2),
    twinkle,
    twinkleDuration: between(rng, 2.8, 5.6).toFixed(2),
    twinkleDelay: between(rng, 0, 4).toFixed(2),
    twinkleLow: twinkleLow.toFixed(3),
    twinkleHigh: twinkleHigh.toFixed(3),
  };
}

function buildLayers(profile, stepId, resultKey) {
  const seed = hashString(`candy-forest:${stepId || "intro"}:${resultKey || "none"}:${profile.id}`);
  const rng = createRng(seed);
  const layers = [
    ...AMBIENT_PARTICLE_LAYERS,
    ...profile.layers.map(layer => ({
      ...layer,
      count: Math.ceil(layer.count * 1.75),
    })),
  ];

  return layers.map((layer, index) => ({
    key: `${index}-${layer.name}-${layer.kind}`,
    particles: Array.from({ length: layer.count }, () => createParticle(rng, layer)),
  }));
}

export default function SceneEffects({ sceneId, stepId, resultKey, selectedChoiceId }) {
  const profile = useMemo(() => profileFor(stepId, resultKey), [stepId, resultKey]);
  const layers = useMemo(() => buildLayers(profile, stepId, resultKey), [profile, stepId, resultKey]);
  const modeClass = profile.id;

  if (sceneId !== "candy-forest") return null;

  return (
    <div className={`candy-effects candy-effects--${modeClass}${selectedChoiceId ? " is-bursting" : ""}`} aria-hidden="true">
      <span className="candy-effects__field candy-effects__field--soft" />
      <span className="candy-effects__field candy-effects__field--near" />
      <span className="candy-effects__mist candy-effects__mist--back" />
      <span className="candy-effects__mist candy-effects__mist--front" />
      <span className="candy-effects__halo candy-effects__halo--left" />
      <span className="candy-effects__halo candy-effects__halo--right" />

      {layers.map(layer => (
        <div key={layer.key} className={`candy-effects__layer candy-effects__layer--${layer.key}`}>
          {layer.particles.map((particle, index) => {
            const animationName = particle.twinkle ? `${particle.motion}, candyParticleTwinkle` : particle.motion;
            const animationDuration = particle.twinkle
              ? `${particle.duration}s, ${particle.twinkleDuration}s`
              : `${particle.duration}s`;
            const animationDelay = particle.twinkle
              ? `${particle.delay}s, ${particle.twinkleDelay}s`
              : `${particle.delay}s`;
            const animationTimingFunction = particle.twinkle
              ? "ease-in-out, ease-in-out"
              : "ease-in-out";
            const animationIterationCount = particle.twinkle
              ? "infinite, infinite"
              : "infinite";
            const animationDirection = particle.twinkle
              ? "alternate, alternate"
              : "alternate";

            return (
              <span
                key={`${layer.key}-${index}`}
                className={`candy-effect__particle candy-effect__particle--${particle.kind}${particle.twinkle ? " is-twinkle" : ""}`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  "--base-opacity": particle.opacity,
                  "--particle-color": particle.color,
                  "--particle-glow": particle.glow,
                  "--dx": `${particle.dx}px`,
                  "--dy": `${particle.dy}px`,
                  "--fall": particle.fall ? `${particle.fall}px` : "92px",
                  "--rot": `${particle.rot}deg`,
                  "--scale": particle.scale,
                  "--blur": `${particle.blur}px`,
                  "--opacity-low": particle.twinkleLow,
                  "--opacity-high": particle.twinkleHigh,
                  animationName,
                  animationDuration,
                  animationDelay,
                  animationTimingFunction,
                  animationIterationCount,
                  animationDirection,
                }}
              />
            );
          })}
        </div>
      ))}

      {selectedChoiceId && <span className="candy-effects__burst" />}
    </div>
  );
}
