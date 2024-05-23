import React, { useState } from 'react';
import * as Styled from './StyledComponents';

import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react"


const StarRating = ({ onChangeRating, isReadonly, ratingValue }) => {
  const [hovered, setHovered] = useState(null);
  const [rating, setRating] = useState(ratingValue ? ratingValue : 0);
  const theme = useContext(ThemeContext);

  const handleMouseOver = (index) => {
    if (isReadonly) return
    setHovered(index);
  };

  const handleMouseOut = () => {
    if (isReadonly) return
    setHovered(null);
  };

  const handleClick = (index) => {
    if (isReadonly) return

    setRating(index);
    onChangeRating(index)
  };

  return (
    <Styled.StarsWrapper>
      <Styled.RateThisResponseText isLightTheme={theme}>Rate this Response</Styled.RateThisResponseText>
      <Styled.StarContainer>
        {[1, 2, 3, 4, 5].map((star) => (
          <Styled.Star
            key={star}
            isFilled={star <= (hovered || rating)}
            onMouseOver={() => handleMouseOver(star)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(star)}
            isReadonly={isReadonly}
            isLightTheme={theme}
          >
            ★
          </Styled.Star>
        ))}
      </Styled.StarContainer>

    </Styled.StarsWrapper>
  );
};

export default StarRating;
