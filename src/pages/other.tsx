import {
  MaxWidthContainer,
  ResponsiveSpacer,
  Text
} from 'axelra-react-utilities';
import {NextSeo} from 'next-seo';
import {ReactElement} from 'react';
import styled from 'styled-components';
import {FancyTitle} from '../components/ui/FancyTitle';
import OtherLayout from '../layouts/other.layout';

const Container = styled(MaxWidthContainer)`
  overflow: hidden;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <NextSeo title={'Home'} />
      <ResponsiveSpacer x={4} lg={12} />
      <FancyTitle size={'5xl'} weight={'Bold'} center block>
        Other Layout
      </FancyTitle>
      <Text center block>
        This page uses a layout with larger base font size and much more
        spacing. Also this layout has no footer.
      </Text>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <OtherLayout>{page}</OtherLayout>;
};

export default Home;
