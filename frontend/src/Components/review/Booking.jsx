import React from 'react'
import yatralogo from "../../assets/yatra_logo.svg"
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import reviewicon from "../../assets/review.png"
import adduser from "../../assets/add-user.png"
import styles from "./Booking.module.css"



export const Booking = () => {
    return (
        <div className={styles.body}>
            <nav className={styles.navbar}>
                <img src={yatralogo} width="200px" alt="img"/>
            </nav>
            <div className={styles.bodyWidth}>
               <div className={styles.rel}>
                    <div className={styles.justify}>
                        <div className={`${styles.flex} ${styles.gradient}`}>
                            <img src={reviewicon} alt="img"/>
                            <div>Review Your booking</div>
                        </div>
                        <div>
                            Change Bus
                        </div>
                    </div>
                    <div className={styles.reviewBox}>
                        <div>
                            <DirectionsBusIcon/>
                            <div>SHAKTI TRAVELS</div>
                            <div>Ac Sester-sleeper (2+1)</div>
                        </div>
                        <div>
                            <div className={styles.justify}>
                                <div>
                                    <div>Delhi</div>
                                    <div>01:00 AM</div>
                                    <div>Sat, 24 Jul 2021</div>
                                </div>
                                <div className={styles.justify}>
                                    <div>5h 15m</div>
                                    <div>|</div>
                                    <div>281km</div>
                                </div>
                                <div>
                                    <div>Jaipur</div>
                                    <div>06:15 AM</div>
                                    <div>sat, 24 Jul 2021</div>
                                </div>
                            </div>
                            <div className={styles.justify}>
                                <div>
                                    |
                                </div>
                                <div >
                                    <div className={styles.boarding}>
                                        <div>Boarding Point & Time</div>
                                        <div>fatehpur: 01:00 AM</div>
                                    </div>
                                    <div className={styles.boarding}>
                                        <div>Dropping Point & Time</div>
                                        <div>Near Sindhi Camp: 06:25 AM</div>
                                    </div>
                                </div>
                                <div>
                                    <div>Seat Numbers(s)</div>
                                    <div>SL1</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.flex}>
                        <div className={`${styles.flex} ${styles.gradient}`}>
                            <img src={adduser} alt="img"/>
                            <div>Enter Traveller Details</div>
                        </div>
                        <div>|</div>
                        <div>Sign In</div>
                        <div>to book faster</div>
                        
                        
                    </div>
                    <div className={styles.addBox}>
                        <div className={styles.justify}>
                            <div>Conatct Details</div>
                            <input type="text" 
                                placeholder="Email Id"
                            />
                            <select >

                            </select>
                        </div>
                        <div>Your booking details will be sent to this email address and mobile number.</div>
                        <hr/>
                        <div className={styles.justify}>
                            <div>Seat SL1</div>
                            <input type="text" 
                                placeholder="Traveller Name"
                            />
                            <select>

                            </select>
                            <select>

                            </select>
                        </div>
                
                    </div>
                        <button className={styles.button}>Proceeed To Payment</button>
                </div>
                
               <div>
                   <div>Fare Details</div>
                   <div>
                       <div>
                           <div>Onward Fare(1 Traveller)</div>
                           <div>893</div>
                       </div>
                       <div>
                           <div>You Pay:</div>
                           <div>893</div>
                       </div>
                   </div>
                   <div>Promo Code</div>
                   <div>
                       <div>Select a Promo Code</div>
                       <input type="text" 
                            placeholder="YOUR PROMO CODE"
                       />
                       <button>Apply</button>
                       <div>
                           <input type="radio" />
                           <div>BUSONYATRA</div>
                           <div>Flat 9% off(Max Rs. 200)</div>
                       </div>
                   </div>
               </div> 
            </div>
            
        </div>
    )
}
