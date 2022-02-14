import React from "react";
import { Switch, Redirect, Route, BrowserRouter  } from "react-router-dom";
import Home from "./src/pages/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
