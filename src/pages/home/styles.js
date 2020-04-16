import styled from 'styled-components';
import {colors } from '../../styles/colors'
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
    #poke{
        margin-top: 50px;
        cursor: pointer;
        background: #EEE;
        border-radius: 5px;
        #avatar{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: hidden;
            min-height: 215px;
            min-width: 215px;
            img{
                width:100%;
                transition-duration: .3s;
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        #name{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            h3{
                padding:6px 0 12px 0;
                font-family: 'Press Start 2P';    
                background: -webkit-linear-gradient(#8f8f8f 50%,  #6d6E6E  50%);
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