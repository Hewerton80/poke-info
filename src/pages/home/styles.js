import styled from 'styled-components';
import {colors } from '../../styles/colors';
import { dimensions } from '../../styles/dimensions';
import pokeanimation from '../../styles/images/poke.gif';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    .container-poke{
        display: flex;
        width:100%;
        flex-direction: column;
        margin-bottom: 50px;
    }
    #poke{
        margin-top: 50px;
        cursor: pointer;
        /* border:1px solid ${colors.sec1};
        border-radius: 5px; */
        max-width: ${dimensions.pokeWidth};
        
        #avatar{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            /* overflow: hidden; */
            height: ${dimensions.pokeWidth};
            width: ${dimensions.pokeWidth};
            position: relative;
            img{
                position: absolute;
                width:100%;
                /* height: 100%; */
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
            width: ${dimensions.pokeWidth};
            overflow: hidden;
            margin: 0 auto;
            h3{
                font-size: 16px;
                text-align: center;
                padding:12px 8px;
                color: ${colors.prim1};
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
          
`;

export const PokemonCard = styled.div`
    margin-top: 50px;
    cursor: pointer;
    /* border:1px solid ${colors.sec1};
    border-radius: 5px; */
    max-width: ${dimensions.pokeWidth};

    #avatar{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* overflow: hidden; */
        height: ${dimensions.pokeWidth};
        width: ${dimensions.pokeWidth};
        position: relative;
        background-image: url(${pokeanimation});
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url(${props=>props.imgUrl});
        
        img{
            position: absolute;
            width:100%;
            /* height: 100%; */
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
        width: ${dimensions.pokeWidth};
        overflow: hidden;
        margin: 0 auto;
        h3{
            font-size: 16px;
            text-align: center;
            padding:12px 8px;
            color: ${colors.prim1};
        }
    }
`;
