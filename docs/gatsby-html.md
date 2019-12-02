# Gatsby `html.js`

Gatsby offers a way to customize the most basic HTML structure, the `html`, `head`, and `body` tags, while still applying Gatsby-controlled properties to them dynamically via props.

This package includes a variety of components that may be used at this level.

* `InternalBanner.js` - provides the _Ryan Rampersad_ HTML comment markup

Consider using the following template as a guide for your Gatsby `html.js` file:

```jsx
import React from "react";
import PropTypes from "prop-types";
import { InternalBanner } from "./InternalBanner";

export default function HTML(props) {
  return (
    <>
      <html {...props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <InternalBanner />
          {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </body>
      </html>
    </>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
```