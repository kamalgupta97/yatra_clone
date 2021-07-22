import React from 'react';
import styled from 'styled-components';

const HeadingPara = styled.div`
    font-size:16px;
    color: rgba(0,0,0,.8);
`

const Heading = styled.div`
    margin-top:10px;
    width:95%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#f2f2f2;
    padding:8px;
    &>p{
        color: rgba(0,0,0,1); 
    }
`

const StopsTiming = styled.div`
    dmargin-top:10px;
    width:95%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:8px;
    color: rgba(0,0,0,0.8); 
    &>div{
        width:80%;
    }
    &>div>p{
       
    }
    
`





export const Points = ({BordingPoints,bording}) => {

    return (
        <div>
           
        {
            BordingPoints? 
            <div>
            <HeadingPara>Onward Bording Point</HeadingPara> 
            <Heading>
                <p>Address</p>
                <p>Depart Time</p>
            </Heading>
            
            

            {
                bording.map(item=>
                    // <div>
                    //     {item.point}
                    // </div>

                    
                <StopsTiming>
                <div>
                <p>
                    {item.point}
               </p>

                </div>

                <p>
                {item.time}
                </p>
                </StopsTiming>
                    )
            }



            
            
            </div>
            
            
            : 
            <div>
            <HeadingPara>Onward Dropping Point</HeadingPara>
            <Heading>
                <p>Address</p>
                <p>Depart Time</p>
            </Heading>
            
            
            {
                bording.map(item=>
                    // <div>
                    //     {item.point}
                    // </div>

                    
                <StopsTiming>
                <div>
                <p>
                    {item.point}
               </p>

                </div>

                <p>
                {item.time}
                </p>
                </StopsTiming>
                    )
            }
            
            </div>
        }
         </div>
    )
}
