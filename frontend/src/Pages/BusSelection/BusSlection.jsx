import React, { useState } from "react";
import SelectionCard from "./BusSelectionCard";
import CancelationPolicy from "./CancelationPolicy";
import data from "./data";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import styles from './BusSelection.module.css'
import busImg from './Images/bus_searchbar.png'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const SearchContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "col1 col2 col3 col4 col5";
  align-items: center;
  padding: 20px 100px;
  gap: 15px;
  justify-content:space-space-around;
  /* height: ; */
    background-image:linear-gradient(270deg,#43264e 0,#9a243e 72%);
    @media screen and (max-width:420px){
  grid-template-areas: 'col1' 'col2' 'col3' 'col4''col5';
      padding: 5px 45px;
    }
`;
const useStyles = makeStyles((theme) => ({
  btn: {
    background: "red",
    width:"150px",
    color: "white",
    cursor: 'pointer',
    "&:hover":{
      background:"#A30000"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop:"10px"
      
    
    },
  },
  search__input_from:{
    borderBottom:"white"
  },
  date__format:{
    [theme.breakpoints.down("sm")]: {
      marginRight:"60px"
    
    },
  }
}));

const BusSlection = () => {
  const classes = useStyles();

  const [showCancelPolicy, setShowCancelPolicy] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [from , setFrom] = useState("")
  const [to , setTo] = useState("")

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleCancelPolicy = () => {
    setShowCancelPolicy(!showCancelPolicy);
  };
  return (
    <>
       <div className={styles.search} >
        <SearchContainer>
          <div>
         <img width="65px" src={busImg} alt="Bus" />
          </div>
          <div>
            <p>From</p>
            <TextField variant='standard'  className={classes.search__input_from} type="text" />
          </div>

          <div>
            <p>To</p>
          <TextField variant='standard'className={classes.search__input_from} type="text" />
          </div>
          <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
        className={classes.date__format}
          margin="normal"
          id="date-picker-dialog"
          label="Date"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        
      </Grid>
    </MuiPickersUtilsProvider>
          </div>

          <Button variant="contained" className={classes.btn}>
            Find
          </Button>
        </SearchContainer>
      </div> 

      <h1 style={{ textAlign: "center" }}>Bus selection</h1>
      {data.map((item, id) => {
        return (
          <SelectionCard
            key={id}
            handleCancelPolicy={handleCancelPolicy}
            {...item}
          />
        );
      })}
      {showCancelPolicy ? <CancelationPolicy /> : null}
    </>
  );
};

export default BusSlection;
