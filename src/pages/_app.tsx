import {NextPage} from 'next';
import {DefaultSeo} from 'next-seo';
import {AppProps} from 'next/app';
import {ReactElement, ReactNode} from 'react';
import SEO from '../lib/next-seo.config';
import {GlobalStyle} from '../theme/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({Component, pageProps}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
