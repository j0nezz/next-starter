import {ThemeProvider} from 'styled-components';
import React from 'react';
import {AppProps} from 'next/app';
import {MainTheme} from '../theme/theme';
import {GlobalStyle} from '../theme/global-styles';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
