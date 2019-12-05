import React from 'react';
import {FavoritesWrapper} from "../FavoritesWrapper"
import {Header} from '../Header'
import {StyledMain} from "../../styles"
import {ResultsWrapper} from "../ResultsWrapper"
import {SearchWrapper} from "../SearchWrapper"
import {Wrapper} from "../Wrapper"


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
