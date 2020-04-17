import React, {useEffect,useState} from 'react';
import {useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import pokebola from '../../styles/images/pokebola1.png'
import { Col, Row } from '../../components/Grid/styles';
import BackGroundAnimation from '../../components/BackGroundAnimation';
import  CircularProgress from '../../components/Progress';

import pokeApi from '../../services/pokeApi';
import { Pagination } from '@material-ui/lab';
import { Main , ButtonType} from './styles';

export default ()=>{
    const [pokes,setPokes] = useState([]);
    const [load,setLoad] = useState(true);
    const [types,setTypes] = useState([])
    const [limit, setLimit] = useState(20);
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(localStorage.getItem('page')?Number(localStorage.getItem('page')):1);
    const [showPokes, setShowPokes] = useState(true);
    const history = useHistory()

    useEffect(()=>{
        async function getPokes(){
            localStorage.setItem('page',page);
            try {
                const response = await pokeApi(`/pokemon?limit=${limit}&offset=${(page-1) *limit}`);
                console.log('pokes: ',response.data);
                setPokes(response.data.results);
                setCount(response.data.count);
                setLoad(false);
            } 
            catch (err) {
                console.log(err);
            }
        }
        getPokes()
    },[page])

    useEffect(()=>{
        async function getTypes(){
            try {
                const response = await pokeApi.get(`/type`);
                //console.log('types: ',response.data);
                setTypes(response.data.results);
            } 
            catch (err) {
                console.log(err);
            }
        }
        getTypes()
    },[types])

    function handleChange(event, page){
        setPage(page);
    }
    function handlePoke(poke){
        console.log(poke);
        if(! localStorage.getItem('UsrToken')){
            console.log('redirect')
            history.push('/login',{
                pokeName: poke.name
            })
            return;
        }
        history.push(`/pokemon/${poke.name}`)
    }
    return (
        <>
            <Header/>
            {load?
            <CircularProgress/>
            :
            <Main>
                <Row>
                    <Col xs={6}>
                        <button 
                            className={`submenu ${showPokes ?'active':''}`}
                            onClick={()=>setShowPokes(true)}
                        >
                            Pokémons
                        </button>
                    </Col>
                    <Col xs={6}>
                        <button 
                            className={`submenu ${!showPokes ?'active':''}`}
                            onClick={()=>setShowPokes(false)}
                        >
                            Tipos
                        </button>
                    </Col>
                </Row>
                <div className={`container-poke ${showPokes ?'show':''}`}>
                    <Row>
                        {pokes.map((poke,i)=>{
                            let index = i+1+(page-1)*limit;
                            if(index<10){
                                index = `00${index}`;
                            }
                            else if(index<100){
                                index = `0${index}`;
                            }
                            //console.log(index);
                            return(
                                <Col xs={12} sm={6} md={4} lg={3} key={poke.name}>
                                    <div id="poke" onClick={()=>handlePoke(poke)}>
                                        <div  id='avatar'>
                                        <BackGroundAnimation/>
                                            <img 
                                                // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                                                //src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${poke.name}.png`}
                                                src={`https://img.pokemondb.net/artwork/${poke.name}.jpg`}

                                                alt={poke.name}
                                                onError={(e)=>{e.target.src = pokebola }}
                                            />
                                        </div>
                                        <div id='name'>
                                            <h3>
                                                {poke.name}
                                            </h3>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    
                    <footer>
                        <Pagination 
                            count={Math.floor(count/limit)} 
                            page={page} 
                            onChange={handleChange} 
                            color="primary" 
                            size="large"
                        />
                    </footer>
                </div>
                <div className={`container-type ${!showPokes ?'show':''}`}>
                    <Row>
                        {
                            types.map(type=>(
                                <Col xs={6} sm={3} key={type.name}>
                                    <ButtonType type={type.name}>
                                        {type.name}
                                    </ButtonType>
                                </Col>
                            ))//.filter((t,i)=>i<12)
                        }
                    </Row>
                </div>

            </Main>
            }
        </>
    )
}