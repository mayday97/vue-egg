/*
 * @Author: xiaoyu
 * @Date: 2020-10-19 09:46:57
 * @LastEditTime: 2020-10-21 17:02:11
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "@/pages/home";
import Login from "@/pages/login";
import noFound from "@/pages/404";
export default function router() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={noFound}></Route>
      </Switch>
    </Router>
  );
}
