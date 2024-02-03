import path from "node:path";
import { exportFolderMap } from "folder-mapper-ts";

const main = async () => {
  await exportFolderMap({
    // Absolute path to public folder
    path: path.join(__dirname, "..", "public"),
    // Absolute path to output file in /src/app/public-map.ts
    outputPath: path.join(__dirname, "app", "public-map.ts"),
    // Absolute path to public folder
    filePathsRelativeTo: path.join(__dirname, "..", "public"),

    // NextJS requires a leading slash on relative paths to the public folder
    leadingSlashFilePaths: true,
  });
};

main();
