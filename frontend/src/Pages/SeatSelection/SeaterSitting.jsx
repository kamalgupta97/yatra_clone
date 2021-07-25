import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Available from './Images/Available.png';
import Booked from './Images/Booked.png';
import Selected from './Images/Selected.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {totalsittngseats} from './requirement';
import {totalsleeperseats} from './requirement';


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


export const SeaterSitting = ({setSelected,selected}) => {
    let bustype="Sleeper"
    const classes = useStyles();
  

    let booked =[1,2,3,4]
    console.log(totalsleeperseats)
    console.log(totalsittngseats)
      
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
                       ( bustype==="seater" || bustype==="semisleeper" ) &&
                <Grid container className={classes.root} >
                  
                  
               
                {totalsittngseats.map((item)=>  
                {
                  return  ( selected.includes(item) )?
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={item} onClick={()=>handleClick(item)} >
                    <img  className={classes.paper} src={Selected} alt="available" />
                    </Grid>
                    : (booked.includes(item))?
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={item} onClick={()=>handleClick(item)} >
                    <img  className={classes.paper} src={Booked} alt="available" />
                    </Grid>
                    :
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} item key={item} onClick={()=>handleClick(item)} >
                    <img  className={classes.paper} src={Available} alt="available" />
                    </Grid>

                }
                
              
        )}
   
                        
             
                        
                    </Grid>
}

                    {
                        bustype==="Sleeper" &&
                        <Grid container className={classes.root} >
                  
                  
               
                        {totalsleeperseats.map((item)=>  
                        {
                          return  (selected.includes(item))?
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={item} onClick={()=>handleClick(item)} >
                            <img  className={classes.paper} src={sleeper_selected} alt="available" />
                            </Grid>
                            : (booked.includes(item))?
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={item} onClick={()=>handleClick(item)} >
                            <img  className={classes.paper} src={booked_sleeper} alt="available" />
                            </Grid>
                            :
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={item} onClick={()=>handleClick(item)} >
                            <img  className={classes.paper}  src={sleeper_available}  alt="available" />
                            </Grid>
        
                        }
                        
                      
                )}
           
                                
                            
                                
                            </Grid>
                    }

                    </Seats>
    )
}
