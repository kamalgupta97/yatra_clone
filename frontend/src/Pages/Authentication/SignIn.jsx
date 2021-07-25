import React from 'react';
import styled from 'styled-components';
import userProfile from '../../assets/user.png';
import amazon from '../../assets/amazon-.png'
import calendar from '../../assets/calendar.png'
import ecash from '../../assets/ecash.png'
import GST from '../../assets/GST.png'
import history from '../../assets/history.png'
import prefilled from '../../assets/prefilled.png'
import transfechash from '../../assets/transefechash.png'
import { Otpform } from './Otpform';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../Redux/Auth/authAction';

const BodyWrapper = styled.div`
    background:#f5f5f5;
    height:100vh;
    width:100%;
    @media (max-width: 800px) {
        height:auto;
        }
`
const SignInWrapper = styled.div`
    width:45%;
   
    height:85vh;
    margin:auto;
    // background:yellow;
    @media (max-width: 800px) {
        height:auto;
        width:100%;
        }
`

const HeadingWrapper = styled.div`
    text-align:center;
    width:100%;
    height:12%;
    padding-top:10px;
    &>p:nth-child(1){
        font-size:24px;
        color:#000;
    }
    &>p:nth-child(2){
        margin-top:5px;
        font-size:16px;
        color:#000;
        
    }
    @media (max-width: 800px) {
        height:auto;
        &>p:nth-child(1){
            font-size:20px;
            color:#000;
            
        }
        &>p:nth-child(2){
            margin-top:5px;
            font-size:12px;
            color:#000;
            margin-bottom:40px;
        }
       
        }
`
const ContentWrapper = styled.div`
height:80%;
width:100%;
        box-shadow: 2px 2px 2px 2px #cdcdcd;

border-radius:10px;
// background:green;
display:flex;
@media (max-width: 800px) {
    width:100%;
    flex-direction:column;
    height:auto;
    }
`



const FormWrapper = styled.div`
    Width:50%;
    height:100%;
    background:#fff;
   
  
    @media (max-width: 800px) {
        width:100%;
        height:auto;
     
        }

`

const UserProfile = styled.div`
        width:100%;
        height:25%;
        background:#fff;
        display:flex;
        justify-content:center;
        margin:10px auto;
        
        &>img{
          
           
            
            
        }

`


const Label=styled.div`
        text-align:center;
        color: #333;
`

const Input=styled.div`
    background:red;
    margin:30px auto; 
    width:300px;

    &>input{
        width:100%;
        height:40px;
        border:none;
        border-radius:3px;
        box-shadow: 0 2px 2px #cdcdcd;
        papdding:10px;
        padding-left:10px;
        ::placeholder,
        ::-webkit-input-placeholder {
          color: #cdcdcd;
        }
        
    }  
`
const Button=styled.div`
    background:red;
    width:313px;

    margin:20px 20px 0 22px; 

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
const Terms  = styled.p`
    text-align:left;
    font-size:12px;
    font-weight:200;
`

const Blue = styled.span`
    color:#3cbbf8;
   
`
const TermsandConditions=styled.div`
    width:85%;
    margin:20px auto;
    padding-bottom:20px;
    border-bottom:1px solid #cdcdcd;
`
const GoogleButton = styled.div`
    width:50%;
    margin:auto;
    cursor:pointer;
`

const CancellationWrapper= styled.div`
Width:50%;
height:100%;
background:#fff;
display:flex;
align-content:center;

@media (max-width: 800px) {
    width:100%;
    height:auto;
    }
`

const CancellationPolicy = styled.div`
    height:95%;
    width:90%;
            // box-shadow: 0 2px 2px #cdcdcd;

    border-radius:10px;
    background:#fef2d8; //#feeab8
    margin:auto;


`
const CancellationPolicyHeading = styled.div`
        background:#feeab8;
        width:100%;
        height:10%;
        border-radius:10px 10px 0 0;
        text-align:center;
        line-height: 3;

`

const CancelationLine =styled.div`
    display:flex;
    width:95%;
    margin:10px auto;
    

`

const CancellationIcons = styled.div`
    width:30px;
    height:30px;
    border-radius:25px;
    // background:red;
`

const CancellationText = styled.div`
    width:80%;
    text-align:left;
    padding-top:5px;
    margin-left:5px;
`



export const SignIn = () => {
    const [openotpform,setotpForm] = React.useState(false)
    const [mobileNo,setMobileNo] = React.useState("")
    const state = useSelector(state => state.auth)

    console.log(state)
    const dispatch = useDispatch()
    const handleSubmit =(e)=>{
        e.preventDefault()
   
        dispatch(getLogin(mobileNo))
        setotpForm(true)
        
        
    }
    return (
        <BodyWrapper>
            <SignInWrapper>
                    <HeadingWrapper>
                          <p>Welcome to Yatra!</p>  
                          <p>Please Login/Register using your Email/Mobile to continue</p>
                    </HeadingWrapper>
                    <ContentWrapper>
                    <FormWrapper>
                        <UserProfile>
                            <img src={userProfile} alt="" />
                        </UserProfile>

                    <form onSubmit={handleSubmit}>
                        <Label>EMAIL ID / MOBILE NUMBER</Label>
                        <Input> 
                         <input  type="text" placeholder="EMAIL ID / MOBILE NUMBER" value={mobileNo} required onChange={(e)=>setMobileNo(e.target.value)}/> 
                       
                    </Input>
                    <Button>
                            <button  >
                                        Continue
                                    </button> 
                    </Button>
                     
                    </form> 
                         
                     <TermsandConditions>
                     <Terms>
                        By proceeding, you agree with our <Blue>Terms of Service, Privacy Policy</Blue>  & <Blue>
                        Master User Agreement.
                            </Blue>
                        </Terms>
                     </TermsandConditions>
                    
                    <GoogleButton>
                        <a href="http://localhost:2244/auth/google" target="_blank"><img   src="https://secure.yatra.com/content/social/images/btn_google_signin_dark_normal_web.png" alt=""/></a>
                    </GoogleButton>

                    </FormWrapper>
                        <CancellationWrapper>
                            <CancellationPolicy>
                                <CancellationPolicyHeading>Logged In/Registered users get MORE!</CancellationPolicyHeading>
                                <CancelationLine>
                                    <CancellationIcons>
                                                <img src={calendar} alt="" />
                                    </CancellationIcons>
                                    <CancellationText>
                                    <b>View/ Cancel/ Reschedule </b> bookings
                                    </CancellationText>
                                </CancelationLine>

                                <CancelationLine>
                                    <CancellationIcons>
                                    <img src={history} alt="" />
                                    </CancellationIcons>
                                    <CancellationText>
                                    Check booking <b>history</b>, manage <b>cancellations</b> & print <b>eTickets</b>
                                    </CancellationText>
                                </CancelationLine>

                                <CancelationLine>
                                    <CancellationIcons>
                                    <img src={prefilled} alt="" />

                                    </CancellationIcons>
                                    <CancellationText>
                                    Book faster with <b>Pre-Filled Forms</b>, saved <b>Travellers</b> & <b>Saved Cards</b>
                                    </CancellationText>
                                </CancelationLine>


                                <CancelationLine>
                                    <CancellationIcons>
                                    <img src={ecash} alt="" />

                                    </CancellationIcons>
                                    <CancellationText>
                                    Use Yatra <b>eCash</b> to get <b>discounts</b>
                                    </CancellationText>
                                </CancelationLine>


                                <CancelationLine>
                                    <CancellationIcons>
                                    <img src={transfechash} alt="" />

                                    </CancellationIcons>
                                    <CancellationText>
                                    <b>Transfer eCash</b> to your <b>Family/Friends</b>
                                    </CancellationText>
                                </CancelationLine>


                                <CancelationLine>
                                    <CancellationIcons>
                                    <img src={amazon} alt="" />

                                    </CancellationIcons>
                                    <CancellationText>
                                    <b>Convert eCash</b> to <b>Shopping Coupons</b> from <b>Amazon</b>, BookMyShow, etc.
                                    </CancellationText>
                                </CancelationLine>

                                <CancelationLine>
                                    <CancellationIcons>
                                    <img src={GST} alt="" />

                                    </CancellationIcons>
                                    <CancellationText>
                                    Do you have GST number?Additional Benefits of<b> Free Meals, Low Cancellation Fee, Free Rescheduling </b>for SME business customers
                                    </CancellationText>
                                </CancelationLine>
                                








                            </CancellationPolicy>
                        </CancellationWrapper>
                    </ContentWrapper>
            </SignInWrapper>

            {
                openotpform && <Otpform setotpForm={setotpForm} mobileNo={mobileNo}/>
            }
        </BodyWrapper>
    )
}
