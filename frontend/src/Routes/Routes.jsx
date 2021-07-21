import React from "react";
import { Switch, Route } from "react-router-dom";
import BusSlection from "../Pages/BusSelection/BusSlection";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/busselection">
          <BusSlection />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
