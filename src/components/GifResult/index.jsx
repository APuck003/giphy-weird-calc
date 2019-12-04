import React from 'react'
import styled from "styled-components"

const StyledGifSection = styled.div`
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

export const GifResult = props => {
  return (
      <StyledGifSection>
        <StyledGifResult>
          <div>Gif Result</div>
        </StyledGifResult>
      </StyledGifSection>
  )
}
