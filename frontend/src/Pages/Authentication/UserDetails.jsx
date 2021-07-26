import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
width:97%;

`
const Button =styled.button`
    width:100%;
`

export const UserDetails = () => {
    return (
        <div>
            <div style={{width:'300px',background:'red'}}>
            <Input></Input>
            </div>
            <div style={{width:'300px',background:'red'}}>
            <Button>Hi</Button>
            </div>
            
           
          

        </div>
    )
}
