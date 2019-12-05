import React from 'react'
import {StyledGifSection, StyledGifError, StyledDefaultErrorSpan} from "../../styles"


export const ResultError = () => {
  return (
      <StyledGifSection>
        <StyledGifError>
          <StyledDefaultErrorSpan aria-label="result-error">
            Error Finding Gif
          </StyledDefaultErrorSpan>
        </StyledGifError>
      </StyledGifSection>
  )
}
