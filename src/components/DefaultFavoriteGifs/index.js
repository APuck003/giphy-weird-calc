import React from 'react'
import styled from "styled-components"
// import {StyledGifResult} from "../styles"
// import {StyledGifResult} from "../styles"

// const StyledFavoriteGif = styled(StyledGifResult)`
//   width: 225px;
//   height: 200px;
//   margin: 1rem 0;
// `

const StyledFavoriteDefault = styled.div`
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
