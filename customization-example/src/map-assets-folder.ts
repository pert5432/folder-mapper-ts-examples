import { exportFolderMap } from "folder-mapper-ts";
import path from "node:path";
import { PROJECT_ROOT } from "./project-root";

const main = async () => {
  await exportFolderMap({
    // Map the assets folder
    path: path.join(PROJECT_ROOT, "assets"),
    // Put the map into /src/assets-map.ts
    outputPath: path.join(PROJECT_ROOT, "src", "assets-map.ts"),
    // Make the generated file paths relative to the root of this example
    filePathsRelativeTo: PROJECT_ROOT,

    // Prefix all file paths in the map with a slash
    leadingSlashFilePaths: true,

    // Rename the exported const
    exportedConstName: "ASSETS_FOLDER_MAP",

    // Only map .gif files
    fileFilter: (filename: string) => filename.includes(".gif"),
    // Only map folders with 'image' in the name
    folderFilter: (foldername: string) => foldername.includes("image"),

    // Replace all spaces in folder names with underscores
    foldernameFormatter: (foldername: string) =>
      foldername.replaceAll(" ", "_"),
    // Removes file extensions from the map object, replaces all spaces with underscores
    filenameFormatter: (filename: string) =>
      filename.split(".")[0].replaceAll(" ", "_"),
  });
};

main();
