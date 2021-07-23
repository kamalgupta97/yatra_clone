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
// import data from './data.js'

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid",
    height: "105px",
    marginBottom:"20px",
    fontSize:"13px",
    width: "80%",
    margin:"auto",
    border:"none",
    boxShadow: "rgba(75, 73, 73, 0.35) 0px 5px 15px",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    },

    "&:hover": {
      // boxShadow: "-3px -6px 80px -15px rgba(0,0,0,0.4)",
    },
  },
  btn: {
    background: "red",
    color: "white",
    cursor: 'pointer',
    "&:hover":{
      background:"#A30000"
    },
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
  fare_cont:{
    display: "inline-flex",
    width: "50%",
    marginLeft:"50px"
  }
  
}));

const SelectionCard = ({ handleCancelPolicy , agency_name,bus_type,boarding_time,departure_time,duration,price,seat_left }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openSelectseat,setopenSelectseat]=React.useState(false)
  const handleSeatSelection = ()=>{
    setopenSelectseat(!openSelectseat)
  }
// console.log(data)
  return (
    <Card className={classes.root}>
      <div className={styles.CardWrapper}>
        <CardContent className={styles.Card_bus_selection}>
          <div className={styles.Column1}>
            <div>
              <h1 className={styles.Bus_title}>{agency_name}</h1>
              <p style={{ color: "green" }}>{bus_type}</p>
            </div>
          </div>
          <div className={styles.Column2}>
            <h1 style={{marginRight:"8px"}}>{boarding_time}</h1>
            <div>
              <div className={classes.Duration_Cont}>
                <RemoveIcon fontSize="medium" />
                <p className={styles.Duration_Para}>{duration}</p>
                <ArrowRightAltIcon fontSize="medium" />
              </div>
              <p className={styles.Boarding_Dropping_point}>boarding/dropping points</p>
            </div>
            <h1>{departure_time}</h1>
            <div>
             <div className={classes.fare_cont}>
               <img className={styles.Bus_fare_icon}  width="8%" src={rupee} alt="Rupee Icon" />
             <h1 className={styles.Bus_fare}>{price}</h1>
             </div>
              <p className={styles.Seat_left}>{seat_left}</p>
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
