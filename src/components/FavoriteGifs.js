import React from 'react'
import styled from "styled-components"
import {DefaultFavoriteGifs} from "./DefaultFavoriteGifs"

const StyledFavorites = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 90px;
`

export const FavoriteGifs = props => {
  const defaultGifs = [0, 1, 2, 3, 4]
  
  return (
      <StyledFavorites>
        {defaultGifs.map(i => {
          return <DefaultFavoriteGifs key={i} />
        })}
      </StyledFavorites>
  )
}
