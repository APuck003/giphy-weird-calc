import React from 'react'
import {StyledSearch, StyledForm, StyledInput, StyledButton} from "../styles"


export const GifSearchInput = props => {
  return (
      <StyledSearch>
        <p>Search Term</p>
        
        <StyledForm>
          
          <StyledInput
              type="text"
              placeholder="Hamburger"
          />
          
          <StyledButton>Search</StyledButton>
          
        </StyledForm>
      </StyledSearch>
  )
}
