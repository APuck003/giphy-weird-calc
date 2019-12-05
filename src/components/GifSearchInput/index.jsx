import React from 'react'
import {StyledSearch, StyledForm, StyledInput, StyledButton} from "../../styles"
import {Formik} from "formik"

export const GifSearchInput = props => {
  const {handleChange, searchPhrase, search, handleEmptySearch} = props
  
  return (
      <StyledSearch className="searchThunk-input">
        <label htmlFor="searchThunk-input">
          Search Term
        </label>
        
        <Formik
            initialValues={(handleChange, searchPhrase, search, handleEmptySearch)}
            validate={props => {
              console.log(props)
            }}
            onSubmit={props => {
              console.log(props)
            }}
            render={({
              handleChange,
              searchPhrase,
              search
            }) => (
                <StyledForm onSubmit={e => {
                  e.preventDefault();
                  !handleEmptySearch && search();
                }}>
      
      
                  <StyledInput
                      type="text"
                      placeholder="Hamburger"
                      onChange={handleChange}
                      value={searchPhrase}
                  />
      
                  <StyledButton type="submitThunk">Search</StyledButton>
    
                </StyledForm>
            )}
        >
        
        

        </Formik>
      </StyledSearch>
  )
}
