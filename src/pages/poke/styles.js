import styled from 'styled-components';
import {colors, typesColors } from '../../styles/colors'
export const Main = styled.main`
    display: ${props=>props.show?'flex':'none'};
    max-width: 992px;
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
        width:100%;
        margin:0 50px;
        img{
            width:100%;
        }
    }
    .infos{
        display: flex;
        flex-direction:column;
        width:100%;
        border-radius:15px;
        padding: 20px 40px 40px 40px;
        border: 2px solid ${colors.prim1};
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
                background: ${colors.prim1};
                padding: 5px;
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

`;
export const Type = styled.span`
    padding: 5px;
    border-radius: 5px;
    color: ${props=>typesColors[props.type][2]};
    background: linear-gradient(${props=>typesColors[props.type][0]} 50%, ${props=>typesColors[props.type][1]}  50%);
    margin-right: 8px;
`;