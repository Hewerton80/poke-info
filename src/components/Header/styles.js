import styled from 'styled-components';
import {colors} from   '../../styles/colors'
import { lighten } from 'polished';
export const Header = styled.header`

    height: 56px;
    background: ${colors.prim1};
    background: linear-gradient( 90deg,${colors.prim2} 0%, ${colors.prim1} 100%);
    display:flex;
    justify-content: center;
    padding: 0 60px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    .headerContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width:980px;
        /* margin:0 auto; */
        width: 100%;
        height: 100%;
        .logo{
            display:flex;
            
            align-items: center;
            height: 100%;
            img{
                width:120px;
            }
        }
        nav{
            display:flex;
            height: 100%;
            width: 100%;
            ul{
                display: flex;
                justify-content: flex-end;
                width: 100%;
                height: 100%;
                li{
                    height: 100%; 
                    &:hover{
                        background: ${lighten(0.05,colors.prim1)};
                    }
                    a{
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 24px;
                        font-size: 18px;
                        font-weight: bold;
                        color: #fff;
                    }  
                }       
                li.active{
                    /* background: ${lighten(0.01,colors.prim1)}; */
                    border-bottom: 4px solid;    
                }        
                li.pokemons{
                    border-color: ${colors.terc1};
                    a{
                        color: ${colors.terc1};
                    }
                }
                li.tipos{
                    border-color: ${colors.quar1};
                    a{
                        color: ${colors.quar1};
                    }
                }
                li.habilidades{
                    border-color: ${colors.quint1};
                    a{
                        color: ${colors.quint1};
                    }
                }
                li.itens{
                    border-color: ${colors.sext1};
                    a{
                        color: ${colors.sext1};
                    }
                }
   
            }
        }
        /* .infouser{
            display:flex;
            align-items: center;
            height: 100%;
            svg{
                margin-right:15px;
                transform: scale(1.2);
            }
            
  
            button{
                outline: none;
                border: none;
                background: transparent;
                font-size: 18px;
                color: #fff;
            }
            
        } */
    }
    /* li.item{
        width: auto;
        overflow: hidden;
        font-size: 1rem;
        box-sizing: border-box;
        min-height: 48px;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        padding-top: 6px;
        white-space: nowrap;
        letter-spacing: 0.00938em;
        padding-bottom: 6px;
    } */
`