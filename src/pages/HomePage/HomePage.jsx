import React from 'react';
import { AuthNav } from 'components/AuthNavigate/AuthNavigate';
import FeatureList from '../../components/FeatureList/FeatureList';
// import Reviews from '../../components/Reviews/Reviews';

import { Container } from './HomePage.styled';

export const HomePage = () => {
  return (
    <div>
      <AuthNav />
      <Container>
        <FeatureList />

        {/* <Reviews /> */}
      </Container>
    </div>
  );
};

export default HomePage;
