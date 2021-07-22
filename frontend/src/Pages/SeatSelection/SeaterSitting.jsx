import { Grid } from '@material-ui/core';
import React from 'react';
import Available from './Images/Available.png';
import Booked from './Images/Booked.png';
import Selected from './Images/Selected.png';
import styled from 'styled-components';

const Seats =styled.div`
  

`


export const SeaterSitting = () => {
    return (
            <Seats>
                   {[1,2,3,4,5,6,7,8,9].map(item=> <Grid container >
                    <Grid xs={1} sm={1} md={1} lg={1} xl={1} ></Grid>
                    <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                    <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                    <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                    <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                          
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
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
                       <Grid container >
                       <Grid xs={1} sm={1} md={1} lg={1} xl={1} ></Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1}></Grid>    
                       <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        <Grid xs={1} sm={1} md={1} lg={1} xl={1} >
                            <img src={Available} alt="available"/>                            
                        </Grid>
                        </Grid>
                    </Seats>
    )
}
