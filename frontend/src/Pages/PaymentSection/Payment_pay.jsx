import React from "react";
import { Button } from "@material-ui/core";

const Payment_pay = () => {
  return (
    <div style={{width:"80%",margin:"10% 8%"}}>
      <p>Dear Customer,</p>
      <br></br>
      <br></br>
      <p>Please click 'Pay now' to continue.</p>
      <br></br> <br></br>
      <div style={{display:"inline-flex",width:"220px",justifyContent:"space-between"}}>
        <h3>683 rs</h3>
        <Button variant="contained" color="secondary">
          Pay Now
        </Button>
      </div>
      <p style={{fontSize:"12px"}}>By clicking on Pay Now, you are agreeing to our Terms & Conditions , Privacy policy, User Agreement and Covid-19 Guidelines.</p>
    </div>
  );
};

export default Payment_pay;
