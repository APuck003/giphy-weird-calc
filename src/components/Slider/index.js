import React from 'react'
import styled from "styled-components"

const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`

const StyledSlider = styled.input`
  width: 100%;
  border: 0;
  font-size: 100%;
  align-self: center;
`


export const Slider = props => {
  const {weirdnessCount} = props
  return (
      
      <StyledSliderContainer>
        <StyledSlider
            type="range"
            min={0}
            max={10}
            defaultValue={0}
        />
        
        <p>Weirdness: {weirdnessCount}</p>
      </StyledSliderContainer>
      
  )
}
