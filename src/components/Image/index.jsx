import React from "react"
// import styled from "styled-components"
import {StyledGifResult} from "../../styles"

export const Image = props => {
  const {url} = props
  
  return (
      <StyledGifResult src={url} alt="Image" />
  )
  
}
