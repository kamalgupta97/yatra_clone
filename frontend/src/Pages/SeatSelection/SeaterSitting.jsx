import { Grid } from '@material-ui/core';
import React from 'react';
import Available from './Images/Available.png';
import Booked from './Images/Booked.png';
import Selected from './Images/Selected.png';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const Seats =styled.div`
  

`
const useStyles = makeStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 0 0 250px',
   
        
    },
    grids:{
        
        background:'red',
    }
  });


export const SeaterSitting = () => {
    const classes = useStyles();
    return (
            <Seats>
                   {[1,2,3,4,5,6,7,8,9].map(item=> <Grid container className={classes.root} >
                  
               
                          
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} className={classes.grids}>
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        
                    </Grid>)
                       }
                       <Grid container  className={classes.root}>
                       
                       <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Booked} alt="Booked"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Booked} alt="Booked"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Booked} alt="Booked"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Booked} alt="Booked"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Booked} alt="Booked"/>                            
                        </Grid>
                        </Grid>
                    </Seats>
    )
}
