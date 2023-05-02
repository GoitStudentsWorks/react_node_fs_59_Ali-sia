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
    review: "Дуже задоволений сервісом! Обов'язково скористаюся ще раз.",
    author: 'Іван',
    authorAvatar: authorImg2,
    rate: rateImg,
  },
  {
    review: 'Якісний продукт за розумною ціною. Рекомендую.',
    author: 'Олена',
    authorAvatar: authorImg,
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
