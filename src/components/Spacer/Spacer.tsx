import styled, { css } from 'styled-components';
import { media } from '../../styled';

interface SpacerBreakpoints {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface SpacerProps {
  m?: string | [string, SpacerBreakpoints];
  mb?: string | [string, SpacerBreakpoints];
  ml?: string | [string, SpacerBreakpoints];
  mr?: string | [string, SpacerBreakpoints];
  mt?: string | [string, SpacerBreakpoints];
  mx?: string | [string, SpacerBreakpoints];
  my?: string | [string, SpacerBreakpoints];
  p?: string | [string, SpacerBreakpoints];
  pb?: string | [string, SpacerBreakpoints];
  pl?: string | [string, SpacerBreakpoints];
  pr?: string | [string, SpacerBreakpoints];
  pt?: string | [string, SpacerBreakpoints];
  px?: string | [string, SpacerBreakpoints];
  py?: string | [string, SpacerBreakpoints];
}

// const extractCss = (props: SpacerProps) => {
//   const cssProps = [];

//   if (props.m) {

//   }

//   return cssProps;
// }

export const Spacer = styled.div<SpacerProps>`
  ${(props) => {
    const cssProps = [];

    if (props.m) {
      if (Array.isArray(props.m)) {
        const [m, breakpoints]: [string, any] = props.m;
        cssProps.push(css`margin: ${m};`);
        Object.keys(breakpoints).forEach((breakpoint: any) => {
          cssProps.push(media.breakpoint.up(breakpoint, css`
            margin: ${breakpoints[breakpoint]};
          `))
        })
      } else {
        cssProps.push(css`margin: ${props.m};`);
      }
    }

    if (props.mb) {
      if (Array.isArray(props.mb)) {
        const [mb, breakpoints]: [string, any] = props.mb;
        cssProps.push(css`margin-bottom: ${mb};`);
        Object.keys(breakpoints).forEach((breakpoint: any) => {
          cssProps.push(media.breakpoint.up(breakpoint, css`
            margin-bottom: ${breakpoints[breakpoint]};
          `))
        })
      } else {
        cssProps.push(css`margin-bottom: ${props.mb};`);
      }
    }

    if (props.my) {
      if (Array.isArray(props.my)) {
        const [my, breakpoints]: [string, any] = props.my;
        cssProps.push(css`
          margin-bottom: ${my};
          margin-top: ${my};
        `);
        Object.keys(breakpoints).forEach((breakpoint: any) => {
          cssProps.push(media.breakpoint.up(breakpoint, css`
            margin-bottom: ${breakpoints[breakpoint]};
            margin-top: ${breakpoints[breakpoint]};
          `))
        })
      } else {
        cssProps.push(css`
          margin-bottom: ${props.my};
          margin-top: ${props.my};
        `);
      }
    }

    if (props.py) {
      if (Array.isArray(props.py)) {
        const [py, breakpoints]: [string, any] = props.py;
        cssProps.push(css`
          padding-bottom: ${py};
          padding-top: ${py};
        `);
        Object.keys(breakpoints).forEach((breakpoint: any) => {
          cssProps.push(media.breakpoint.up(breakpoint, css`
            padding-bottom: ${breakpoints[breakpoint]};
            padding-top: ${breakpoints[breakpoint]};
          `))
        })
      } else {
        cssProps.push(css`
          padding-bottom: ${props.py};
          padding-top: ${props.py};
        `);
      }
    }

    return cssProps;
  }}
`
