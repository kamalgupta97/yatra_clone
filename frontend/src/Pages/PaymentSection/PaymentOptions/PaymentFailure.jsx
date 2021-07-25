import React from 'react'
import styles from './PaymentFailure.module.css'

export default function PaymentFailure({src,text}) {
    return (
        <div  className={styles.failurewrapper}>
              <div className={styles.failure}>
                  <img src={src} alt="" />
                <h1  style={{color:"red"}} >{text}</h1>
            </div>

        </div>
      
    )
}
