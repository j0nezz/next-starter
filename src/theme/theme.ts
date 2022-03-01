import {CSSProperties} from 'react';
import {createGlobalStyle, ThemeProviderProps} from 'styled-components';

// Colors Palette https://colorhunt.co/
export enum __COLORS {
  CTA = '#e94560',
  TEXT = '#16213e',
  PRIMARY = '#0f3460',
  BLACK = '#000',
  WHITE = '#fff'
}

export const GUTTER = 15;
export const SPACING = 8;

export enum __GRAY_SCALE {
  _WHITE = '#fff',
  _100 = '#f6f9fc',
  _200 = '#e9ecef',
  _300 = '#dee2e6',
  _400 = '#ced4da',
  _500 = '#adb5bd',
  _600 = '#8898aa',
  _700 = '#525f7f',
  _800 = '#32325d',
  _900 = '#212529',
  _BLACK = '#000'
}

export enum __ALERTS {
  INFO = '#11cdef',
  SUCCESS = '#2ece89',
  WARNING = '#fb6240',
  ERROR = '#f5365c'
}

type Props = {};

export const MainTheme: CSSProperties & Props = {
  fontFamily: 'Open Sans, sans-serif'
};
// You can either import a Google Font: https://fonts.google.com
// Or declare a custom font: https://tinyurl.com/y6omstqa
// eslint-disable-next-line no-unexpected-multiline
export const GlobalStyle = createGlobalStyle<{
  theme: ThemeProviderProps<any>;
}>`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  *, :after, :before {
    box-sizing: border-box;
}
  html {
    font-family: ${(p: ThemeProviderProps<any>) => p.theme.fontFamily};
  }
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { 
    margin: 0;
  }
  html,body {
    margin: 0;
  }
  body {
    line-height: 1.5;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    color: ${__COLORS.TEXT};
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, 
  q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: " ";
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
