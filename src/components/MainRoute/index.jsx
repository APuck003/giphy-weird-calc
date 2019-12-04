import React from 'react';
import {FavoritesWrapper} from "../FavoritesWrapper"
import {Header} from '../Header'
import styled from "styled-components"
import {ResultsWrapper} from "../ResultsWrapper"
import {SearchWrapper} from "../SearchWrapper"
import {Wrapper} from "../Wrapper"


const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
`

export const MainRoute = () => {
  return (
      <div>
        <Header />
        
        <StyledMain>
          <Wrapper>
            <SearchWrapper />
            <ResultsWrapper />
          </Wrapper>
          
          <Wrapper>
            <FavoritesWrapper/>
          </Wrapper>
        </StyledMain>
      
      </div>
  );
}
