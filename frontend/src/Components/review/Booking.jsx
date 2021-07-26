import React from "react";
import {useHistory} from "react-router-dom"
import yatralogo from "../../assets/yatra_logo.svg";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import reviewicon from "../../assets/review.png";
import adduser from "../../assets/add-user.png";
import styles from "./Booking.module.css";
import Footer from "../Footer";
import { useSelector } from "react-redux";

export const Booking = () => {
  const country = ["+91", "+92", "+62", "+65", "+81","+67"]
  const age = ["age", 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
  const state = useSelector(state => state.bus)

  const {selected_seats_data, data} = state
  const total = selected_seats_data.selected.length
  const totalfare = total*data.bus[0].fare
  console.log(selected_seats_data, total, totalfare)

  const history = useHistory();

  const handleClick =() => {
      history.push("/payment")
  }

  // React.useEffect(()=>{
  //     //console.log(state)
  // })
  return (
    <>
      <div className={styles.body}>
        <nav className={styles.navbar}>
          <img src={yatralogo} width="200px" alt="img" />
        </nav>
        <div className={styles.bodyWidth}>
          <div className={styles.rel}>
            <div className={styles.justify}>
              <div className={`${styles.flex} ${styles.gradient}`}>
                <img src={reviewicon} alt="img" />
                <div>Review Your booking</div>
              </div>
              <div className={styles.bluefont}>Change Bus</div>
            </div>
            <div className={styles.reviewBox}>
              <div className={styles.bus}>
                <DirectionsBusIcon
                  style={{ fontSize: "100px", color: "rgb(102,102,102)" }}
                />
                <div className={styles.boldfont}>{data.bus[0].operator}</div>
                <main className={styles.boldfont}>{data.bus[0].bustype}</main>
              </div>
              <div>
                <div className={styles.justifyReview}>
                  <div>
                    <div>{data.bus[0].source}</div>
                    <div className={styles.bigboldfont}>01:00 AM</div>
                    <div className={styles.boldfont}>Sat, 24 Jul 2021</div>
                  </div>
                  <div className={styles.justify}>
                    <div>{data.bus[0].duration}</div>
                    <div> | </div>
                    <div>281km</div>
                  </div>
                  <div>
                    <div>{data.bus[0].destination}</div>
                    <div className={styles.bigboldfont}>06:15 AM</div>
                    <div className={styles.boldfont}>sat, 24 Jul 2021</div>
                  </div>
                </div>
                <hr />
                <div className={styles.justifyBoarding}>
                  <div>
                    <div className={styles.boarding}>
                      <div className={styles.grayfont}>Boarding Point & Time</div>
                      <div>fatehpur: 01:00 AM</div>
                    </div>
                    <div className={styles.boarding}>
                      <div className={styles.grayfont}>Dropping Point & Time</div>
                      <div>Near Sindhi Camp: 06:25 AM</div>
                    </div>
                  </div>
                  <div className={styles.seatnumber}>
                    <div className={styles.grayfont}>Seat Numbers(s)</div>
                    <div>{selected_seats_data.selected.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.flex}>
              <div className={`${styles.flex} ${styles.gradient}`}>
                <img src={adduser} alt="img" />
                <div>Enter Traveller Details</div>
              </div>
              <div>|</div>
              <div className={styles.bluefont}>Sign In</div>
              <div>to book faster</div>
            </div>
            <div className={styles.addBox}>
              <div className={styles.justifycontact}>
                <sub className={styles.boldfont}>Contact Details</sub>
                <div className={styles.subcontent}>
                  <input className={styles.emailId} type="text" placeholder="Email Id" />
                  <div className={styles.mobile}>
                    <select>
                        {
                          country.map(item => (
                            <option value={item}>{item}</option>
                          ))
                        }
                    </select>
                    <div>|</div>
                    <input type="text" placeholder="Mobile number" />
                  </div>
                </div>
              </div>
              <div className={styles.center}>
                Your booking details will be sent to this email address and
                mobile number.
              </div>
              <hr />
              <div className={styles.seatdetails}>
                {
                  selected_seats_data.selected.map((el, index) => (
                    <main >
                      <sub className={styles.boldfont}>{`Seats ${el}`}</sub>
                      <div className={styles.subcontent}>
                        <input type="text" placeholder="Traveller Name" />
                        <select>
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value ="female">Female</option>
                        </select>
                        <select>
                            {
                              age.map(item => (
                                <option value={item}>{item}</option>
                              ))
                            }
                        </select>
                      </div>
                    </main>
                  ))
                }
              </div>
            </div>
            <button onClick={handleClick} className={styles.button}>Proceeed To Payment</button>
          </div>

          <div className={styles.details}>
            <div className={styles.boldfont}>Fare Details</div>
            <div className={styles.fare}>
              <div className={styles.justifyOnward}>
                <div>{`Onward Fare(${total} Traveller): `}</div>
                <div>₹{totalfare}</div>
              </div>
              <div className={styles.justifyPay}>
                <div>You Pay:</div>
                <div>₹{totalfare}</div>
              </div>
            </div>
            <div className={styles.boldfont}>Promo Code</div>
            <div className={styles.promo}>
              <div>Select a Promo Code</div>
              <div>
                <input type="text" placeholder="YOUR PROMO CODE" />
                <button>Apply</button>
              </div>
              <div className={styles.promocode}>
                <input type="radio" />
                <div>
                  <div className={styles.code}>BUSONYATRA</div>
                  <div>Flat 9% off(Max Rs. 200)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  );
};
