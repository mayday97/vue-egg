import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "@y/pages/home";
import Login from "../pages/login";
export default function router() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}
