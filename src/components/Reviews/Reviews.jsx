import React from 'react';
import { useState } from 'react';
import {
  ReviewsContainer,
  SectionTitle,
  AuthorName,
  ReviewContent,
} from './Reviews.styled';

import arrowRight from './arrow-r.png';
import arrowLeft from './arrow-l.png';

function Reviews({ reviews }) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const showPreviousReview = () => {
    setCurrentReviewIndex(
      (currentReviewIndex - 1 + reviews.length) % reviews.length
    );
  };

  const showNextReview = () => {
    setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
  };

  return (
    <div>
      <SectionTitle>Reviews</SectionTitle>

      <ReviewsContainer>
        <ReviewContent>
          <img
            src={reviews[currentReviewIndex].authorAvatar}
            alt="user avatar"
          ></img>
          <div>
            <AuthorName>{reviews[currentReviewIndex].author}</AuthorName>
            <img
              src={reviews[currentReviewIndex].rate}
              alt="review star rate"
            ></img>
          </div>
          <p>{reviews[currentReviewIndex].review}</p>
        </ReviewContent>

        <button onClick={showPreviousReview}>
          <img src={arrowLeft} alt="arrow previous"></img>
        </button>
        <button onClick={showNextReview}>
          <img src={arrowRight} alt="arrow next"></img>
        </button>
      </ReviewsContainer>
    </div>
  );
}

export default Reviews;
