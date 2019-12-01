import React from 'react';
import {Header} from './Header'
import {ResultsWrapper} from "./ResultsWrapper"
import {SearchWrapper} from "./SearchWrapper"
import {Wrapper} from "./Wrapper"

export const App = props => {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <SearchWrapper/>
        <ResultsWrapper/>
      </Wrapper>
    </div>
  );
}
