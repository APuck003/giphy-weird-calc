import React from 'react'
import EmptyResult from '../../containers/empty-result'
import GifResult from '../../containers/gif-result'

export const GifSearchResult = props => {
  const {isResultEmpty} = props
  
  return (
      <>
        {isResultEmpty ? <EmptyResult /> : <GifResult />}
      </>
  )
}
