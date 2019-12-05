import React from "react";
import {StyledLikeButtonSection, StyledLikeButton} from "../../styles"


export const LikeButton = props => {
  const {handleGifLikes} = props
  
  return (
      <StyledLikeButtonSection>
        
        <StyledLikeButton disabled={!handleGifLikes}>
          <span role="img" aria-label="#">
            👍🏻
          </span>
        </StyledLikeButton>
        
      </StyledLikeButtonSection>
  );
};

