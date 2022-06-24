import {
  H2,
  MaxWidthContainer,
  ResponsiveSpacer,
  Text
} from 'axelra-react-utilities';
import {NextSeo} from 'next-seo';
import Link from 'next/link';
import {ReactElement} from 'react';
import styled from 'styled-components';
import {FancyTitle} from '../components/ui/FancyTitle';
import MainLayout from '../layouts/main.layout';

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
        Hello Next.js
      </FancyTitle>
      <Text center block>
        A starter template for <b>Next.js</b>
      </Text>
      <ResponsiveSpacer x={2} lg={4} />
      <H2 size={'3xl'} center block weight={'Bold'}>
        What&apos;s inside
      </H2>
      <Text block center>
        Styled Components <br />
        Typescript <br />
        Next-Seo <br />
        Axelra-React-Utilities
      </Text>
      <ResponsiveSpacer x={2} lg={4} />
      <H2 size={'3xl'} center block weight={'Bold'}>
        Layouts and Theming
      </H2>
      <Text block center>
        Axelra-React-Utilities can be configured differently using the{' '}
        <a href={'https://nextjs.org/docs/basic-features/layouts'}>
          layout pattern
        </a>
        .<br /> Check out this{' '}
        <Link href={'/other'} passHref>
          <Text weight={'Bold'} as={'a'}>
            Other Page
          </Text>
        </Link>{' '}
        to see it in action
      </Text>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
