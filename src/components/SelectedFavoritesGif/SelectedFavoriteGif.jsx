import React from "react"
import {StyledFavoriteSelection} from '../../styles'

export const SelectedFavoriteGif = props => {
  const {gif} = props
  const {phrase, url, title} = gif

  return (
      <StyledFavoriteSelection>
        {gif}
      </StyledFavoriteSelection>
  )
}
