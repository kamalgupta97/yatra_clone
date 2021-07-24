import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Available from './Images/Available.png';
import Booked from './Images/Booked.png';
import Selected from './Images/Selected.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {seats} from './requirement';


import sleeper_available from './Images/sleeper_available.png'
import booked_sleeper from './Images/booked_sleeper.png'
import sleeper_selected from './Images/sleeper_selected.png'



const Seats =styled.div`
  

`
const useStyles = makeStyles((theme) => ({
    root:{
        marginLeft:200,
        width:180
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      cursor:"pointer",
    }
  }));


export const SeaterSitting = ({setselectedseats,selectedseats}) => {
    let bustype="semisleeper"
    const classes = useStyles();
    const [busseats,setbuseats] = React.useState(seats)
    const handleClick =(i) =>{
        // alert(i)
        setbuseats([...busseats])
        if(selectedseats.length<6){
        if(busseats[i].available==="selected"){
            busseats[i].available=true
        }
        else{
            busseats[i].available="selected"
        }


        
      
          const selected_seats = busseats.filter((item)=>item.available==="selected")
          setselectedseats(selected_seats)
        }

     
        console.log(seats)
    }
    return (
            <Seats>{console.log(seats)}
            
            {
                       ( bustype==="seater" || bustype==="semisleeper" ) &&
                <Grid container className={classes.root} >
                  
                  
               
                {busseats.map((item,i)=>  
                {
                  return  ( busseats[i].available==="selected")?
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={i} onClick={()=>handleClick(i)} >
                    <img  className={classes.paper} src={Selected} alt="available" />
                    </Grid>
                    : (busseats[i].available)?
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={i} onClick={()=>handleClick(i)} >
                    <img  className={classes.paper} src={Available} alt="available" />
                    </Grid>
                    :
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={i} onClick={()=>handleClick(i)} >
                    <img  className={classes.paper} src={Booked} alt="available" />
                    </Grid>

                }
                
              
        )}
   
                        
             
                        
                    </Grid>
}

                    {
                        bustype==="Sleeper" &&
                        <Grid container className={classes.root} >
                  
                  
               
                        {busseats.map((item,i)=>  
                        {
                          return  ( busseats[i].available==="selected")?
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={i} onClick={()=>handleClick(i)} >
                            <img  className={classes.paper} src={sleeper_selected} alt="available" />
                            </Grid>
                            : (busseats[i].available)?
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={i} onClick={()=>handleClick(i)} >
                            <img  className={classes.paper} src={sleeper_available} alt="available" />
                            </Grid>
                            :
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={i} onClick={()=>handleClick(i)} >
                            <img  className={classes.paper} src={booked_sleeper} alt="available" />
                            </Grid>
        
                        }
                        
                      
                )}
           
                                
                            
                                
                            </Grid>
                    }

                    </Seats>
    )
}
