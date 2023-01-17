import styled from 'styled-components';
import ButtonStyled from './Button';

export const StyledButton = styled.button`
    // Put the styles

    background-color: ${(props) => 
        props.backgroundColor ? 
        props.backgroundColor : 'red'
    };
    width: 100px;
    height: 60px;
    cursor: pointer;

    &:hover {
        background-color: #df6969ac;
    }

    &:active {
        background-color: #69df6fac;
    }

`

export const Button2 = styled(ButtonStyled)`
    background-color: aliceblue;
    width: 100px;
    height: 60px;
    cursor: pointer;
`