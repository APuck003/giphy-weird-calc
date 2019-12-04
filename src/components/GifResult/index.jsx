import React from 'react'
import {Image} from "../Image"

export const GifResult = props => {
  const {title, resultURL} = props
  
  return (
      <>
        <h5>{title}</h5>
        <Image url={resultURL} />
      </>
  )
  
}
