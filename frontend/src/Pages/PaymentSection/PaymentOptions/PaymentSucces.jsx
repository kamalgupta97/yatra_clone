import React from 'react';
import styles from './PaymentSucces.module.css';
import success from '../Gif/success.gif'

export default function PaymentSucces() {
    return (
       <div className={styles.succeswrapper}>
            <div className={styles.Success}>
            <img width="600px" src={success}/>
                <h1 style={{color:"#11bf71"}}>Payemnt Successful</h1>
            
            </div>
       </div>
    )
}
