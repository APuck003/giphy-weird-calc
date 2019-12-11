import React from 'react'

export const CurrentCalculation = props => {
  const {favoritesRemaining} = props
  const favsLeft = favoritesRemaining > 0
  
  return (
      <>
        {favsLeft ? (
            <p style={{fontWeight: '700'}}>
              You must <em>Like</em> `${favoritesRemaining}` more GIFs to calculate your score
            </p>
          ) : (
              <p style={{fontWeight: '700'}}>
                Calculate your Score
              </p>
          )}
      </>
  )
}
