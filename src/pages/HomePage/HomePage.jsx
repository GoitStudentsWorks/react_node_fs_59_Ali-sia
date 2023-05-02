import React from 'react';
import { AuthNav } from 'components/AuthNavigate/AuthNavigate';
import FeatureList from '../../components/FeatureList/FeatureList';
import Reviews from '../../components/Reviews/Reviews';

import { Container } from './HomePage.styled';

import authorImg from './authorImg.png';
import authorImg2 from './authorImg2.png';
import rateImg from './rate.png';

const reviews = [
  {
    review:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
    author: 'Olena Doe ',
    authorAvatar: authorImg,
    rate: rateImg,
  },
  {
    review:
      'GooseTrack is incredibly helpful, the sidebar with account management, calendar, and filter options make navigation seamless. Great for staying organized.',
    author: 'Alexander Hubbard ',
    authorAvatar: authorImg2,
    rate: rateImg,
  },
  {
    review: 'Швидка доставка та добре запакований товар. Дякую',
    author: 'Петро',
    authorAvatar: authorImg,
    rate: rateImg,
  },
];

export const HomePage = () => {
  return (
    <div>
      <AuthNav />
      <Container>
        <FeatureList />

        <Reviews reviews={reviews} />
      </Container>
    </div>
  );
};

export default HomePage;
