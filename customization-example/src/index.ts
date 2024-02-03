import { ASSETS_FOLDER_MAP } from "./assets-map";
import path from "node:path";
import { PROJECT_ROOT } from "./project-root";

console.log("Assets folder map:");
console.log(ASSETS_FOLDER_MAP);

console.log(
  `Absolute path to my favourite image is: ${path.join(
    PROJECT_ROOT,
    ASSETS_FOLDER_MAP.funny_images.bus_1
  )}`
);
