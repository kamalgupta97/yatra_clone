import React from "react";
import { Switch, Route } from "react-router-dom";
import BusSlection from "../Pages/BusSelection/BusSlection";
import { SeatSelection } from "../Pages/SeatSelection/SeatSelection";
import { Booking } from "../Components/review/Booking";
import { SignIn } from "../Pages/Authentication/SignIn";
import PaymentSection from "../Pages/PaymentSection/PaymentSection";
import Home from "../Pages/Home";
import PaymentForm from "../Pages/PaymentSection/PaymentOptions/PaymentForm";
import StripeContainer from "../Pages/PaymentSection/PaymentOptions/StripeContainer ";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/busselection">
          <BusSlection />
        </Route>
        <Route exact path="/">
          <Home />
      
        </Route>
        <Route exact path="/booking">
          <Booking />
        </Route>
        <Route exact path="/payment">
          <PaymentSection />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
       
      </Switch>
    </>
  );
};

export default Routes;
