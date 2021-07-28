import React from "react";
import styled from "styled-components";
import userProfile from "../../assets/user.png";
import amazon from "../../assets/amazon-.png";
import calendar from "../../assets/calendar.png";
import ecash from "../../assets/ecash.png";
import GST from "../../assets/GST.png";
import history from "../../assets/history.png";
import prefilled from "../../assets/prefilled.png";
import transfechash from "../../assets/transefechash.png";
import { Otpform } from "./Otpform";
import { useDispatch, useSelector } from "react-redux";
import { getLogin, sendOtp } from "../../Redux/Auth/authAction";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { loginSuccess } from "../../Redux/Auth/authAction";
import Navbar2 from "../../Components/Navbar2";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
 

const BodyWrapper = styled.div`
  background: #f5f5f5;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  @media (max-width: 800px) {
    height: auto;
  }
`;
const SignInWrapper = styled.div`

  width: 45%;

  height: 80%;
  margin: 10vh auto;
  // background:yellow;
  @media (max-width: 800px) {
    height: auto;
    width: 100%;
  }
`;

const HeadingWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 12%;
  padding-top: 10px;
  & > p:nth-child(1) {
    font-size: 24px;
    color: #000;
  }
  & > p:nth-child(2) {
    margin-top: 5px;
    font-size: 16px;
    color: #000;
  }
  @media (max-width: 800px) {
    height: auto;
    & > p:nth-child(1) {
      font-size: 20px;
      color: #000;
    }
    & > p:nth-child(2) {
      margin-top: 5px;
      font-size: 12px;
      color: #000;
      margin-bottom: 40px;
    }
  }
`;
const ContentWrapper = styled.div`
  height: 90%;
  width: 50%;
  margin:auto;
  box-shadow: 2px 2px 2px 2px #cdcdcd;

  border-radius: 10px;
  // background:green;
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;




const Label = styled.div`
  // background: red;
  margin:auto;
  width: 100%;


  & > label {
    color: #333;
    
  
  }
`;
const InsiderLebel=styled.div`
  width:87%;
  margin:auto;
`
const Input = styled.div`
  // background: red;
  margin: 10px auto;
  width: 100%;

  & > input {
    width: 87%;
    height: 40px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 2px 2px #cdcdcd;
    papdding: 10px;
    padding-left: 10px;
    margin: 0 5%;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #cdcdcd;
    }
  }
`;
const Button = styled.div`
  // background: red;
  width: 100%;

  margin: 30px auto;

  & > button {
    width: 90%;
    height: 40px;
    border: none;
    margin: 0 5%;
    border-radius: 3px;
    box-shadow: 0 2px 2px #cdcdcd;
    background: #ea2330;
    color: #fff;
  }
`;
const Terms = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 200;
`;

const Blue = styled.span`
  color: #3cbbf8;
`;
const TermsandConditions = styled.div`
  width: 85%;
  margin: 20px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #cdcdcd;
`;
const Arrow=styled.div`
    height:5%;
    text-align:left;
    width:90%;
    margin:auto;
    padding:10px 0;
    
`

export const UserDetails = () => {
  const [openotpform, setotpForm] = React.useState(false);
  const [mobileNo, setMobileNo] = React.useState("");
  const state = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = () => {
    axios.get("http://localhost:2244/auth/google").then((res) => {
      console.log(res);
      dispatch(loginSuccess());
      history.push("/");
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendOtp(mobileNo));
    setotpForm(true);
  };
  return (
    <BodyWrapper>
      <Navbar2/>
      {
        console.log(state)
      }
      <SignInWrapper>
        <HeadingWrapper>
          <p>Welcome to Yatra!</p>
          <p>We just need a few more details to create Yatra account</p>
        </HeadingWrapper>
        <ContentWrapper>
          <FormWrapper>
          
                <Arrow>
                    <ArrowBackIcon onClick={()=>setotpForm(false)}/>
                </Arrow>
            <form onSubmit={handleSubmit}>
              <Label>
                  <InsiderLebel>
                  <label htmlFor="">MOBILE NUMBER</label>
                  </InsiderLebel>
              </Label>
              <Input>
                <input
                  type="text"
                  placeholder="EMAIL ID / MOBILE NUMBER"
                  value={mobileNo}
                  required
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Input>
              <Label>
                  <InsiderLebel>
                  <label htmlFor="">EMAIL ID</label>   
                  </InsiderLebel>
              </Label>
            
              <Input>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  value={mobileNo}
                  required
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Input>
       
              <Label>
                  <InsiderLebel>
                  <label htmlFor="">CREATE PASSWORD</label>   
                  </InsiderLebel>
              </Label>
              <Input>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={mobileNo}
                  required
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Input>
              <Label>
                  <InsiderLebel>
                  <label htmlFor="">FULL NAME</label>   
                  </InsiderLebel>
              </Label>
            
              <Input>
                <input
                  type="email"
                  placeholder="Enter your Name"
                  value={mobileNo}
                  required
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Input>
              <Button>
                <button>Create Account</button>
              </Button>
            </form>
                                        
            <TermsandConditions>
              <Terms>
                By proceeding, you agree with our{" "}
                <Blue>Terms of Service, Privacy Policy</Blue> &{" "}
                <Blue>Master User Agreement.</Blue>
              </Terms>
            </TermsandConditions>

            
          </FormWrapper>
        </ContentWrapper>
      </SignInWrapper>

      
    </BodyWrapper>
  );
};
