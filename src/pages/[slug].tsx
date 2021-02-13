import React from 'react';
import {useRouter} from 'next/router';

const Slug: React.FC = () => {
  const router = useRouter();
  const {slug} = router.query;
  return (
    <div>
      <h1>This page ready query params: {slug}</h1>
    </div>
  );
};

export default Slug;
