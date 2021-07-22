import React from "react";
import { Switch, Route } from "react-router-dom";
import BusSlection from "../Pages/BusSelection/BusSlection";
import { SeatSelection } from "../Pages/SeatSelection/SeatSelection";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/busselection">
          <BusSlection />
        </Route>
        <Route exact path="/">
            <SeatSelection />
        </Route>
        
      </Switch>
    </>
  );
};

export default Routes;
