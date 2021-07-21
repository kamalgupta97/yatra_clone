import React from 'react';

import styles from  './SeatSelection.module.css';
import {LoadingIndicator} from '../../Components/LoadingIndicator/LoadingIndicator';
import styled from 'styled-components';
import Available from './Images/Available.png';
import Booked from './Images/Booked.png';
import BookedByLadies from './Images/BookedByladies.png';
import ForLadies from './Images/ForLadies.png';
import Selected from './Images/Selected.png';
import ForMale from './Images/ForMale.png';
import { Grid, Typography } from '@material-ui/core';
import { Points } from './Points';


const SeatSelectionWrapper =styled.div`

`
const SeatSelectionWrapperRight=styled.div`
 
    margin-left:25%;
    
    // height:100vh;
    padding:20px;
`
const DescriptionAnsStatus = styled.div`
    display:flex;
`
const H1 = styled.div`
    margin-bottom:10px;
    font-size:24px;
    // text-shadow: .2px .2px #000000;
    
`
const ArrangementWrapper = styled.div`
    width:48%;
    height:100vh;
    background:#f2f2f2;

`
const LowerUper =styled.div`
    width:100%;
    min-height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
  
`

const Buttons = styled.div`
    width:200px;
    border:1px solid #c4c4c4;
    height:40px;
   
`
const Sitting = styled.div`
    margin:2%;
    background:white;
    width:96%;
    min-height:350px;
`

const SeatStatus = styled.div`
margin:2%;
background:white;
width:96%;
min-height:120px;
// background:red;
`

const Para = styled.div`
    width:96%;
    margin:auto;
    margin-top:5%;
    &>p{
       font-size:12px;
    }
`

const TravelDescription=styled.div`
    // background:#f2f2f2;
    width:52%;
    height:100vh;
`

const DescHeading=styled.div`
background:#f2f2f2;
height:80px;
&>button{
    border:none;
    height:100%;
    background:none;
    font-size: 14px;
    font-weight:600;
    letter-spacing: 0.5px;
 }`


const SeatConfirmation=styled.div`
`
const BordingPoints=styled.div``
const DroppingPoints=styled.div``

const SeatConfirmationHeader = styled.div`
 margin:15px;
 &>p{
     font-size:18px;
     font-weight:600;
 }
`
const Bustype = styled.div`
margin:15px;
&>p{
    font-size:13px;
    font-weight:600;
    color:#000;
}
`
const Dates = styled.div`
margin:15px;
&>p{
    font-size:13px;
    font-weight:600;
    color:#000;
}
`
export const SeatSelection = () => {
    const [activelower,setActivelower] = React.useState(true)
    const [activeplace,setactiveplace] =React.useState(true)
    const [activeBordingpoint,setactiveBordingpoint] = React.useState(false)
    const [activeDroppingpoint,setactiveDroppingpoint] = React.useState(false)

    const handleClick=(e)=>{
        if(e.target.name==="activeplace"){
            setactiveplace(true)
            setactiveBordingpoint(false)
            setactiveDroppingpoint(false)
        }
        else if(e.target.name==="activeBordingpoint"){
        
                setactiveplace(false)
                setactiveBordingpoint(true)
                setactiveDroppingpoint(false)
         
        }
        else if(e.target.name==="activeDroppingpoint"){
                setactiveplace(false)
                setactiveBordingpoint(false)
                setactiveDroppingpoint(true)

        }
        // console.log(activeplace,activeBordingpoint,activeDroppingpoint) at this line why it is giving wrong output
    }

    return (
        <SeatSelectionWrapper>
            {/* {console.log(activeplace,activeBordingpoint,activeDroppingpoint)} */}
           <LoadingIndicator Custwidth={"25%"} icons={false}/>


           <SeatSelectionWrapperRight>
                <div>
                    <H1>Seat Preferences</H1>
                </div>

                <DescriptionAnsStatus>
                <ArrangementWrapper>
                    <LowerUper>
                        <Buttons>
                        <button className={ activelower? styles.activelower : styles.lower} onClick={()=>setActivelower(true)}>Lower Deck</button>
                        <button className={ activelower? styles.lower: styles.activelower  } onClick={()=>setActivelower(false)}>Upper Deck</button>
                        </Buttons>
                    </LowerUper>

                    <Sitting>
      
                    </Sitting>
                    <SeatStatus>

                    <Grid container className={styles.seatsStatusContainer}>
                        <Grid xs={6} sm={6} md={2} lg={2} xl={2} className={styles.seatsStatus}>
                            <img src={Available} />  
                            <p>Available</p>                             
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={2} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={Booked} />
                        <p>Booked</p>
                                                   
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={2} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={Selected} />
                        <p>Selected</p>

                           
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={2} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={BookedByLadies} />
                        <p>Booked</p>
                              
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={2} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={ForLadies} />
                        <p>For Ladies</p>
    
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={2} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={ForMale} /> 
                        <p>For Male</p>
                              
                        </Grid>
                    </Grid>
         
        
                <Para>
                    <p>
                    The seat numbers are indicative & not guaranteed. The bus operator reserves the right to change the seat numbers
                    </p>
                </Para>
                        
                       

                    </SeatStatus>
                </ArrangementWrapper>
                <TravelDescription>
                   <DescHeading>
                        <button className={activeplace && styles.activebuttons} name="activeplace" onClick={handleClick}>Delhi-Jaipur</button>
                        <button className={activeBordingpoint && styles.activebuttons} name="activeBordingpoint" onClick={handleClick}>Bording Points</button>
                        <button className={activeDroppingpoint && styles.activebuttons} name="activeDroppingpoint" onClick={handleClick}>Dropping Points</button>

                   </DescHeading>
                    {
                        activeplace && <SeatConfirmation>
                            <SeatConfirmationHeader>
                                <p>{"Kamal Travels Regd."}</p>
                            </SeatConfirmationHeader>
                            <Bustype>
                                <p>{"A-C Seater - Sleeper (2+1)"}</p>
                            </Bustype>

                            <Dates>
                                <p>{"Date: Thu, 22 Jul, 2021 Time: 03:00 PM - 08:22 PM"}</p>
                            </Dates>
                        </SeatConfirmation>

                    }

                    {
                        activeBordingpoint&&<BordingPoints>
                            <Points BordingPoints={true}/>
                        </BordingPoints>
                    }
                    {
                        activeDroppingpoint&&<DroppingPoints>
                             <Points BordingPoints={false}/>
                        </DroppingPoints>
                    }


                </TravelDescription>
                </DescriptionAnsStatus>

           </SeatSelectionWrapperRight>
        




        </SeatSelectionWrapper>
    )
}

               