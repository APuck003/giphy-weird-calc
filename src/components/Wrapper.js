import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-height: 100%;
`

export const Wrapper = props => {
  return (
      <StyledWrapper>
        {props.children}
      </StyledWrapper>
  )
}
