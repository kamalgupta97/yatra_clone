import React from 'react';

import styles from  './SeatSelection.module.css';
import {LoadingIndicator} from '../../Components/LoadingIndicator/LoadingIndicator';
import styled from 'styled-components';

const SeatSelectionWrapper =styled.div`

`
const SeatSelectionWrapperRight=styled.div`
 
    margin-left:25%;
    
    // height:100vh;
    padding:20px;
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
min-height:150px;
`




export const SeatSelection = () => {
    const [activelower,setActivelower] = React.useState(false)
    return (
        <SeatSelectionWrapper>

           <LoadingIndicator Custwidth={"25%"} icons={false}/>

           <SeatSelectionWrapperRight>
                <div>
                    <H1>Seat Preferences</H1>
                </div>
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

                    </SeatStatus>
                </ArrangementWrapper>
           </SeatSelectionWrapperRight>
        




        </SeatSelectionWrapper>
    )
}

               