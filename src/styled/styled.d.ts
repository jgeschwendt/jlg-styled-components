import "styled-components";
import { Theme } from "./Provider";

declare module "styled-components" {
  type ExtendedTheme = typeof Theme;
  export interface DefaultTheme extends ExtendedTheme {}
}
