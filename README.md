# meiosis

Use this Design System within Mutable Products.

## Getting Started

```bash
npm install
```

Note: When using NPM v7, you might encounter `npm ERR! ERESOLVE unable to resolve dependency tree`. To fix this, please use `npm install --legacy-peer-deps`, since the error is caused by some of the dependencies (including [@visx](https://github.com/airbnb/visx/issues/872)) not supporting React v17 yet. 

## Run Storybook 

```bash
npm run storybook
```
All the components having `*.stories.tsx` are automatically included in Storybook. 

## Build Storybook for production

```bash
npm run build-storybook
```

## Build the component library for production

```bash
npm run build
```

## Generate new components
When creating a new component, instead of creating the component directory and all its files manually, a util called `create-component.js` can be used. 

```
npm run generate ComponentName
```

This will generate the following files, based on the templates stored at `util/templates`. 

```
/src
  /components
    /ComponentName
      ComponentName.tsx
      ComponentName.stories.tsx
      ComponentName.types.ts
```

To export the newly added component in the npm package, add it to `index.ts`. 

## NPM Publish

The component library is published to [@mutable/meiosis](https://www.npmjs.com/package/@mutable/meiosis). To publish a new version, update the version in `package.json`, and run:

```bash
npm publish
```

## Using the package

To use meiosis components in a client app, run:

```bash
npm install @mutable/meiosis
```
Then, simply use them by `import { Table, SystemHealthCard } from "@mutable/meiosis"`.

## Testing the package

All the components can be tested in different states using Storybook stories. 

In addition, to test the package in client apps locally (before publishing it to NPM package registry), build the component library, and, in the client app run: 

```bash
npm uninstall @mutable/meiosis
npm install full/path/to/package
```

Remember to change the dependency back to the published NPM package after testing. 

## References

The library was inspired by [react-component-library](https://github.com/HarveyD/react-component-library) template.
