import React from 'react'

export const TotalWeirdnessScore = props => {
  const {score} = props
  
  return <h1>
    {`You scored a ${score} out of 10 on the weirdness scale!`}
  </h1>
}
