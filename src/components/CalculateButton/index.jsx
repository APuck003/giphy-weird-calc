import React from 'react'
import {withRouter} from "react-router-dom"
import styled from "styled-components"
import {StyledButton} from "../../styles"

const StyledCalculateButton = styled(StyledButton)`
  padding: 0.8rem;
  width: 375px;
  font-size: large;
`

export const CalculateButton = props => {
  const {isFavoritesRemaining} = props

  return (
      <StyledCalculateButton
          onClick={() => {
            props.history.push("/results");
          }}
          disabled={!isFavoritesRemaining}
      >
      
        <span>CALCULATE MY WEIRDNESS SCORE</span>
      </StyledCalculateButton>
  )
}

export default withRouter(CalculateButton)
