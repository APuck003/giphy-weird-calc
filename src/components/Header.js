import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgb(50, 54, 57);
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  
  h1 {
    padding-left: 2rem;
    font-size: 24px;
  }
`

export const Header = () => {
  return (
      <StyledHeader>
        <h1>Weirdness Calculator</h1>
      </StyledHeader>
  )
}

