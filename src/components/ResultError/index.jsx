import React from 'react'
import styled from "styled-components"

const StyledGifSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`

const StyledGifError = styled.div`
  height: 225px;
  width: 300px;
  border: 1px solid blue;
  border-radius: 2px;
  background-color: red;
  color: white;;
`

const StyledDefaultErrorSpan = styled.span`
  text-align: center;
  margin: 0;
`

export const ResultError = () => {
  return (
      <StyledGifSection>
        <StyledGifError>
          <StyledDefaultErrorSpan>
            Error Finding Gif
          </StyledDefaultErrorSpan>
        </StyledGifError>
      </StyledGifSection>
  )
}
