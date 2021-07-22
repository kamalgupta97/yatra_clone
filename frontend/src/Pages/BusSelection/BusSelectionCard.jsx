import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import styles from "./BusSelectionCard.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import RemoveIcon from "@material-ui/icons/Remove";
import { useTheme } from "@material-ui/core/styles";
import { SeatSelection } from "../SeatSelection/SeatSelection";
import rupee from '../BusSelection/Images/rupee.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    border: "1px solid",
    height: "135px",
    margin: "0 20px",
    fontSize:"13px",
    "&:hover": {
      boxShadow: "-3px -6px 80px -15px rgba(0,0,0,0.47)",
    },
  },
  btn: {
    background: "red",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  Cancel_policy_btn: {
    border: "none",
    outline: "none",
    background: "transparent",
    color: "gray",
    marginTop: "4px",
  },
  Duration_Cont:{
    display: 'inline-flex',
    marginLeft:"28px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginBottom:"0"
    },
  },
  fair_cont:{
    display: "inline-flex",
    width: "50%",
    justifyContent:"space-around"
  }
  
}));

const SelectionCard = ({ handleCancelPolicy }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openSelectseat,setopenSelectseat]=React.useState(false)
  const handleSeatSelection = ()=>{
    setopenSelectseat(!openSelectseat)
  }

  return (
    <Card className={classes.root}>
      <div className={styles.CardWrapper}>
        <CardContent className={styles.Card_bus_selection}>
          <div className={styles.Column1}>
            <div>
              <h1 className={styles.Bus_title}>Shakthi Traveller</h1>
              <p style={{ color: "green" }}>Ac sleeper</p>
            </div>
          </div>
          <div className={styles.Column2}>
            <h1 style={{marginRight:"8px"}}>1.00</h1>
            <div>
              <div className={classes.Duration_Cont}>
                <RemoveIcon fontSize="medium" />
                <p className={styles.Duration_Para}>4hour</p>
                <ArrowRightAltIcon fontSize="medium" />
              </div>
              <p className={styles.Boarding_Dropping_point}>boarding/dropping points</p>
            </div>
            <h1>5.00</h1>
            <div>
             <div className={classes.fair_cont}>
               <img  width="16%" src={rupee} alt="Rupee Icon" />
             <h1 className={styles.Bus_fair}>1345</h1>
             </div>
              <p className={styles.Seat_left}>13 seat left</p>
            </div>
          </div>
          <div className={styles.Column3}>
            <Button onClick={handleSeatSelection} className={classes.btn} variant="contained">
              Select seat
            </Button>
            <button
              className={classes.Cancel_policy_btn}
              onClick={handleCancelPolicy}
            >
              cancellation policy
            </button>
          </div>
        </CardContent>
      </div>
      {
      openSelectseat && <SeatSelection setopenSelectseat={setopenSelectseat}/>
    }
    </Card>
  );
};

export default SelectionCard;
