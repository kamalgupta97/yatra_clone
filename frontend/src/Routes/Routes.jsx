import React from "react";
import { Switch, Route } from "react-router-dom";
import BusSlection from "../Pages/BusSelection/BusSlection";
import { SeatSelection } from "../Pages/SeatSelection/SeatSelection";
import {Booking} from "../Components/review/Booking"
import { SignIn } from "../Pages/Authentication/SignIn";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/busselection">
          <BusSlection />
        </Route>
        <Route exact path="/">
            <SignIn />
        </Route>
        <Route exact path="/booking">
            <Booking />
        </Route>
        
      </Switch>
    </>
  );
};

export default Routes;
