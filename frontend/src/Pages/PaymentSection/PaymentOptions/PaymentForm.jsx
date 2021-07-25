import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
// import { Spinner } from "../Spinner";
import PaymentFailure from "./PaymentFailure";
import styles from "./PaymentForm.module.css";
import PaymentSucces from "./PaymentSucces";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LoadingIndicator } from "../../../Components/LoadingIndicator/LoadingIndicator";

// import { setPaymentSucceeded } from "../../Redux/Auth/authAction";
const useStyles = makeStyles((theme) => ({
  btn: {
    background: "red",
    width: "150px",
    color: "white",
    cursor: "pointer",
    marginLeft:"40%",
    border: "none",
    outline: "none",
    height: "30px",
    borderRadius:"15px",
    "&:hover": {
      background: "#A30000",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
 
}));

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#2449df",
      color: "#2449df",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#grey" },
    },
    invalid: {
      iconColor: "grey",
      color: "#623381",
    },
  },
};

export default function PaymentForm() {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [isError, setisError] = React.useState(false);
  const [closeSuccess, setcloseSuccess] = React.useState(false);
  const [closeFailure, setcloseFailure] = React.useState(false);
  const [closeInvalid, setcloseInvalid] = React.useState(false);
  const [isInvalid, setisInvalid] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const paymentConfirmation = useSelector(
    (state) => state.auth.isPaymentSuccess
  );

  console.log(paymentConfirmation);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

   

    if(!error) {
        try {
            const {id} = paymentMethod
            setisLoading(true)
            const response = await axios.post("https://stripepaymentstraw.herokuapp.com/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
                setisLoading(false)
                // dispatch(setPaymentSucceeded(true))
              

            }

        } catch (error) {
            console.log("Error", error)
            setisError(true)
            setisLoading(false)
        }
    } else {
      console.log(error.message);
      setisInvalid(true);
    }
  };

  // const history= useHistory()
  //     const handleSuccess =()=>{

  // history.replace('/user/orders')
  //     }
  return (
    <>
      {!success ? (
        <div>
          {isLoading ? (
          <LoadingIndicator/>
          ) : isInvalid ? (
            <div>
              {!closeInvalid && (
                <div>
                  <PaymentFailure
                    src={
                      "https://previews.123rf.com/images/bankrx/bankrx1801/bankrx180100212/93748171-grunge-red-invalid-word-round-rubber-seal-stamp-on-white-background.jpg"
                    }
                    text={"Invalid"}
                  />
                  <CancelOutlinedIcon
                    className={styles.closemodal}
                    onClick={() => setcloseInvalid(!closeInvalid)}
                  />
                </div>
              )}
            </div>
          ) : isError ? (
            <div>
              {!closeFailure && (
                <div>
                  <PaymentFailure
                    src={
                      "https://kvnmail.com/in/wp-content/uploads/2017/08/round-error-icon-16.jpg"
                    }
                    text={"Failure"}
                  />
                  <CancelOutlinedIcon
                    className={styles.closemodal}
                    onClick={() => setcloseFailure(!closeFailure)}
                  />
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <fieldset className={styles.FormGroup}>
                <div className={styles.FormRow}>
                  <CardElement options={CARD_OPTIONS} />
                </div>
              </fieldset>
              <button  className={classes.btn} variant="contained" color="secondary">Pay Now</button>
            </form>
          )}
        </div>
      ) : (
        <div>
          {!closeSuccess && (
            <div>
              <PaymentSucces />
              <CancelOutlinedIcon
                className={styles.closemodal}
                onClick={() => setcloseSuccess(!closeSuccess)}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
