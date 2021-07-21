import react from 'react';

import styles from  './SeatSelection.module.css';
import {LoadingIndicator} from '../../Components/LoadingIndicator/LoadingIndicator'

export const SeatSelection = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Selection Page</h1>
            <LoadingIndicator/>
        </div>
    )
}
