import React, {useEffect,useState} from 'react';
import {useHistory } from 'react-router-dom';
import Header from '../../components/Header';
//import pokebola from '../../styles/images/pokebola1.png';
import { Col, Row } from '../../components/Grid/styles';
//import BackGroundAnimation from '../../components/BackGroundAnimation';
import pokeanimation from '../../styles/images/poke.gif';

import  CircularProgress from '../../components/Progress';
import { Main } from '../../components/Container/styles';
import pokeApi from '../../services/pokeApi';
import { Pagination } from '@material-ui/lab';
import { Container } from './styles';

export default ()=>{
    const [pokes,setPokes] = useState([]);
    const [load,setLoad] = useState(true);
    const [loadPokes,setLoadPokes] = useState(false);
    const [limit, setLimit] = useState(48);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(localStorage.getItem('pagePoke')?Number(localStorage.getItem('pagePoke')):1);
    const history = useHistory()

    useEffect(()=>{
        async function getPokes(){
            localStorage.setItem('pagePoke',page);
            console.log('page: ',page);
            setLoadPokes(true);
            try {
                const response = await pokeApi(`/pokemon?limit=${limit}&offset=${(page-1) *limit}`);
                console.log('pokes: ',response.data);
                setPokes(response.data.results);
                setCount(response.data.count);
                setLoad(false);
                setLoadPokes(false);
            } 
            catch (err) {
                console.log(err);
            }
        }
        getPokes()
    },[page]);
    
    function handleChange(event, page){
        console.log('page: ',page);
        setPage(page);
    }
    function handlePoke(poke){
        console.log(poke);
        // if(! localStorage.getItem('UsrToken')){
        //     console.log('redirect')
        //     history.push('/login',{
        //         pokeName: poke.name
        //     })
        //     return;
        // }
        history.push(`/pokemon/${poke.name}`)
    }
    return (
        <>
            <Header active='pokemons'/>
            {load?
            <CircularProgress/>
            :
            <Main>
                <Container>
                    <div className='container-poke'>
                        <Row>
                            {pokes.map((poke,i)=>{
                                let indexByUrl = poke.url.split('pokemon/')[1].split('/').join('');
                                //let index = i+1+(page-1)*limit;
                                
                                // if(index<10){
                                //     index = `00${index}`;
                                // }
                                // else if(index<100){
                                //     index = `0${index}`;
                                // }
                                //console.log(index);
                                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexByUrl}.png`;
                                return(
                                    <Col xs={6} sm={4} md={3} lg={2} key={poke.name}>
                                        <div id="poke" onClick={()=>handlePoke(poke)} >
                                            <div  id='avatar'>
                                            {/* <BackGroundAnimation/> */}
                                                <img 
                                                    //src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                                                    //src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${poke.name}.png`}
                                                    //src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index}.png`}
                                                    //src={`https://img.pokemondb.net/artwork/${poke.name}.jpg`}
                                                    src={pokeanimation}
                                                    alt={poke.name}
                                                    onLoad={(e)=>{e.target.src = imgUrl;}}
                                                    //onError={(e)=>{e.target.src = pokebola; }}
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
                                disabled={loadPokes}
                                color="primary" 
                                size="large"
                            />
                        </footer>
                    </div>    
                </Container>
            </Main>
            }
        </>
    )
}