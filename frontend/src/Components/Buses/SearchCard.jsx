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
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { getBusesData } from "../../Redux/Bus/busAction";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 30,
    boxShadow: "0px .5px 3px .5px grey",
    height: "80vh",
    background: "#ffffff",
  },

  title: {
    fontSize: 18,
    fontWeight: 550,
    color: "#333333",
  },
  inputText: {
    width: "42.3%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export default function SearchCard() {
  const classes = useStyles();

  const [departureLocation, setDepartureLocation] = useState("delhi");
  const [arrivalLocation, setArrivalLocation] = useState("jaipur");
  const [selectedDate, setSelectedDate] = useState(new Date());
  //new Date().toJSON().slice(0,10)
  const [searchData, setSearchData] = useState({});
  const history = useHistory();
  // console.log(searchData);

  const dispatch = useDispatch();

  //selectedDate: moment(selectedDate).format("DD-MM-YYYY"),
  const handleSearchBus = () => {
    const payload = {
      departureLocation,
      arrivalLocation,
      selectedDate,
    };

    setSearchData(payload);
    dispatch(getBusesData(payload));

    history.push("/busselection");
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Box>
          <h4 className={classes.title}>Book Bus Tickets</h4>
          <Box style={{ marginTop: "15px" }}>
            <TextField
              className={classes.inputText}
              value={departureLocation}
              id="standard-basic"
              label="Depart From"
              onChange={(e) => setDepartureLocation(e.target.value)}
            />
            <IconButton
              onClick={() => {
                var temp = departureLocation;
                setDepartureLocation(arrivalLocation);
                setArrivalLocation(temp);
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
              value={arrivalLocation}
              id="standard-basic"
              label="Going To"
              onChange={(e) => setArrivalLocation(e.target.value)}
            />
          </Box>
          <Box>
            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            margin: "0 0 4rem 0",
          }}
        >
          <Button
            className="searchButton"
            style={{
              padding: "10px 5px",
            }}
            variant="contained"
            color="secondary"
            onClick={handleSearchBus}
          >
            Search Buses →
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
