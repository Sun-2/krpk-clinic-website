import { DefaultTheme } from "styled-components";

type MyTheme = typeof theme;

export const theme = {
  typography: {
    decorativeFont: "'Tangerine', cursive",
  },
  spacing: (spacing: number) => 8 * spacing + "px",
};

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
