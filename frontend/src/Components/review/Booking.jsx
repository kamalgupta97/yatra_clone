import React from 'react'
import yatralogo from "../assets/yatra_logo.svg"
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import styles from "./Booking.module.css"

export const Booking = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <img src={yatralogo} width="200px" alt="img"/>
            </nav>
            <div className={styles.body}>
            <div className={styles.bodyWidth}>
               <div className={styles.reviewBox}>
                    <div className={styles.justify}>
                        <div className={styles.flex}>
                            <DescriptionOutlinedIcon/>
                            <div>Review Your booking</div>
                        </div>
                        <div>
                            Change Bus
                        </div>
                    </div>
                        <div>
                            <div>
                            <DirectionsBusIcon/>
                            <div>SHAKTI TRAVELS</div>
                            <div>Ac Sester-sleeper (2+1)</div>
                        </div>
                        <div>
                            <div>
                                <div>Delhi</div>
                                <div>01:00 AM</div>
                                <div>Sat, 24 Jul 2021</div>
                            </div>
                            <div>
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
                        <div>
                            <div>
                                |
                            </div>
                            <div>
                                <div>
                                    <div>Boarding Point & Time</div>
                                    <div>fatehpur: 01:00 AM</div>
                                </div>
                                <div>
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
                    <div>
                        <div>
                            <PersonAddOutlinedIcon/>
                            <div>Enter Traveller Details</div>
                            <div>|</div>
                            <div>Sign In</div>
                            <div>to book faster</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>Conatct Details</div>
                            <input type="text" 
                                placeholder="Email Id"
                            />
                            <select >

                            </select>
                        </div>
                        <div>Your booking details will be sent to this email address and mobile number.</div>
                        <hr/>
                        <div>
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
                    <botton>Proceeed To Payment</botton>
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
            <div>
                
            </div>
        </div>
    )
}
