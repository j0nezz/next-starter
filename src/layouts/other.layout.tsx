import {makeTheme} from 'axelra-react-utilities';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {ContentWrapper} from '../components/ui/ContentWrapper';

type Props = {
  children?: React.ReactNode;
};

const theme = makeTheme({
  spacing: 25,
  fontSizes: {base: {size: '2rem', lineHeight: '3rem'}}
});

const OtherLayout = ({children}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper>{children}</ContentWrapper>
    </ThemeProvider>
  );
};

export default OtherLayout;
