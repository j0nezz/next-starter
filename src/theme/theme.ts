import {createGlobalStyle, ThemeProviderProps} from 'styled-components';

// Colors Palette https://colorhunt.co/
export enum __COLORS {
  PRIMARY = '#243A73',
  SECONDARY = '#7C3E66',
  LIGHT = '#A5BECC',
  BG = '#F2EBE9'
}

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
    font-family: 'Open Sans', sans-serif;
  }
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { 
    margin: 0;
  }
  html,body {
    font-size: 14px;
    @media only screen and (min-width: 1024px) {
      font-size: 16px;
    }
    margin: 0;
    height: 100%;
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
    color: ${__COLORS.PRIMARY};
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  ol, ul {
    list-style: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  #__next{
    height: 100%;
    display: flex;
    flex-direction: column; 
  }
`;
