import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import {MainRoute} from "./MainRoute"
import {WeirdnessScoreRoute} from "./WeirdnessScoreRoute"

export const App = props => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MainRoute} />
        <Route path="/results" exact component={WeirdnessScoreRoute} />
      </Router>
    </div>
  );
}
