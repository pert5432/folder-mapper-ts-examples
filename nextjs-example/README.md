# Example usage with NextJS 14

Map gets generated into `src/app/public-map.ts`, maps the public folder and all file paths are relative to the public folder.

See usage in `/src/app/page.tsx`.

When using the paths with NextJS `<Image />` component you have to add a leading slash to the file path.

## Running the example

To run the example:

```bash
yarn install

yarn dev
```

Open [localhost:3000](http://localhost:3000) in your browser to see the result.

To re-generate the map you will need a way to run typescript scripts in node. If you have `ts-node` installed run:

```bash
yarn map:public
```
