export const theme = {
  // breakpoints
  breakpoints: {
    small: "36rem",
    medium: "48rem",
    large: "60rem"
  },

  // grids:

  // colors
  bgColor: "#181818",
  textColor: "#eeeeee",

  // fonts
  brandFont: `"LeagueGothicRegular", Helvetica, Arial, san-serif`,
  bodyFont: `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", "Helvetica", "Arial", sans-serif;`
};

/**
 * Re-declares the styled-components DefaultTheme interface
 * to inherit from my theme.
 *
 * See [https://github.com/styled-components/styled-components-website/issues/447#issue-435412562](Better TypeScript setup for themes #447)
 * for more details.
 */
export type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
