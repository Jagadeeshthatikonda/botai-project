import React, { useState } from 'react';
import * as Styled from './StyledComponents';



const StarRating = ({ onChangeRating }) => {
  const [hovered, setHovered] = useState(null);
  const [rating, setRating] = useState(0);

  const handleMouseOver = (index) => {
    setHovered(index);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  const handleClick = (index) => {
    setRating(index);
    onChangeRating(index)
  };

  return (
    <Styled.StarsWrapper>
      <Styled.RateThisResponseText>Rate this Response</Styled.RateThisResponseText>
      <Styled.StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <Styled.Star
            key={star}
            isFilled={star <= (hovered || rating)}
            onMouseOver={() => handleMouseOver(star)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(star)}
          >
            ★
          </Styled.Star>
        ))}
      </Styled.StarContainer>

    </Styled.StarsWrapper>
  );
};

export default StarRating;
