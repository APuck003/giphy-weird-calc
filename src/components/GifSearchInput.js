import React from 'react'
import {StyledSearch, StyledForm, StyledInput, StyledButton} from "../styles"


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



export default GifSearchInput


// import React from 'react'
// import {StyledSearch, StyledForm, StyledInput, StyledButton} from "../styles"
// import GifSearchInput from "../containers/gif-search-input"
//
//
// class GifSearchInput = props => {
//   const {handleChange, searchTerm} = props
//   return (
//       <StyledSearch>
//         <p>Search Term</p>
//
//         <StyledForm>
//
//           <StyledInput
//               type="text"
//               placeholder="Hamburger"
//               onChange={handleChange}
//               value={searchTerm}
//           />
//
//           <StyledButton>Search</StyledButton>
//
//         </StyledForm>
//       </StyledSearch>
//   )
// }
