import AppliedRoute from "./components/AppliedRoute";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Loginhome from "./containers/LoginHome";
//import Chathome from "./containers/Chathome";
//import Chathome from "./components/chats/ChatContainer";
import layouthome from "./components/Layout";
export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute
      path="/chathome"
      exact
      component={layouthome}
      props={childProps}
    />
    <AppliedRoute
      path="/loginhome"
      exact
      component={Loginhome}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
