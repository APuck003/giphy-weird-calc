import React from 'react'
import styled from "styled-components"
import {StyledButton} from "../styles"

const StyledCalculateWrapper = styled.div`
  text-align: center;
  padding-top: 6rem;
`
const StyledCalculateButton = styled(StyledButton)`
  padding: 0.8rem;
  width: 375px;
  font-size: large;
`

export const CalculateWeirdness = props => {
  return (
      <StyledCalculateWrapper>
        <StyledCalculateButton>
          <span>CALCULATE MY WEIRDNESS SCORE</span>
        </StyledCalculateButton>
        <p style={{fontWeight: '700'}}>You must <em>Like</em> 5 more GIFs to calculate your score</p>
      </StyledCalculateWrapper>
  )
}
