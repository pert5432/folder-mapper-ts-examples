# Automatic formatting example

Running `yarn map:assets` will generate a map of the assets folder into `src/assets-map.ts`. Thanks to the setup in `package.json` it will also automatically format the generated map so that it adheres to your defined code standards

## PROJECT_ROOT util

Thanks to this util you can generate the file paths relative to the project root and then when you need the absolute path to a file you can join `PROJECT_ROOT` and the relative path to the file (example in `src/index.ts`)
