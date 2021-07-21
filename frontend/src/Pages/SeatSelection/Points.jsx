import React from 'react'

export const Points = ({BordingPoints}) => {

    return (
        <div>
           
        {
            BordingPoints? <div>Bording Point</div> : <div>Dropping Point</div>
        }
         </div>
    )
}
