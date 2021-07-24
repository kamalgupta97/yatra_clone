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
import driver from './Images/Driver.png'
import { Grid } from '@material-ui/core';
import { Points } from './Points';


import { requirement } from './requirement';
import { SeaterSitting } from './SeaterSitting';



const SeatSelectionWrapper =styled.div`
position:fixed;
width:100%;
height:100%;
opacity:1;

left:0;
top:0;
@media (max-width: 800px) {
    overflow-y:scroll;    
}
`

const CrossIcon = styled.button`
position: absolute;
right: 76%;
top:0;
color: #fff;
font-size: 15px;
z-index: 9999;
background: #000;
padding: 11px 17px;
cursor: pointer;
font-weight:900;
border:none;
display:flex;
@media (max-width: 800px) {
    display:none;
   
    }

`
const SeatSelectionWrapperRight=styled.div`
    background:#fff;
    margin-left:24%;
    
    // height:100vh;
    padding:20px;
    @media (max-width: 800px) {
        margin-left:0;
        }
`

const TobeHide=styled.div`
@media (max-width: 800px) {
    display:none;
    }
`
const DescriptionAnsStatus = styled.div`
    display:flex;
    @media (max-width: 800px) {
        flex-direction:column;
        }
`
const H1 = styled.div`
    color: rgba(0,0,0,0.9); 
    margin-bottom:10px;
    font-size:24px;
    // text-shadow: .2px .2px #000000; 
`
const ArrangementWrapper = styled.div`
    width:48%;
    height:100vh;
    background:#f2f2f2;
    @media (max-width: 800px) {
        width:100%;
        }
    

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
    height:350px;
    overflow-y:scroll;
    ::-webkit-scrollbar {
        width: 7px;
        border-radius:10px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        border-radius:10px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius:10px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
        border-radius:10px;
      }
`

const Driver = styled.div`
    width:55%;
    display:flex;
    justify-content:flex-end;
    
    margin:auto;
    // background:red;
    &>img{
        padding:10px;
    }

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
    
    width:52%;
    height:100vh;
    @media (max-width: 800px) {
        width:90%;
        background:#f2f2f2;  
        padding:5%; 
    
    }
`

const DescHeading=styled.div`
background:#f2f2f2;
display:flex;
height:60px;
&>button{
    border:none;
    height:100%;
    background:none;
    font-size: 14px;
    font-weight:600;
    letter-spacing: 0.5px;
    padding-left:20px;
    padding-right:20px;
    color: rgba(0,0,0,.8);
 }
 @media (max-width: 800px) {
    


}
 
 `
 


const SeatConfirmation=styled.div`
 
@media (max-width: 800px) {
    background:#fff;  
    padding:10px;    

}
`
const BordingPoints=styled.div`
 padding:10px;
 @media (max-width: 800px) {
    background:#fff;   
    padding:10px;    

}

`
const DroppingPoints=styled.div`
padding:10px;
@media (max-width: 800px) {
    background:#fff; 
    padding:10px;      

}
`

const SeatConfirmationHeader = styled.div`
 margin:15px;
 &>p{
     font-size:18px;
     font-weight:600;
     color: rgba(0,0,0,.8);
 }
`
const Bustype = styled.div`
margin:15px;
&>p{
    font-size:13px;
    font-weight:600;
    color: rgba(0,0,0,.8);
}
`
const Dates = styled.div`
margin:15px;
&>p{
    font-size:13px;
    font-weight:600;
    color: rgba(0,0,0,.8);
}`

const SelectCityWrapper = styled.div`
margin:15px;
&>p{
    font-size:13px;
    font-weight:600;
    color: rgba(0,0,0,.8);
}
&>select{
    width:100%;
    height:35px;
    border:1px solid #c4c4c4;
    padding-left:10px;
    padding-right:10px;
    color: rgba(0,0,0,.8);
}

`

const ConfirmButton = styled.button`
margin-top:20px;
border-radius: 4px;
color: rgba(0,0,0,.5);
background:#e0e0e0;
-webkit-box-shadow: 0 0 1px hsla(0,0%,100%,.5);
border:none;
padding :12px 24px;
font-weight:600;
`



export const SeatSelection = ({setopenSelectseat}) => {
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

    return  (
        <SeatSelectionWrapper>
            {/* {console.log(activeplace,activeBordingpoint,activeDroppingpoint)} */}
          <TobeHide><LoadingIndicator Custwidth={"24%"} icons={false}/></TobeHide>

            
           <SeatSelectionWrapperRight>
           <CrossIcon onClick={()=>setopenSelectseat(false)}>✖</CrossIcon>
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
                           
                   { activelower &&  <Driver>
                            <img src={driver} alt="driver" />
                            
                            </Driver>}

                            <SeaterSitting/>
                    </Sitting>
                    <SeatStatus>

                    <Grid container className={styles.seatsStatusContainer}>
                        <Grid xs={6} sm={6} md={6} lg={2} xl={2} className={styles.seatsStatus}>
                            <img src={Available} alt="available"/>  
                            <p>Available</p>                             
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={6} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={Booked} alt="booked"/>
                        <p>Booked</p>
                                                   
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={6} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={Selected} alt="selected"/>
                        <p>Selected</p>

                           
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={6} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={BookedByLadies} alt="bookedbyladies"/>
                        <p>Booked</p>
                              
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={6} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={ForLadies} alt="forladies"/>
                        <p>For Ladies</p>
    
                        </Grid>
                    
                        <Grid xs={6} sm={6} md={6} lg={2} xl={2} className={styles.seatsStatus}>
                        <img src={ForMale} alt="formale"/> 
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
                        <button className={activeplace && styles.activebuttons} name="activeplace" onClick={handleClick}>{requirement.source}-{requirement.destination}</button>
                        <button className={activeBordingpoint && styles.activebuttons} name="activeBordingpoint" onClick={handleClick}>Bording Points</button>
                        <button className={activeDroppingpoint && styles.activebuttons} name="activeDroppingpoint" onClick={handleClick}>Dropping Points</button>

                   </DescHeading>
                    {
                        activeplace && <SeatConfirmation>
                            <SeatConfirmationHeader>
                                <p>{requirement.agency_name}</p>
                            </SeatConfirmationHeader>
                            <Bustype>
                                <p>{requirement.bus_type}</p>
                            </Bustype>

                            <Dates>
                                <p>{`Date: ${requirement.travel_date} ${requirement.time}`}</p>
                            </Dates>

                            <SelectCityWrapper>
                                <p>
                                    Select Boarding Point
                                </p>
                                <select name="" id="">
                                    <option>Select Boarding Point</option>
                                    {
                                        
                                        requirement.bording.map(item=>
                                            <option value={`${item.point}-${item.time}`}>{`${item.point}-${item.time}`}</option>                                          
                                        )
                                    }
                                </select>
                            </SelectCityWrapper>

                            <SelectCityWrapper>
                                <p>
                                    Select Dropping Point
                                </p>
                                <select name="" id="">
                                    <option>Select Dropping Point</option>
                                    {
                                        
                                        requirement.dropping.map(item=>
                                            <option value={`${item.point}-${item.time}`}>{`${item.point}-${item.time}`}</option>                                          
                                        )
                                    }
                                </select>
                                <ConfirmButton>Confirm Seats</ConfirmButton>
                            </SelectCityWrapper>
                            
                        </SeatConfirmation>

                    }

                    {
                        activeBordingpoint&&<BordingPoints>
                            <Points BordingPoints={true} bording={requirement.bording}/>
                        </BordingPoints>
                    }
                    {
                        activeDroppingpoint&&<DroppingPoints>
                             <Points BordingPoints={false} bording={requirement.dropping}/>
                        </DroppingPoints>
                    }


                </TravelDescription>
                </DescriptionAnsStatus>

           </SeatSelectionWrapperRight>
        




        </SeatSelectionWrapper>
    )
}

               