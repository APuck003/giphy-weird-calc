import React from 'react'
import {StyledCalculateWrapper} from "../../styles"
import {CalculateButton} from '../CalculateButton'


export const CalculateWrapper = props => {
  const {favoritesRemaining} = props
  
  return (
      <StyledCalculateWrapper>
        
        <CalculateButton/>
        
        <p style={{fontWeight: '700'}}>
          You must <em>Like</em> `${favoritesRemaining}` more GIFs to calculate your score
        </p>
      </StyledCalculateWrapper>
  )
}

