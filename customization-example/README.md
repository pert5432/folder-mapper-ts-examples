# Example usage with customization features

The generated map is of the `/assets` folder. The map is generated into `src/assets-map.ts`. It only maps `.gif` files and folders which include `image`. Other customizations are described in `src/map-assets-folder.ts` which is the script that generates the map.

## Running the example

To run the example or re-generate the map you will need a way to run typescript scripts in node. If you have `ts-node` installed run:

`yarn start` to run the example (outputs some `console.log`s)

`yarn map:assets` to re-generate the map

## PROJECT_ROOT util

Thanks to this util you can generate the file paths relative to the project root and then when you need the absolute path to a file you can join `PROJECT_ROOT` and the relative path to the file (example in `src/index.ts`).
