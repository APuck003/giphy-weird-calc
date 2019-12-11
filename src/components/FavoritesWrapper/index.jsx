import React from 'react'
import {StyledFavoritesWrapper} from '../../styles'
import CurrentCalculation from "../../containers/current-calculation"
import FavoriteGifs from "../../containers/favorites"
import {Title} from "../Title"

export const FavoritesWrapper = () => {
  return (
        <StyledFavoritesWrapper>
          <Title title="Your Liked Gifs"/>
          <FavoriteGifs />
          <CurrentCalculation />
        </StyledFavoritesWrapper>
  )
}
