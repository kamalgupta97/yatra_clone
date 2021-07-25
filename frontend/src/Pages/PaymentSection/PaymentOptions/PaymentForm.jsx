import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
// import { Spinner } from "../Spinner";
import PaymentFailure from "./PaymentFailure";
import styles from "./PaymentForm.module.css";
import PaymentSucces from "./PaymentSucces";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useDispatch, useSelector } from "react-redux";
// import { setPaymentSucceeded } from "../../Redux/Auth/authAction";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#623381",
      color: "#623381",
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
          < div>...loading</div>
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
              <button>Pay</button>
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
