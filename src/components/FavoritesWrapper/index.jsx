import React from 'react'
import {StyledFavoritesWrapper} from '../../styles'
import {CalculateWrapper} from "../CalculateWrapper"
import {FavoriteGifs} from "../FavoriteGifs"
import {Title} from "../Title"

export const FavoritesWrapper = () => {
  return (
        <StyledFavoritesWrapper>
          <Title title="Your Liked Gifs"/>
          <FavoriteGifs />
          <CalculateWrapper />
        </StyledFavoritesWrapper>
  )
}
