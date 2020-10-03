import { DefaultTheme } from "styled-components";

type MyTheme = typeof theme;

export const theme = {
  typography: {
    decorativeFont: "'Tangerine', cursive",
  },
};

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
