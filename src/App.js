import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";
import StateHook from "./StateHook";
import UserRefHook from "./UseRefHook";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StateHook title="UseState & UseEffect Hook" />
        </Route>
        <Route path="/ref">
          <UserRefHook title="UseRef Hook" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
