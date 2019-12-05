import React from "react"
import {StyledGifResult} from "../../styles"

export const Image = props => {
  const {url} = props
  
  return (
      <StyledGifResult>
        <img src={url} alt="" />
      </StyledGifResult>
  )
}
