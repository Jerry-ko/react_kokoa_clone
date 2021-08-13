import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Friends from "./Friends";
import Chatting from "./Chatting";
import TabMenu from "./TabMenu";

// eslint-disable-next-line
export default () => {
  return (
    <Router>
      <TabMenu></TabMenu>
      <Switch>
        <Route exact path="/">
          <Friends></Friends>
        </Route>
        <Route path="/friends" component={Friends}></Route>
        <Route path="/chatting" component={Chatting}></Route>

        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};
