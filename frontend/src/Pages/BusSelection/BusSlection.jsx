import React, { useState } from "react";
import SelectionCard from "./BusSelectionCard";
import CancelationPolicy from "./CancelationPolicy";
import data from "./data";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { TextField, Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./BusSelection.module.css";
import busImg from "./Images/bus_searchbar.png";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

import Navbar2 from "../../Components/Navbar2";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { getBusesData } from "../../Redux/Bus/busAction";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer";

const SearchContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "col1 col2 col3 col4 col5";
  align-items: center;
  padding: 20px 100px;
  gap: 15px;
  justify-content: space-space-around;
  /* height: ; */
  background-image: linear-gradient(270deg, #43264e 0, #9a243e 72%);
  @media screen and (max-width: 420px) {
    grid-template-areas: "col1" "col2" "col3" "col4" "col5";
    padding: 5px 45px;
  }
`;
const useStyles = makeStyles((theme) => ({
  navData: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "1300px",
  },
  btn: {
    background: "red",
    width: "150px",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      background: "#A30000",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },

  search__input_from: {
    borderBottom: "white",
    fontWeight: "500",
    color: "#ffffff !important",
  },
  date__format: {
    color: "#c0c0c0",
    borderBottom: "1px solid white",

    [theme.breakpoints.down("sm")]: {
      marginRight: "60px",
    },
  },
}));

const BusSlection = () => {
  const classes = useStyles();
  const [openSelectseat,setopenSelectseat]=React.useState(false)
  let saved_searchdata = useSelector((state) => state.bus.saved_searchdata);

  let departureLocation = saved_searchdata.departureLocation;
  let arrivalLocation = saved_searchdata.arrivalLocation;
  let date = saved_searchdata.selectedDate;

  const [showCancelPolicy, setShowCancelPolicy] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(date);
  const [from, setFrom] = useState(departureLocation);
  const [to, setTo] = useState(arrivalLocation);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleCancelPolicy = () => {
    setShowCancelPolicy(!showCancelPolicy);
  };

  // sending data to redux for finding buses________________________
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bus);

  React.useEffect(() => {
    dispatch(getBusesData(saved_searchdata));
  // !state.isLoading &&console.log(state, "state");  
  }, []);

  // saved_searchdata = state.saved_searchdata;
  // departureLocation = saved_searchdata.departureLocation;
  // arrivalLocation = saved_searchdata.arrivalLocation;

  //console.log(saved_searchdata);

  const handleSubmit = () => {
    // selectedDate:selectedDate.toLocaleDateString()
    const payload = {
      departureLocation: from,
      arrivalLocation: to,
      selectedDate,
    };

    console.log(payload, "BUS SELECTION __________________");
    dispatch(getBusesData(payload));
  };
  return (
    <>
    {
      console.log(state && state?.data?.bus?.map(item=>item))
    }
      <div className={styles.search}>
        <div>
         
         { !openSelectseat && <Navbar2 />}
        </div>

        <SearchContainer style={{ marginTop: "7vh" }}>
          <div>
            <img width="45px" src={busImg} alt="Bus" />
          </div>
          <div>
            <p>From</p>

            <TextField
              variant="standard"
              className={classes.search__input_from}
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div>
            <p>To</p>
            <TextField
              variant="standard"
              className={classes.search__input_from}
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  className={classes.date__format}
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date"
                  formatDate={(date) => moment(date).format("DD-MM-YYYY")}
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>

          <Button
            variant="contained"
            className={classes.btn}
            onClick={handleSubmit}
          >
            Find
          </Button>
        </SearchContainer>
      </div>

      <h1 style={{ textAlign: "left",margin:"20px 10px 20px 150px",fontSize:"28px"}}>We have got {state && state?.data?.bus?.length} Results</h1>
      {state?.data?.bus?.map((item) => {
        return (
          <SelectionCard
            key={item._id}
            handleCancelPolicy={handleCancelPolicy}
            {...item}
            openSelectseat={openSelectseat} setopenSelectseat={setopenSelectseat}
          />
        );
      })}
      <Footer />
      {showCancelPolicy ? <CancelationPolicy /> : null}
    </>
  );
};

export default BusSlection;
