import styled from 'styled-components';
import {colors, typesColors } from '../../styles/colors';
import { dimensions } from '../../styles/dimensions';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    .container-item{
        display: flex;
        width:100%;
        flex-direction: column;
        margin-bottom: 50px;
    }
    #item{
        margin-top: 50px;
        cursor: pointer;
        /* border:1px solid ${colors.sec1};
        border-radius: 5px; */
        max-width: ${dimensions.itensWidth};
        &:hover img{
            transform: scale(1.3);
        }
        
        #avatar{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            /* overflow: hidden; */
            height: ${dimensions.itensWidth};
            width: ${dimensions.itensWidth};
            position: relative;
            img{
                position: absolute;
                max-width: 60px;
                
                transition-duration: .3s;
                
            }
        }
        #name{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            width: ${dimensions.itensWidth};
            overflow: hidden;
            margin: 0 auto;
            h3{
                font-size: 14px;
                text-align: center;
                padding:12px 8px;
                color: ${colors.sec1};
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
