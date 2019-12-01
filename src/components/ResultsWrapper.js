import React from 'react'
import styled from "styled-components"
import {GifResult} from "./GifResult"
import {LateralWrapper} from "./LateralWrapper"
import {LikeButton} from "./LikeButton"
import {ResultsTitle} from "./ResultsTitle"

const StyledResultsWrapper = styled.div`
  background-color: lightgrey;
  width: 60%;
  padding: 2rem;
  border-style: hidden dotted dotted hidden;
  border-width: 1px;
  height: 470px;
  //height: -webkit-fill-available;
`


export const ResultsWrapper = () => {
  return (
      <StyledResultsWrapper>
        
        <ResultsTitle title="Your Result" />
        
          <GifResult/>
        
          <LikeButton/>
        
      </StyledResultsWrapper>
  )
  
}
