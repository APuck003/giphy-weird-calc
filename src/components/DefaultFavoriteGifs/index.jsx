import React from 'react'
import styled from "styled-components"
import {StyledGifResult} from "../../styles"

// const StyledFavoriteGif = styled(StyledGifResult)`
//   width: 225px;
//   height: 200px;
//   margin: 1rem 0;
// `

// noinspection JSUnresolvedFunction
const StyledFavoriteDefault = styled(StyledGifResult)`
  width: 225px;
  height: 200px;
  margin: 1rem 0;
`

export const DefaultFavoriteGifs = () => {
  return (
        <StyledFavoriteDefault>
          <span role="img" aria-label="default">Nothing Yet</span>
        </StyledFavoriteDefault>
  )
}
