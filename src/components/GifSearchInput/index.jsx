import React from 'react'
import {StyledSearch, StyledForm, StyledInput, StyledButton} from "../../styles"

export const GifSearchInput = props => {
  const {handleChange, searchPhrase, search, handleEmptySearch} = props
  
  return (
      <StyledSearch>
        <p>Search Term</p>
        
        <StyledForm onSubmit={e => {
          e.preventDefault();
          !handleEmptySearch && search();
        }}>
        
        
        
        {/*<StyledForm>*/}
          
          <StyledInput
              type="text"
              placeholder="Hamburger"
              onChange={handleChange}
              value={searchPhrase}
          />
          
          <StyledButton type="submit">Search</StyledButton>
        
        {/*</StyledForm>*/}
        </StyledForm>
      </StyledSearch>
  )
}
