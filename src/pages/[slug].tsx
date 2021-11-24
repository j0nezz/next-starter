import {useRouter} from 'next/router';
import React from 'react';
import {Background} from '../components/ui/background';
import {Title} from '../components/ui/title';

const Slug: React.FC = () => {
  const router = useRouter();
  const {slug} = router.query;
  return (
    <Background>
      <Title>This page ready query params: {slug}</Title>
    </Background>
  );
};

export default Slug;
