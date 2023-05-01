import React, { useState } from 'react';
import { AuthNav } from 'components/AuthNavigate/AuthNavigate';
import FeatureList from '../../components/FeatureList/FeatureList';
import Reviews from '../../components/Reviews/Reviews';

import { Container } from './HomePage.styled';

export const HomePage = () => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      <AuthNav />
      <Container>
        <FeatureList />
        <button onClick={toggleReviews}>Toggle Reviews</button>
        {showReviews && <Reviews />}
      </Container>
    </div>
  );
};

export default HomePage;
