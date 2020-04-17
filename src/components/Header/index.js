import React,{useState} from 'react';
import logo from '../../styles/images/pokemon-logo.png';
import { Link} from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa'
import { Header } from './styles';
import {Menu, MenuItem} from '@material-ui/core';

export default ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Header>
            <div className="headerContainer">
                <div className="logo">
                    <img src={logo} alt="pokemon"/>
                </div>
                <div className="infouser">
                        {localStorage.getItem('UsrNick')?
                                localStorage.getItem('UsrNick')
                            :
                                <>
                                
                                <button onClick={handleClick}>
                                <FaUserAlt color='#fff' />
                                    Olá, visitante
                                </button>

                                    
                                </>
                        }
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to='/login'>
                            Fazer login
                            </Link>
                            
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link to='/register'>
                                Registrar-se
                            </Link>
                            
                        </MenuItem>
                    </Menu>
                    
                </div>
            </div>
        </Header>
    )
}