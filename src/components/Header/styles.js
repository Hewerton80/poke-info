import styled from 'styled-components';
import {colors} from   '../../styles/colors'
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    height: 56px;
    background: ${colors.prim1};
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`