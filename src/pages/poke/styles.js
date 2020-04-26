import styled from 'styled-components';
import {colors, typesColors } from '../../styles/colors'
export const Container = styled.main`
    display: 'flex';
    flex-direction: column;
    width: 100%;
    margin: 50px auto 0px auto;
    h1.pokename{
        margin-bottom: 50px;
        text-align: center;
        padding:12px 8px;
        font-family: 'Press Start 2P';    
        background: -webkit-linear-gradient(${colors.sec1} 50%,  ${colors.sec2}  50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    span.avatar{
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        padding: 0 16px;
        margin-bottom:50px;
        img{
            max-width: 400px;
            width:100%;
        }
    }
    .container-info{
        display: flex;
        width: 100%;
        padding: 0 16px;
        .infos{
            display: flex;
            flex-direction:column;
            margin-bottom: 50px;
            width:100%;
            border-radius:15px;
            padding: 20px 40px 40px 40px;
            border: 2px solid ${colors.prim1};
            height: fit-content;
            .att{
                display: flex;
                align-items: flex-end;
                flex-wrap: wrap;            
                width:100%;
                p{
                    font-size: 24px;
                    margin-top:20px;
                    margin-right: 8px;

                }                
                span{
                    font-size: 18px;
                    margin-top:25px;
                }
                span#ability{
                    font-size: 14px;
                    background: ${colors.prim1};
                    padding: 4px;
                    border-radius: 5px;
                    color: #FFF;
                    margin-right: 8px;         
                }

            }
            .evolution{
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                flex-wrap: wrap;
                span{
                    display: flex;
                    
                    img{
                        width: 50px;
                        margin-right: 8px;
                    }       
                }
            }
        }
    }
    a{
        width:100%;
    }
    button{
        svg{
            margin-right: 10px;
            transform: scale(1.3);
        }
        width:100%;
        margin-top: 20px;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:10px;
        font-size: 24px;
        color: #fff;
        border: 2px solid ${colors.prim1};
        border-radius: 15px;
        background: ${colors.prim1};
        transition-duration: .3s;
        &:hover{
            background: ${colors.prim1};
            opacity: .7;         
        }
    }

`;
export const Type = styled.span`
    padding: 5px;
    border-radius: 5px;
    color: ${props=>typesColors[props.type][2]};
    background: linear-gradient(${props=>typesColors[props.type][0]} 50%, ${props=>typesColors[props.type][1]}  50%);
    margin-right: 8px;
`;