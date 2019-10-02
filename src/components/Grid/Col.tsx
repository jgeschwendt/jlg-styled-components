import styled, { css } from 'styled-components';
import { media } from '../../styled';

interface Media {
  xs?: number;
  xsOffset?: number;
  sm?: number;
  smOffset?: number;
  md?: number;
  mdOffset?: number;
  lg?: number;
  lgOffset?: number;
  xl?: number;
  xlOffset?: number;
}

interface ColProps extends Media {
  children?: Element | Element[] | any;
  className?: string | null;
  gutter?: string;
}

export const Col = styled.div<ColProps>`
  box-sizing: border-box;
  min-height: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;
  width: 100%;

  ${(props) => {
    const cssProps = [];

    if (props.gutter) {
      cssProps.push(css`
        padding-left: ${props.gutter};
        padding-right: ${props.gutter};
      `);
    } else {
      cssProps.push(css`
        padding-left: .5rem;
        padding-right: .5rem;
      `)
    }

    if (props.xs) {
      cssProps.push(css`
        flex: 0 0 ${props.xs * 100}%;
        max-width: ${props.xs * 100}%;
      `);
    } else {
      cssProps.push(css`
        flex: 0 0 100%;
        max-width: 100%;
      `);
    }

    if (props.sm) {
      cssProps.push(media.breakpoint.up('sm', css`
        flex: 0 0 ${props.sm * 100}%;
        max-width: ${props.sm * 100}%;
      `))
    }

    if (props.md) {
      cssProps.push(media.breakpoint.up('md', css`
        flex: 0 0 ${props.md * 100}%;
        max-width: ${props.md * 100}%;
      `))
    }

    if (props.lg) {
      cssProps.push(media.breakpoint.up('lg', css`
        flex: 0 0 ${props.lg * 100}%;
        max-width: ${props.lg * 100}%;
      `))
    }

    if (props.xl) {
      cssProps.push(media.breakpoint.up('xl', css`
        flex: 0 0 ${props.xl * 100}%;
        max-width: ${props.xl * 100}%;
      `))
    }

    if (props.smOffset) {
      cssProps.push(media.breakpoint.up('sm', css`
        margin-left: ${props.smOffset * 100}%;
      `))
    }

    if (props.mdOffset) {
      cssProps.push(media.breakpoint.up('md', css`
        margin-left: ${props.mdOffset * 100}%;
      `))
    }

    if (props.lgOffset) {
      cssProps.push(media.breakpoint.up('lg', css`
        margin-left: ${props.lgOffset * 100}%;
      `))
    }

    if (props.xlOffset) {
      cssProps.push(media.breakpoint.up('xl', css`
        margin-left: ${props.xlOffset * 100}%;
      `))
    }

    return cssProps;
  }}
`;
