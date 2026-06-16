import { rainStationScene } from "./rainStation.js";
import { fogMuseumScene } from "./fogMuseum.js";
import { candyForestScene } from "./candyForest.js";
import { sinkingCityScene } from "./sinkingCity.js";
import { glassGreenhouseScene } from "./glassGreenhouse.js";
import { roomForTwoScene } from "./roomForTwo.js";
import { maskBallScene } from "./maskBall.js";
import { mountainLighthouseScene } from "./mountainLighthouse.js";
import { innerHouseScene } from "./innerHouse.js";
import { fourRiversScene } from "./fourRivers.js";

export const scenes = [
  rainStationScene,
  fogMuseumScene,
  candyForestScene,
  sinkingCityScene,
  glassGreenhouseScene,
  roomForTwoScene,
  maskBallScene,
  mountainLighthouseScene,
  innerHouseScene,
  fourRiversScene,
];

export function getSceneById(sceneId) {
  return scenes.find(scene => scene.id === sceneId) ?? scenes[0];
}
