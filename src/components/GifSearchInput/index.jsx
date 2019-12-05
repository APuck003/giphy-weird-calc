import React from 'react'
import {StyledSearch} from "../../styles"
// import {Formik} from "formik"


export const GifSearchInput = props => {
  const {handleChange, searchPhrase, search, handleEmptySearch} = props
  
  return (
      <StyledSearch>
        
        <label>
          Search Term
        </label>
        
        <form onSubmit={e => {
          e.preventDefault();
          !handleEmptySearch && search();
        }}>
          <input type="text" value={searchPhrase} onChange={handleChange} />
        </form>
      </StyledSearch>
  )
}
