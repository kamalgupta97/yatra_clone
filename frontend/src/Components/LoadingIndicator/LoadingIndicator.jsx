import React from 'react';
import styled from 'styled-components';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

const Loader = styled.div`
position:fixed;
width:100%;
height:100%;
background-color:#000000;
opacity:0.6;
left:0;
top:0;
`

const style ={
    position:'fixed',
    top:'50%',
    left:'50%',
    color:'c4c4c4',
    fontSize:'40px'
}
export const LoadingIndicator = ({Custwidth,icons}) => {
    return (
        <Loader style={{width:Custwidth}}>
           {icons && <ViewColumnIcon style={style} className="App-logo"/> }
        </Loader>
    )
}
