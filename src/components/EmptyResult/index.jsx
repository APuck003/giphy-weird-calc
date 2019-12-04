import React from 'react'
import {ResultError} from "../ResultError"
import DefaultGifResult from "../../containers/default-gif-result"

export const EmptyResult = props => {
  const {handleError} = props
  
  return (
      <>
        {handleError ? <ResultError/> : <DefaultGifResult/>}
      </>
  )
}
