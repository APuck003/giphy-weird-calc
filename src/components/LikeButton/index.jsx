import React from "react";
import styled from "styled-components"

const StyledLikeButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledLikeButton = styled.button`
  width: 100px;
  padding: 0.5rem;
  background-color: rgb(50, 54, 57);
  color: #fff;
  border-radius: 5px;
`

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

