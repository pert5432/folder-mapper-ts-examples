import { exportFolderMap } from 'folder-mapper-ts';
import path from 'node:path';
import { PROJECT_ROOT } from './project-root';

const main = async () => {
  await exportFolderMap({
    path: path.join(PROJECT_ROOT, 'assets'),
    outputPath: path.join(PROJECT_ROOT, 'src', 'assets-map.ts'),
    filePathsRelativeTo: PROJECT_ROOT,
  });
};

main();
