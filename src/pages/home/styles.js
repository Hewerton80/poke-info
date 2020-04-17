import styled from 'styled-components';
import {colors, typesColors } from '../../styles/colors'
export const Main = styled.main`
    display: flex;
    max-width: 992px;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    button.submenu{
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding:10px;
        font-size: 24px;
        color: ${colors.prim1};
        border: 2px solid ${colors.prim1};
        border-radius: 5px;
        background: #FFF;
        margin: 50px 16px 0 16px;
        transition-duration: .3s;
        &:hover{
            color: #FFF;
            background: ${colors.prim1}; 
            opacity: .7;         
        }
    }
    button.submenu.active{
        background: ${colors.prim1}; 
        color: #FFF;
    }
    
    .container-poke,.container-type{
        display: none;
        width:100%;
        flex-direction: column;
        margin-bottom: 50px;
    }
    .show{
        display: flex;
    }
    #poke{
        margin-top: 50px;
        cursor: pointer;
        border:1px solid ${colors.sec1};
        border-radius: 5px;
        max-width: 180px;
        
        overflow: hidden;
        #avatar{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: hidden;
            height: 180px;
            width: 180px;
            position: relative;
            img{
                position: absolute;
                width:100%;
                height: 100%;
                transition-duration: .3s;
                &:hover{
                    transform: scale(1.3);
                }
            }
        }
        #name{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            width: 180px;
            overflow: hidden;
            margin: 0 auto;
            h3{
                font-size: 10px;
                text-align: center;
                padding:12px 8px;
                font-family: 'Press Start 2P';    
                background: -webkit-linear-gradient(${colors.sec1} 50%,  ${colors.sec2}  50%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

    }
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px;
        
        ul.MuiPagination-ul{
             justify-content: center;
            
        }
    }
          
`
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
    /* &:hover{
        opacity: .7; 
        transform: scale(1.05); 

    } */
`;