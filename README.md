# meiosis

Use this Design System within Mutable Products and Websites

## Getting Started

```bash
npm install
```

Note: When using NPM v7, you might encounter `npm ERR! ERESOLVE unable to resolve dependency tree`. To fix this, please use `npm install --legacy-peer-deps`, since the error is caused by some of the dependencies (including [@visx](https://github.com/airbnb/visx/issues/872)) not supporting React v17 yet. 

## Run Storybook 

```bash
npm run storybook
```
All the components having `*.stories.tsx` will be automatically included in the Storybook. 

## Build Storybook for production

```bash
npm run build-storybook
```

## Build the component library for production

```bash
npm run build
```

## NPM Publish

The component library is published to [@mutable/meiosis](https://www.npmjs.com/package/@mutable/meiosis). 

```bash
npm publish
```

## Generating new components
When creating new components, instead of manually creating the component directory and all its files, a util called `create-component.js` is created. To use it: 

```
npm run generate YourComponentName
```

This will generate the following files, based on the templates stored at `util/templates`. 

```
/src
  /components
    /YourComponentName
      YourComponentName.tsx
      YourComponentName.stories.tsx
      YourComponentName.types.ts
```

To export the newly added component in the npm package, add to `index.ts`. 

## Using this component library

On a client app, use:

```bash
npm install @mutable/meiosis
```

#### Testing the package

To test the package locally, before publishing to NPM package registry, please remove @mutable/meiosis dependency from package.json and use `npm install full/path/to/package`.


#### References

The library was inspired by this [react-component-library](https://github.com/HarveyD/react-component-library) template.
