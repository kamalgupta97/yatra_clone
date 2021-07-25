import React from 'react';

import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import OTP from '../../assets/otp.png';
import background from '../../assets/background.png'
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../Redux/Auth/authAction';


const Loader = styled.div`
position:fixed;
width:100%;
height:100%;

background-color:rgba(49,49,49,0.9);
left:0;
top:0;
z-index: 1000;
`
const Form = styled.div`

    position:relative;
    margin:10px auto;
    padding:20px;
    width:23%;
    height:70vh;
    background:#fff;
    background-image: url("blob:https://web.whatsapp.com/b88062a2-ceb5-472f-a67f-77368f6c8383");
    opacity:2 !important;
   
    border-radius:10px;
    text-align:center;
 
`

const Heading=styled.div`
    height:10%;
`
const Image= styled.div`
    height:25%;


`
const Arrow=styled.div`
    height:5%;
    text-align:left;
`

const Para=styled.div`
    height:10%;    
`
const Number=styled.div`
    height:10%;    
`
const Input=styled.div`
    height:20%;    
`
const Button=styled.div`
    height:10%;  
    width:90%;
    margin:auto;
    &>button{
        width:100%;
        height:40px;
        border:none;
        margin:auto;
        border-radius:3px;
        box-shadow: 0 2px 2px #cdcdcd;
        background:#ea2330;
        color:#fff;
       

        
    }  
`

const Resend = styled.div`
    height:10%;  
    color:#3cbbf8;
`









export const Otpform = ({setotpForm,mobileNo}) => {
    const [otp,setOtp]=React.useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state.auth)
    console.log(state)
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(otp)
        const payload ={
            mobile:mobileNo,
            OTPcode:otp
        }
        dispatch(verifyOtp(payload))

    }
    return (
        <Loader>
            <form onSubmit={handleSubmit}>
            <Form>
                <Heading>
                        <p>Verify Your Mobile Number</p>
                </Heading>
                <Arrow>
                    <ArrowBackIcon onClick={()=>setotpForm(false)}/>
                </Arrow>
                <Image>
                    <img src={OTP} alt="" />
                </Image>
                <Para>
                        <p>An OTP (valid for next 15 mins.) has been sent to you on your Mobile number</p>
                </Para>
                
                <Number>
                        <h4>+91 {mobileNo}</h4>
                </Number>
                
                <Input>
                  <TextField id="standard-basic" label="Enter Mobile Otp" onChange={(e)=>setOtp(e.target.value)} required/>
                </Input>

                <Button>
                    <button >
                        Submit
                    </button>
                </Button>
           
                <Resend>
                        Resend
                </Resend>
            
            </Form>
            </form>

     </Loader>
    )
}






