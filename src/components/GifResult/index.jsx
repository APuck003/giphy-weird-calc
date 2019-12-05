import React from 'react'
import {Image} from "../Image"
import {StyledGifResult} from "../../styles"

export const GifResult = props => {
  const {title, resultURL} = props
  
  return (
      <StyledGifResult>
        <h5>{title}</h5>
        <Image url={resultURL} />
      </StyledGifResult>
      
  )
  
}
