import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  width: 60%;
`

export const Wrapper = props => {
  return (
      <StyledWrapper>
        {props.children}
      </StyledWrapper>
  )
}
