import React from 'react'
import {withRouter} from "react-router-dom"
import {StyledCalculateButton} from "../../styles"


export const CalculateButton = props => {
  const {isFavoritesRemaining} = props

  return (
      <StyledCalculateButton
          onClick={() => {
            props.history.push("/results");
          }}
          disabled={isFavoritesRemaining}
      >
      
        <span>CALCULATE MY WEIRDNESS SCORE</span>
      </StyledCalculateButton>
  )
}

export default withRouter(CalculateButton)
