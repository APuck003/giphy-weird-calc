import React from 'react'
import styled from "styled-components"
import {CalculateButton} from '../CalculateButton'

const StyledCalculateWrapper = styled.div`
  text-align: center;
  padding-top: 6rem;
`

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

