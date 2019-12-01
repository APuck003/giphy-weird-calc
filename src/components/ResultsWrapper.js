import React from 'react'
import styled from "styled-components"
import {GifResult} from "./GifResult"
import {LikeButton} from "./LikeButton"
import {Title} from "./Title"
import {Slider} from "./Slider"

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
        <GifResult />
        <LikeButton />
        <Slider />
      </StyledResultsWrapper>
  )
  
}
