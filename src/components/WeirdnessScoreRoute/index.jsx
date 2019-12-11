import React from 'react'
import {Wrapper} from '../Wrapper'
import {Header} from '../Header'
import TotalWeirdnessScore from '../../containers/total-weirdness-score'

export const WeirdnessScoreRoute = () => {
  return (
      <Wrapper>
        <Header />
        Weirdness Score Page
        <TotalWeirdnessScore />
        
      </Wrapper>
  )
}

export default WeirdnessScoreRoute
