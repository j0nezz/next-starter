import React from 'react';
import { NextPage } from 'next';
import {Background} from '../components/ui/background';
import {Title} from '../components/ui/title';

const Home: NextPage = () => {
  return (
    <Background>
      <Title>Hello Next.js</Title>
    </Background>
  );
};

export default Home;
