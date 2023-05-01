import React, { useState } from 'react';
import { Carousel } from './Caorusel';

function Reviews() {
  const toggleReviews = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <h2>Reviews</h2>
      <button onClick={toggleReviews}>Show/Hide Comments</button>
      {showComments && (
        <div>
          <p>Comment 1</p>
          <p>Comment 2</p>
          <p>Comment 3</p>
        </div>
      )}
    </div>
  );
}

export default Reviews;
