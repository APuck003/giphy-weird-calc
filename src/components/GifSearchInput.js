import React from 'react'
import {StyledSearch, StyledForm, StyledInput, StyledButton} from "../styles"
// import searchPhrase from "../containers/gif-search-input-container"

export const GifSearchInput = props => {
  const {handleChange, searchTerm} = props
  return (
      <StyledSearch>
        <p>Search Term</p>
    
        <StyledForm>
      
          <StyledInput
              type="text"
              placeholder="Hamburger"
              onChange={handleChange}
              value={searchTerm}
          />
      
          <StyledButton>Search</StyledButton>
    
        </StyledForm>
      </StyledSearch>
  )
}
