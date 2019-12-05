import React from "react"
import {StyledWrapper} from '../../styles'

export const Wrapper = props => {
  return (
      <StyledWrapper>
        {props.children}
      </StyledWrapper>
  )
}
