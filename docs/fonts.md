# Fonts

This library uses [League Gothic](https://www.theleagueofmoveabletype.com/league-gothic).

Users of this library must provide _League Gothic_ files on their own, either in their own bundle or by a CSS import.

For example and convenience, please see the [example import league gothic file](docs/example-import-league-gothic.md).

If a Privacy-centric CDN offers to host this content, that may be used instead, if the user experience thresholds can support that use case.

The following snippet is an example of how to import the League Gothic font in a Gatsby project.

```jsx
import { createGlobalStyle } from 'styled-components';

export const LeagueGothicFont = createGlobalStyle`
  @font-face {
    font-family: "LeagueGothicRegular";
    src: url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.eot")});
    src: url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.eot?#iefix")})
        format("embedded-opentype"),
      url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.woff")})
        format("woff"),
      url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.ttf")})
        format("truetype"),
      url(${require("../../assets/fonts/league-gothic/League_Gothic-webfont.svg")})
        format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`;
```