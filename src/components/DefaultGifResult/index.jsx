import React from 'react'
import styled from "styled-components"

const StyledGifSection = styled.div`
  @keyframes loading {
    0%,
    100% {
      font-size: 5rem;
      transform-origin: center;
    }
    50% {
      font-size: 8rem;
      transform-origin: center;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`

const StyledGifResult = styled.div`
  height: 225px;
  width: 300px;
  border: 1px solid blue;
  border-radius: 2px;
`

const StyledDefaultSpan = styled.span`
  text-align: center;
  margin: 0;
`


export const DefaultGifResult = props => {
  const {handleLoading} = props
  
  return (
      <StyledGifSection>
        <h5>{handleLoading ? "Finding Gif" : "Enter Phrase to Search"}</h5>
        
        <StyledGifResult>
          <StyledDefaultSpan role="img" aria-label="default-result">
            Default Gif Result
          </StyledDefaultSpan>
        </StyledGifResult>
      </StyledGifSection>
  )
}
