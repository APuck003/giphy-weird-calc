import React from 'react'
import {StyledResultsWrapper} from '../../styles'
import GifSearchResult from "../../containers/search-result"
import LikeButton from "../../containers/like-button"
import {Title} from "../Title"
import Slider from "../../containers/slider"


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
