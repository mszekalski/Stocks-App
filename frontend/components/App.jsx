import React from "react";
import { Route, HashRouter, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import SessionFormContainer from "./session_form/session_form_container.js";

const App = () => (
  <div className="app">
    <Modal />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
