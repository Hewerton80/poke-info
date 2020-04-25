import styled from 'styled-components';
import {colors, typesColors } from '../../styles/colors';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ButtonType = styled.button`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding:8px;
    font-size: 16px;
    color: ${props=>typesColors[props.type][2]};
    border: 0;
    border-radius: 5px;
    background: linear-gradient(${props=>typesColors[props.type][0]} 50%, ${props=>typesColors[props.type][1]}  50%);
    margin: 50px 16px 0 16px;
    transition-duration: .3s;
    cursor: context-menu;
    div{
        display: flex;
        width:100%;
        flex-direction: column;
        margin-bottom: 50px;  
    }
    /* &:hover{
        opacity: .7; 
        transform: scale(1.05); 

    } */
`;