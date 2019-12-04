import React from "react"
import styled from "styled-components"

const StyledFavoriteSelection = styled.div`
  width: 225px;
  height: 200px;
  margin: 1rem 0;
`
export const SelectedFavoriteGif = props => {
  const {gif} = props
  const {phrase, url, title} = gif

  return (
      <StyledFavoriteSelection>
        {gif}
      </StyledFavoriteSelection>
  )
}
