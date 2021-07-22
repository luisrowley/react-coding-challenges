import React from 'react';
import Discover from './Discover';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginBtn from './Login';

export default function Routes() {
  // Here you'd return an array of routes
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Discover />
        </Route>
        <Route path="/login">
          <LoginBtn />
        </Route>
      </Switch>
    </Router>
  );
}
