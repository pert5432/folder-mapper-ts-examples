import { MAP } from './assets-map';
import path from 'node:path';
import { PROJECT_ROOT } from './project-root';

console.log('The absolute path to my favourite bus picture is:');
console.log(path.join(PROJECT_ROOT, MAP.images['bus_1.gif']));
