import React from 'react'
import styled from "styled-components"
import {CalculateWrapper} from "../CalculateWrapper"
import {FavoriteGifs} from "../FavoriteGifs"
import {Title} from "../Title"

const StyledFavoritesWrapper = styled.div`
  display: flex;
  flex-direction: inherit;
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
`

export const FavoritesWrapper = props => {
  return (
        <StyledFavoritesWrapper>
          <Title title="Your Liked Gifs"/>
          <FavoriteGifs />
          <CalculateWrapper />
        </StyledFavoritesWrapper>
  )
}
