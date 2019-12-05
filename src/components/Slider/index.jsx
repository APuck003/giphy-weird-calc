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
  const {weirdnessLevel, onChange} = props
  return (
      
      <StyledSliderContainer>
        <StyledSlider
            type="range"
            min={0}
            max={10}
            defaultValue={0}
            onChange={onChange}
        />
        
        <p>Weirdness: {weirdnessLevel}</p>
      </StyledSliderContainer>
      
  )
}
