import React from 'react'
import {StyledSearchWrapper} from '../../styles'
import GifSearchInput from "../../containers/gif-search-input-container"
import {Instructions} from "../Instructions"

export const SearchWrapper = () => {
  return (
        <StyledSearchWrapper>
          <Instructions/>
          <GifSearchInput/>
        </StyledSearchWrapper>
  )
}
