import {AppProps} from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from '../theme/global-styles';
import {MainTheme} from '../theme/theme';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
