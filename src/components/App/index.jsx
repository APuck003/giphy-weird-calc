import React from 'react';
// noinspection ES6CheckImport
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import {MainRoute} from ".././MainRoute"
import {WeirdnessScoreRoute} from "../WeirdnessScoreRoute"

export const App = props => {
  const {isFavoritesRemaining} = props
  return (
      // <div className="App">
      <Router>
        <Route path="/" exact component={MainRoute} />
        {/*<Route path="/results" component={WeirdnessScoreRoute}/>*/}
        <Route path="/results" exact render={() => isFavoritesRemaining ?
            <Redirect to="/" /> : <WeirdnessScoreRoute />}
        />
      </Router>
      // </div>
  );
}
