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
    border: "none",
    outline: "none",
    width:"130px",
    height: "30px",
    borderRadius:"10px",
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

const SelectionCard = ({_id,allbuses,openSelectseat,setopenSelectseat, handleCancelPolicy , operator,bustype,departtime,arrivaltime,duration,fare,availableseat,destination,source,date,bookedseats}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [tobeopen,setTobeopen] = React.useState({})
  const handleSeatSelection = (_id)=>{
    setopenSelectseat(!openSelectseat)
    console.log(_id,"LOOF FOR IDS")
    const updated = allbuses.find(item=>item._id===_id)
    setTobeopen(updated)
    console.log(updated,"LOOK FOR OBJECT")
   
  }

  return (
    <Card className={classes.root}>
      <div className={styles.CardWrapper}>
        <CardContent className={styles.Card_bus_selection}>
          <div className={styles.Column1}>
            <div>
              <h1 className={styles.Bus_title}>{operator}</h1>
              <p style={{ color: "green" }}>{bustype}</p>
            </div>
          </div>
          <div className={styles.Column2}>
            <h1 style={{marginRight:"8px"}}>{departtime}:00</h1>
            <div>
              <div className={classes.Duration_Cont}>
                <RemoveIcon fontSize="medium" />
                <p className={styles.Duration_Para}>{duration}</p>
                <ArrowRightAltIcon fontSize="medium" />
              </div>
              <p className={styles.Boarding_Dropping_point}>boarding/dropping points</p>
            </div>
            <h1>{arrivaltime}:00</h1>
            <div>
             <div className={classes.fare_cont}>
           
             <h1 className={styles.Bus_fare}>₹{fare}</h1>
             </div>
              <p className={styles.Seat_left}>{availableseat} Seats Left</p>
            </div>
          </div>
          <div className={styles.Column3}>

            <button   
            onClick={()=>handleSeatSelection(_id)} 
            // onClick={()=>alert(_id)} 
            className={classes.btn} variant="contained">

              Select seat
            </button>
            <button
              className={classes.Cancel_policy_btn}
              onClick={handleCancelPolicy}
            >
              cancellation policy
            </button>
          </div>
        </CardContent>
        {
      
    }
      </div>
      {

        
          // console.log(_id)

          // console.log({...tobeopen})
   
      openSelectseat && <SeatSelection {...tobeopen} setopenSelectseat={setopenSelectseat}  key={tobeopen.id}/>
    }
    </Card>
    
  );
};

export default SelectionCard;

