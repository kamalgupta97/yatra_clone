import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Available from './Images/Available.png';
import Booked from './Images/Booked.png';
import Selected from './Images/Selected.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {totalsittngseats} from './requirement';
import {totalsleeperseats} from './requirement';
import { SleeperSitting } from './SleeperSitting';






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


export const SeaterSitting = ({setSelected,selected,booked,bustype}) => {
  console.log(booked,"Bookes")
    
    const classes = useStyles();
  

    // console.log(totalsleeperseats)
    // console.log(totalsittngseats)
      
    const handleClick =(item) =>{
 
      if(selected.length<6){
        if(!selected.includes(item)){            
            setSelected([...selected,item])
            console.log(selected)
          }
      }
      if(selected.includes(item)){
        const updateSelected = selected.filter(i=>i!==item)
        setSelected(updateSelected)
      }
        
        
    
}

  

    return (
            <Seats>
            
            {
                       ( bustype==="seater" || bustype==="semi sleeper" )?
                <Grid container className={classes.root} >
                  
                  
               
                {totalsittngseats.map((item)=>  
                {
                  return  ( selected.includes(item) )?  
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={item} onClick={()=>handleClick(item)} >
                    <img  className={classes.paper} src={Selected} alt="available" />
                    </Grid>
                    : (booked.includes(item))?
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={item}  >
                    <img  className={classes.paper} src={Booked} alt="available" />
                    </Grid>
                    :
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={item} onClick={()=>handleClick(item)} >
                    <img  className={classes.paper} src={Available} alt="available" />
                    </Grid>

                }
                
              
        )}
   

                        
                    </Grid>

                :
                <SleeperSitting bustype={bustype} selected={selected} booked={booked} handleClick={handleClick}/>
              }

                    

                    </Seats>
    )
}
