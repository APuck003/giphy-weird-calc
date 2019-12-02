import React from 'react'
import {StyledText} from '../styles'


export const Instructions = props => {
  return (
      <StyledText>
        <p>
          Find out how weird you are by selecting the GIFs that make you laugh.
          We’ll show you the least weird ones to start, but you can move the
          slider to make them weirder.
        </p>
        
        <br/>
        
        <p>
          When you find a GIF you like, press the <em>Like</em> button. Once you
          like 5 GIFs, we’ll show you how weird you are.
        </p>
      </StyledText>
  )
}
