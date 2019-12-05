import React from 'react'
import styled from "styled-components"
import GifSearchResult from "../../containers/search-result"
import LikeButton from "../../containers/like-button"
import {Title} from "../Title"
import Slider from "../../containers/slider"


const StyledResultsWrapper = styled.div`
  padding: 3rem;
  border-style: hidden dotted dotted hidden;
  border-width: 1px;
  height: 470px;
`


export const ResultsWrapper = () => {
  return (
      <StyledResultsWrapper>
        <Title title="Your Result" />
        <GifSearchResult />
        <LikeButton />
        <Slider />
      </StyledResultsWrapper>
  )
  
}
