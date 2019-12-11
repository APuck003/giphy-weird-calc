import React from 'react'
import {StyledSearch, StyledButton, StyledInput, StyledForm} from "../../styles"


export const GifSearchInput = props => {
  const {handleChange, searchPhrase, search, handleEmptySearch} = props
  
  return (
      <StyledSearch>
        
        <label>
          Search Term
        </label>
        
        <StyledForm onSubmit={e => {
          e.preventDefault();
          !handleEmptySearch && search();
        }}>
          <StyledInput type="text" value={searchPhrase} onChange={handleChange} />
          
          <StyledButton type="submit" disabled={handleEmptySearch}>
            SEARCH
          </StyledButton>
          
        </StyledForm>
      </StyledSearch>
  )
}
