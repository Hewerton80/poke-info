import React,{useState} from 'react';
import logo from '../../styles/images/pokemon-logo.png';
import { Link ,useHistory} from 'react-router-dom';
import {FaUserAlt,FaBars} from 'react-icons/fa'
import { Header } from './styles';
import {Menu, MenuItem, Hidden } from '@material-ui/core';

export default ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    function handleLogin(){
        handleClose();
        history.push('/login');
    }
    function handleRegister(){
        handleClose();
        history.push('/register');
    }
    function handleLogout(){
        handleClose();
        localStorage.removeItem('UsrToken');
        localStorage.removeItem('UsrNick');
        history.push('/');
    }
    function handleClose(){
        setAnchorEl(null);
    };
    return (
        <Header>
            <div className="headerContainer">
                <div className="logo">
                    <Link to ='/'>
                        <img src={logo} alt="pokemon"/>
                    </Link>
                </div>
                <div className="infouser">
                    <Hidden smDown>
                        <button onClick={handleClick}>
                            <FaUserAlt color='#fff' />
                            {localStorage.getItem('UsrNick') ||  'Olá, visitante'}
                        </button>
                    </Hidden>
                    <Hidden mdUp>
                        <button onClick={handleClick}>
                            <FaBars color='#fff' />
                        </button>
                        
                    </Hidden>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {localStorage.getItem('UsrNick')?
                        <MenuItem onClick={handleLogout}>  
                            Fazer Logout                      
                        </MenuItem>
                        :
                        <>
                        <MenuItem onClick={handleLogin}>
                            Fazer login
                        </MenuItem>
                        <MenuItem onClick={handleRegister}>
                            Registrar-se
                        </MenuItem>
                        </>
                        }

                    </Menu>
                    
                </div>
            </div>
        </Header>
    )
}