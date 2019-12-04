import React from 'react'
import {StyledSearchWrapper} from '../../styles'
import {GifSearchInput} from "../GifSearchInput"
import {Instructions} from "../Instructions"

export const SearchWrapper = () => {
  return (
        <StyledSearchWrapper>
          <Instructions/>
          <GifSearchInput/>
        </StyledSearchWrapper>
  )
}
