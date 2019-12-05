import React from 'react'
import {StyledGifSection, StyledGifResult, StyledDefaultSpan} from '../../styles'


export const DefaultGifResult = props => {
  const {handleLoading} = props
  return (
      <StyledGifSection>
        <h5>{handleLoading ? "Finding Gif" : "Enter Phrase to Search"}</h5>
        
        <StyledGifResult>
          <StyledDefaultSpan>
            Default Gif Result
          </StyledDefaultSpan>
        </StyledGifResult>
      </StyledGifSection>
  )
}
