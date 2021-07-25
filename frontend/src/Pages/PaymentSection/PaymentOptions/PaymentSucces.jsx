import React from 'react';
import styles from './PaymentSucces.module.css';
import success from '../Gif/success.gif'

export default function PaymentSucces() {
    return (
       <div className={styles.succeswrapper}>
            <div className={styles.Success}>
            <img width="100%" src={success}/>
                <h1>Payemnt Successful</h1>
            
            </div>
       </div>
    )
}
