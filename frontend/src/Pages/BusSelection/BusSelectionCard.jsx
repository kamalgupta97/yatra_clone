import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import styles from "./BusSelectionCard.module.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import RemoveIcon from "@material-ui/icons/Remove";
import { useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    border: "1px solid",
    height: "140px",
    margin: "0 20px",
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
}));

const SelectionCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card className={classes.root}>
      <div className={styles.CardWrapper}>
        <CardContent className={styles.Card_bus_selection}>
          <div className={styles.Column1}>
            <div>
              <h1 className={styles.Bus_title} >Shakthi Traveller</h1>
              <p style={{ color: "green" }}>Ac sleeper</p>
            </div>
          </div>
          <div className={styles.Column2}>
            <h1>1.00</h1>
            <div>
              <div style={{ display: "inline-flex" }}>
                <RemoveIcon fontSize="medium" />
                <p className={styles.Duration_Para}>4hour</p>
                <ArrowRightAltIcon fontSize="medium" />
              </div>
              <p style={{ color: "blue" }}>bording/dropping points</p>
            </div>
            <h1>5.00</h1>
            <div>
              <h1 className={styles.Bus_fair} >1345</h1>
              <p>13 seat left</p>
            </div>
          </div>
          <div className={styles.Column3}>
            <Button className={classes.btn} variant="contained">
              Select seat
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default SelectionCard;
