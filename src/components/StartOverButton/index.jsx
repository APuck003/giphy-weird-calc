import React from 'react'
import {withRouter} from 'react-router-dom'

export const StartOverButton = props => {
  const {startOver} = props;
  
  return (
      <button
          onclick={() => {
            startOver();
            props.history.push('/')
          }}>
        START OVER
      </button>
  )
}

export default withRouter(StartOverButton)
