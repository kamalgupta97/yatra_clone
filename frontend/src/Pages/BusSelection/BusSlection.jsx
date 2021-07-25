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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filter from './Images/filter.png'

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
  
  Filter_root: {
    width: "100%",
    height: "65px",
    margin:"auto",
    // border:"1px solid red",
    color:"#333333",
    borderBottom:"1px solid #e2e2e2"
    
  },
  Filter_card:{
      display: "flex",
      flexDirection:"row", 
      width:"70%",
      height: "65px",
      padding:"10px",
  justifyContent:"space-evenly",
  marginLeft:"50px"
  // border:"1px solid red",

  },
  Filter_Card_disable:{
    visibility:"hidden"
  },
  icon:{
      // marginTop:"15px"
  },
  item_cont:{
      display: "inline-flex"
  },
  cancel:{
    marginLeft:"900px",
    borderRadius:"4px",
    width: "80px",
    height: "30px",
    border:"none",
    outline:"none",
    "&:hover":{
      backgroundColor:"#e3e3e3"
    },
  },
  filterbtn:{
    borderRadius:"4px",
    width: "110px",
    marginLeft:"10px",
    height: "30px",
    backgroundColor:"#e63939",
    color:"white",
    border:"none",
    outline:"none",
    "&:hover":{
      backgroundColor:"#da2323"
    },
  },
  ShowFilter:{
    position: "fixed",
    top:"30%",
    height: "100vh",
    boder:"1px solid red",
    width:"100%",
    
    backgroundColor:"white",
  },
  bus_type:{
    display:"flex",
    flexDirection:"row"
  },
  bus_type_cont:{
    display:"flex",
    flexDirection:"column"
  },
  filter_cont_heading:{
    fontWeight:"600",
    paddingBottom:"12px"
  }
}));

const BusSlection = () => {
  const classes = useStyles();
  const [filterOpen , setFilterOpen] = useState(false)
  const handleFilterDiv = ()=>{
      setFilterOpen(true)

  }
  const handleCancel = ()=>{
    setFilterOpen(false)
  }
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
      <div className={classes.Filter_root}>
       <div onClick={handleFilterDiv} className={filterOpen? classes.Filter_Card_disable : classes.Filter_card }>
       <div>
            <img  width="30px" src={filter} alt="gr" />
            <p>Filters</p>
        </div>
        <div className={classes.item_cont} >
            <p>BusType</p>
            <ExpandMoreIcon className={classes.icon} />
        </div>
        <div className={classes.item_cont} >
        <p >Pickup/Drop Time</p>
        <ExpandMoreIcon className={classes.icon}/>
            
        </div>
        <div className={classes.item_cont} >
        <p>Boarding Points</p>
        <ExpandMoreIcon className={classes.icon}/>
            
        </div>
        <div className={classes.item_cont} >
        <p>Dropping Points</p>
        <ExpandMoreIcon className={classes.icon}/>
            
        </div>
        <div className={classes.item_cont} >
        <p>Bus Operators </p>
        <ExpandMoreIcon className={classes.icon}/>
            
        </div>

       </div>

       {
         filterOpen ?
       <div className={classes.ShowFilter}>
         <div>
           <button onClick={handleCancel} className={classes.cancel}>Cancel</button>
           <button className={classes.filterbtn}>Apply Filters</button>

         </div>
         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:"100px"}}>

<div>
  <p  className={classes.filter_cont_heading}>Bus Type:</p>
  <div className={classes.bus_type_cont}>
  <div className={classes.bus_type} ><input type="checkbox" /> AC Seater</div>
  <div className={classes.bus_type}  ><input type="checkbox" /> Non-AC Seater</div>
 <div className={classes.bus_type} > <input type="checkbox" /> AC Sleeper</div>
 <div className={classes.bus_type} > <input type="checkbox" /> Non-AC Seater</div>
 <div className={classes.bus_type} ><input type="checkbox" /> AC Semi Seater </div>
 <div className={classes.bus_type} >   <input type="checkbox" /> Non-AC Semi Seater</div>
  </div>
</div>
{/* <div>2

</div> */}
<div>
  <p  className={classes.filter_cont_heading}>Boarding Points:</p>
  <div  style={{overflowY:"scroll"}}>

  <div  className={classes.bus_type} ><input type="checkbox" /> AC Seater</div>

  </div>
</div>
<div>
  <p  className={classes.filter_cont_heading}>Dropping Points:</p>
  <div style={{overflowY:"scroll"}}>
  <div  className={classes.bus_type} ><input type="checkbox" /> AC Seater</div>

  </div>
</div><div>
  <p  className={classes.filter_cont_heading}>All Bus Operators:</p>
  <div style={{overflowY:"scroll"}}>
  <div  className={classes.bus_type} ><input type="checkbox" /> AC Seater</div>

  </div>
</div>


           </div>
       </div>
           : null
       }



     
     
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
