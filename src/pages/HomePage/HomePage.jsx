import React, { useState } from 'react';
import { AuthNav } from 'components/AuthNavigate/AuthNavigate';
import FeatureList from '../../components/FeatureList/FeatureList';
import Reviews from '../../components/Reviews/Reviews';

export const HomePage = () => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      <AuthNav />
      <h1>home</h1>
      <FeatureList />
      <button onClick={toggleReviews}>Toggle Reviews</button>
      {showReviews && <Reviews />}
    </div>
  );
};

export default HomePage;
