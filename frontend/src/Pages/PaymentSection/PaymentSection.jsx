import React, { useState } from "react";
import Stepper_payment from "./Stepper_payment";
import { Typography, Toolbar ,Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import styles from "./Payment.module.css";
import { height } from "@material-ui/system";
import Payment_pay from "./Payment_pay";
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import StripeContainer from "./PaymentOptions/StripeContainer ";
import  Footer from '../../Components/Footer'

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:"#f2f2f2",
    },
  navData: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "1300px",
  },
  img_yatra:{
      marginLeft:"130px",
      [theme.breakpoints.down("sm")]: {
        marginLeft:"50px",
      },
  },
  payment_modal:{
    display: "flex",
    flexDirection:"row",
    width:"80%",
    margin:"0 150px",
    border:"4px solid balck",
    height: "700px",
   

  },
  payment_btn:{
      backgroundColor:"#f7f4f4",
      height: "65px",
    //   width:"125.127px",
      borderRadius:"0px",
      borderBottom:"#e2e2e2",
      "&:hover":{
      borderLeft:"3px solid #ea2330",
      backgroundColor:"white"

      },
      dropdown_root: {
        position: 'relative',
      },
      dropdown: {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
      },
     
  }

}));

const PaymentSection = () => {
    const [credit , setCredit] = useState(true)
    const [pay , setPay] =  useState(false)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const handleClickCredit = ()=>{
    setCredit(true)
  }
  const handleClickPay =()=>{
    setCredit(false)
    setPay(true)
  }
  
  return (
    <div className={classes.root}>
      <div style={{backgroundColor:"white"}}>
        <Toolbar className={classes.navData}>
          <img
            className={classes.img_yatra}
            width="88px"
            height="35px"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/yatra_logo.png"
            alt="yatra_logo"
          />
         <div  className={styles.nav_payment_section}>
         <div>
         <h3 style={{color:"#b8b8b8"}}>Book your Bus in 3 simple steps</h3>
         </div>
          <div >
            <Typography>Hi Bhargavi</Typography>
          </div>
         </div>
        </Toolbar>
      </div>
      <Stepper_payment />
      <Box className={classes.payment_modal}>
         <div className={styles.payment_Left_cont}  >
         <div className={styles.payment_Left_subcont}  >
          <Button onClick={handleClickCredit} className={classes.payment_btn} variant="contained">Credit Card</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">Debit Card</Button>
          <Button  onClick={handleClickPay} className={classes.payment_btn} variant="contained">UPI</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">NETB</Button>
           <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">PayPal</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">Amazon Pay</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">Google Pay</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">PhonePe</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">Paytm</Button>
          <Button onClick={handleClickPay} className={classes.payment_btn} variant="contained">Mobile Wallet</Button>
     
          </div>
          <div className={styles.payment_Right_subcont} >
              {
                  credit ? <StripeContainer/> :     <Payment_pay/> 
              }

          </div>

         </div>
         <div className={styles.payment_Right_cont}  >
            <div>
            <ClickAwayListener onClickAway={handleClickAway}>
      <div  style={{marginBottom:"30px"}} className={classes.dropdown_root}>
        <div  className={styles.booking_summary}  onClick={handleClick}>
          Booking Summary
        </div>
        {open ? (
          <div className={classes.dropdown}>
          <div className={styles.booking_content}>
          hwteutyu <br></br>
            etywtu <br></br>
            etywuryu <br></br>
            tywruryu <br></br>
            teyryu <br></br>
            wrtgey  <br></br>
            wtu <br></br>
            etywuryu <br></br>
            tywruryu <br></br>
            teyryu <br></br>
            wrtgey  <br></br>wtu <br></br>
            etywuryu <br></br>
            tywruryu <br></br>
            teyryu <br></br>
            wrtgey  <br></br>
          </div>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
                
            </div>
            <div>
                <div className={styles.booking_summary}>
                    Payment Deatils
                </div>
                <div  className={styles.payment_detail} >
                    <div className={styles.payment_detail_cont1} >
                        <p>Onward fare</p>
                        <p>687</p>
                    </div>
                    <div className={styles.payment_detail_line} ></div>
                    <div className={styles.payment_detail_cont2}>
                        <h2 >You Pay</h2>
                        <h2 style={{color:"#333333"}} >687</h2>
                    </div>
                    <div  className={styles.payment_detail_line}  ></div>


                </div>
            </div>
         </div>

      </Box>
      <br></br><br></br>

      <Footer/>
      
    </div>
  );
};

export  default PaymentSection;
