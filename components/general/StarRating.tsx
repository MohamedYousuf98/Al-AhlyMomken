'use client';

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center-align the content */
  margin-top: 2rem;

  .star {
    color: #FDB615;
    margin-right: 5px;
  }

  .star-rating {
    font-size: 18px;
    margin-left: 10px;
    color:  #FDB615;
    font-weight: 600;
  }

  .normal-text {
    color: #003830;
  }

  @media (max-width: 768px) {
    .star-rating {
      font-size: 13px;
    }
  }
`;

const StarRating: React.FC = () => {
  return (
    <StarsContainer>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
      </div>
      <span className="star-rating">
        Rated 5/5 - <span className="normal-text">from over 40 reviews</span>
      </span>
    </StarsContainer>
  );
};

export default StarRating;
