import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, IconButton, TextField } from "@material-ui/core";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import DatePicker from "./DatePicker";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position: "fixed",
    minHeight: "88vh",
    marginTop: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: 550,
    color: "#333333",
  },
  inputText: {
    // fontSize: 20,
    // fontWeight: 550,
    // color: "#333333",
  },
});

export default function SearchCard() {
  const classes = useStyles();

  let [depart, setDepart] = useState("A");
  let [going, setGoing] = useState("B");

  return (
    <Card className={classes.root}>
      <CardContent>
        <h4 className={classes.title}>Book Bus Tickets</h4>
        <Box>
          <TextField
            className={classes.inputText}
            value={depart}
            id="standard-basic"
            label="Depart From"
            onChange={(e) => setDepart(e.target.value)}
          />
          <IconButton
            onClick={() => {
              var temp = depart;
              setDepart(going);
              setGoing(temp);
            }}
          >
            <SyncAltIcon
              style={{
                color: "#CE2A35",
                border: "1px solid #CE2A35",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
          </IconButton>
          <TextField
            className={classes.inputText}
            value={going}
            id="standard-basic"
            label="Going To"
            onChange={(e) => setGoing(e.target.value)}
          />
        </Box>
        <Box>
          <DatePicker />
        </Box>
        <Box>
          <Button
            style={{
              margin: "57vh 1% 5% 67%",
              position: "relative",
              padding: "10px 5px",
            }}
            variant="contained"
            color="secondary"
          >
            Search Buses →
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
