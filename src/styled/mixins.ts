// import { Spacer } from '../Spacer';
import { css, FlattenSimpleInterpolation } from 'styled-components';

interface MarginProps {
  m?: string;
  mx?: string;
  my?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

interface PaddingProps {
  p?: string;
  px?: string;
  py?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
}

const extractMarginStyles = (props: MarginProps): FlattenSimpleInterpolation[] => {
  const cssProps = [];
  if (props.m) {
    cssProps.push(css`margin: ${props.m};`);
  }
  if (props.mb) {
    cssProps.push(css`margin-left: ${props.mb};`);
  }
  if (props.ml) {
    cssProps.push(css`margin-left: ${props.ml};`);
  }
  if (props.mr) {
    cssProps.push(css`margin-left: ${props.mr};`);
  }
  if (props.mt) {
    cssProps.push(css`margin-left: ${props.mt};`);
  }
  if (props.mx) {
    cssProps.push(css`margin-left: ${props.mx};`);
  }
  if (props.my) {
    cssProps.push(css`margin-left: ${props.my};`);
  }
  return cssProps;
};

const extractPaddingStyles = (props: PaddingProps) => {
  const cssProps = [];
  if (props.p) {
    cssProps.push(css`padding: ${props.p};`);
  }
  if (props.pb) {
    cssProps.push(css`padding-bottom: ${props.pb};`);
  }
  if (props.pl) {
    cssProps.push(css`padding-left: ${props.pl};`);
  }
  if (props.pr) {
    cssProps.push(css`padding-right: ${props.pr};`);
  }
  if (props.pt) {
    cssProps.push(css`padding-top: ${props.pt};`);
  }
  if (props.px) {
    cssProps.push(css`padding-left: ${props.px};padding-right: ${props.px};`);
  }
  if (props.py) {
    cssProps.push(css`padding-bottom: ${props.py};padding-top: ${props.py};`);
  }
  return cssProps;
};

export {
  extractMarginStyles,
  extractPaddingStyles,
  MarginProps,
  PaddingProps,
};
