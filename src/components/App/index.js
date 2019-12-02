import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import {isFavoritesRemaining} from "../reducers/favorites-data"
import {MainRoute} from "./MainRoute"
import {WeirdnessScoreRoute} from "./WeirdnessScoreRoute"

export const App = props => {
  console.log(props)
  return (
      <div className="App">
        <Router>
          <Route path="/" exact component={MainRoute} />
          <Route path="/results" exact render={() => isFavoritesRemaining ?
              <Redirect to="/" /> : <WeirdnessScoreRoute />}
          />
        </Router>
      </div>
  );
}
