import { css, FlattenInterpolation } from "styled-components";
import { Theme } from "../Provider";

type MediaBreakpointEnum = keyof typeof Theme["breakpoints"];

export const media = {
  breakpoint: {
    down(
      media: MediaBreakpointEnum,
      rules: FlattenInterpolation<any>
    ): FlattenInterpolation<any> {
      return css`
        @media (max-width: ${Theme.breakpoints[media] - 0.02}px) {
          ${rules}
        }
      `;
    },
    up(
      media: MediaBreakpointEnum,
      rules: FlattenInterpolation<any>
    ): FlattenInterpolation<any> {
      return css`
        @media (min-width: ${Theme.breakpoints[media]}px) {
          ${rules}
        }
      `;
    }
  },
  print: (
    rules: FlattenInterpolation<any>
  ): FlattenInterpolation<any> => css`
    @media print {
      ${rules}
    }
  `
};
