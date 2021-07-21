import styled from "styled-components";
import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  Cancellation_Heading: {
    color: "red",
    paddingBottom: "10px",
  },
  Cancellation_Info: {
    width: "94%",
    display: "inherit",
    marginLeft: "20px",
  },
  Cancellation_Info_Heading: {
    display: "inline-flex",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#e1dcdc",
    color: "#999595",
    marginTop: "10px",
    padding: "5px",
    borderRadius: "5px",
  },
  Cancellation_Info_Content: {
    display: "inline-flex",
    justifyContent: "space-between",
    width: "100%",
    color: "#999595",
    marginTop: "20px",
  },
  Cancelbtn: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    marginTop: "13px",
  },
});

const Cancelation = styled.div`
  display: flex;
  position: fixed;
  left: 58%;
  top: 0;
  width: 39%;
  height: 100vh;
  padding: 15px;
  background-color: white;
`;

const CancelationPolicy = ({}) => {
  const classes = useStyles();
  const [showBusSelection, setShowBusSelection] = useState(true);
  const handleCancelPolicyCard = () => {
    setShowBusSelection(!showBusSelection);
  };
  return (
    <>
      {showBusSelection ? (
        <>
          <Cancelation>
            <div>
              <button
                className={classes.Cancelbtn}
                onClick={handleCancelPolicyCard}
              >
                <CancelIcon />
              </button>
            </div>
            <div>
              <h1 className={classes.Cancellation_Heading}>
                Cancellation Policy
              </h1>
              <hr />
              <div className={classes.Cancellation_Info}>
                <p style={{ paddingTop: "15px" }}>
                  Every operator has its own Cancellation Policy. Tickets can be
                  cancelled<br></br> by logging to Yatra.com
                </p>
                <div className={classes.Cancellation_Info_Heading}>
                  <p>Cancellation Time</p>
                  <p>Refund</p>
                </div>
                <div className={classes.Cancellation_Info_Content}>
                  <p>Between 0-12 Hrs of Bus Boarding Time</p>
                  <p>0%</p>
                </div>
                <hr />
                <div className={classes.Cancellation_Info_Content}>
                  <p>Between 12-24 Hrs of Bus Boarding Time</p>
                  <p>50%</p>
                </div>
                <hr />
                <div className={classes.Cancellation_Info_Content}>
                  <p>Between 24-72 Hrs of Bus Boarding Time</p>
                  <p>90%</p>
                </div>
              </div>
            </div>
          </Cancelation>
        </>
      ) : null}
    </>
  );
};

export default CancelationPolicy;
