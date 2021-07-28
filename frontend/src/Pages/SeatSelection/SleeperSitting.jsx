import React from 'react';
import sleeper_available from './Images/sleeper_available.png'
import booked_sleeper from './Images/booked_sleeper.png'
import sleeper_selected from './Images/sleeper_selected.png';
import {totalsleeperseats} from './requirement';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export const SleeperSitting = ({bustype,selected,booked,handleClick}) => {
    const classes = useStyles();
    return (
        <div>
            {
                        bustype==="sleeper" &&
                        <Grid container className={classes.root} >
                  
                  
               
                        {totalsleeperseats.map((item)=>  
                        {
                          return  (selected.includes(item))?
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={item} onClick={()=>handleClick(item)} >
                            <img  className={classes.paper} src={sleeper_selected} alt="available" />
                            </Grid>
                            : (booked.includes(item))?
                            <Grid xs={4} sm={4} md={4} lg={4} xl={4} item key={item}  >
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
            
        </div>
    )
}
