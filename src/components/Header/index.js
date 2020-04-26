import React,{useState} from 'react';
import logo from '../../styles/images/pokemon-logo.png';
import m1 from '../../styles/images/m1.png';
import m2 from '../../styles/images/m2.png';
import m3 from '../../styles/images/m3.png';
import m4 from '../../styles/images/m4.png';
import { Link ,useHistory} from 'react-router-dom';
import {FaUserAlt,FaBars} from 'react-icons/fa'
import { Header , Menu} from './styles';
import { Hidden ,Popover, IconButton} from '@material-ui/core';

export default ({active})=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    return (
        <Header>
            <div className="headerContainer">
                <div className="logo">
                    <Link to ='/'>
                        <img src={logo} alt="pokemon"/>
                    </Link>
                </div>
                <nav>
                    <Hidden smDown>
                        <ul>
                            <li className={`pokemons ${active === 'pokemons'?'active':''}`}>
                                
                                <Link to='/'>
                                    <img src={m1} alt="poke"/>
                                    Pokémons
                                </Link>
                            </li>
                            <li className={`tipos ${active === 'tipos'?'active':''}`}>
                                
                                <Link to='/tipos'>
                                    <img src={m2} alt="poke"/>
                                    Tipos
                                </Link>
                            </li>
                            <li className={`habilidades ${active === 'habilidades'?'active':''}`}>
                                
                                <Link to='/habilidades'>
                                    <img src={m3} alt="poke"/>
                                    Habilidades
                                </Link>
                            </li>
                            <li className={`itens ${active === 'itens'?'active':''}`}>
                                
                                <Link to='/itens'>
                                    <img src={m4} alt="poke"/>
                                    Itens 
                                </Link>
                            </li>
                        </ul>
                    </Hidden>
                    <Hidden mdUp>
                        <>
                        <IconButton color="primary" aria-describedby={id} variant="contained" onClick={handleClick}>
                            <FaBars color='#fff' />
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Menu>
                                <ul>
                                    <li className={`pokemons ${active === 'pokemons'?'active':''}`}>
                                        <Link to='/'>
                                            <img src={m1} alt="poke"/>
                                            Pokémons
                                        </Link>
                                    </li>
                                    <li className={`tipos ${active === 'tipos'?'active':''}`}>
                                        <Link to='/tipos'>
                                            <img src={m2} alt="poke"/>
                                            Tipos
                                        </Link>
                                    </li>
                                    <li className={`habilidades ${active === 'habilidades'?'active':''}`}>
                                        <Link to='/habilidades'>
                                            <img src={m3} alt="poke"/>
                                            Habilidades
                                        </Link>
                                    </li>
                                    <li className={`itens ${active === 'itens'?'active':''}`}>
                                        <Link to='/itens'>
                                            <img src={m4} alt="poke"/>
                                            Itens 
                                        </Link>
                                    </li>
                                </ul>
                            </Menu>
                        </Popover>
                        </>                 
                    </Hidden>
                </nav>
            </div>
        </Header>
    )
}