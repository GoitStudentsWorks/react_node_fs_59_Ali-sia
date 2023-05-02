import React from 'react';
import { useState } from 'react';
import { ReviewsContainer } from './Reviews.styled';

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
      <h2>Reviews</h2>

      <ReviewsContainer>
        <div>
          <p>{reviews[currentReviewIndex].review}</p>
          <p>{reviews[currentReviewIndex].author}</p>
          <img
            src={reviews[currentReviewIndex].authorAvatar}
            alt="user avatar"
          ></img>
          <img
            src={reviews[currentReviewIndex].rate}
            alt="review star rate"
          ></img>
        </div>

        <button onClick={showPreviousReview}>Previous</button>
        <button onClick={showNextReview}>Next</button>
      </ReviewsContainer>
    </div>
  );
}

export default Reviews;
