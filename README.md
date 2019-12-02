# Ryan Components



This is a package that contains many common styles and components for sites and apps with [Ryan Rampersad](https://ryanrampersad.com/?ryan-components) branding.

This package is primarily developed with [Gatsby](https://www.gatsbyjs.org/) _consumers_ in mind. Any environment suitable to host react components and styled components should also work.

![npm (scoped)](https://img.shields.io/npm/v/@ryanrampersad/ryan-components)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@ryanrampersad/ryan-components)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ryanmr/ryan-components)
![GitHub](https://img.shields.io/github/license/ryanmr/ryan-components)

<!-- ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ryanmr/ryan-components/Node.js%20Package) -->

<!-- ![npm](https://img.shields.io/npm/dt/@ryanrampersad/ryan-components) -->


---

### Tech

* [typescript](https://www.typescriptlang.org/)
* [react](https://reactjs.org/)
* [styled-components](https://www.styled-components.com/)
* [rollup](https://rollupjs.org/guide/en/)
* [babel](https://babeljs.io/)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [yalc](https://github.com/whitecolor/yalc)

### Installation

To use this package as a _consumer_:

```bash
yarn add @ryanrampersad/ryan-components
```

[via npm](https://www.npmjs.com/package/@ryanrampersad/ryan-components)

### Example

To use this package as a _consumer_ after installation, import components that you need:

```jsx
import { FullHero, HeroBody, BrandTitle } from "@ryanrampersad/ryan-components";

export function Screen() {
  return <div>
    <FullHero>
      <HeroBody>
        <BrandTitle>Ryan</BrandTitle>
      </HeroBody>
    </FullHero>
  </div>
}
```

### Development

For development purposes, this package uses [yalc](https://github.com/whitecolor/yalc) to mitigate issues with `yarn link` adding erroneous duplicated dependencies. For more information about this issue, refer to the [styled components documentation](https://www.styled-components.com/docs/faqs#i-am-a-library-author-should-i-bundle-styledcomponents-with-my-library) about bundling and related topics, and consult [this issue](https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021).

Please install `yalc` to contribute to this package.

To build this package:

```bash
yarn build
```

To watch for changes and automatically rebuild:

```bash
yarn watch
```

To watch for changes, automatically rebuild and automatically `yalc push` (update local _consumers_ copy of the package):

```bash
yarn dev
```

This command can be used in conjunction, for example, with `gatsby start` to automatically rebuild the _consumer_ when this package's changes are pushed.

Note: if `yarn dev` does not work initially, try `yalc publish` to add this package to the `yalc` store.

### Font

This package may assume some specific fonts are available. These fonts must be provided by the _consumers_ of this package.

See the [fonts documentation](docs/fonts.md) for details.

### Gatsby `html.js`

Please review how you might customize your `html.js` file when using this package.