import React from 'react'

export const DislikeButton = props => {
  const {dislike, phrase} = props
  
  return (
      <button onClick={() => dislike(phrase)} >
        <span role="img" aria-label="dislike">
          👎🏻
        </span>
      </button>
  )
  
}
