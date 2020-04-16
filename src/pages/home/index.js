import React, {useEffect,useState} from 'react';
import Header from '../../components/Header';
import { Col, Row } from '../../components/Grid/styles';
import pokeApi from '../../services/pokeApi';
import { Pagination } from '@material-ui/lab';

import { Main } from './styles'

export default ()=>{
    const [pokes,setPokes] = useState([])
    const [limit, setLimit] = useState(20);
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1);
    const [showPokes, setShowPokes] = useState(true);

    useEffect(()=>{
        async function getPokes(){
            try {
                const response = await pokeApi(`/pokemon?limit=${limit}&offset=${(page-1) *limit}`);
                console.log('pokes: ',response.data);
                setPokes(response.data.results);
                setCount(response.data.count);
            } 
            catch (err) {
                console.log(err);
            }
        }
        getPokes()
    },[page])



    function handleChange(event, page){
        setPage(page);
    }
    return (
        <>
            <Header/>
            <Main>
                <Row>
                    <Col xs={12} lg={6}>
                        <button className={`submenu ${showPokes ?'active':''}`}>
                            Pokémons
                        </button>
                    </Col>
                    <Col xs={12} lg={6}>
                        <button className='submenu'>
                            Tipos
                        </button>
                    </Col>
                </Row>
                <Row>
                    {pokes.map((poke,i)=>{
                        
                        let index = i+1+(page-1)*limit;
                        if(index<10){
                            index = `00${index}`;
                        }
                        else if(index<100){
                            index = `0${index}`;
                        }
                        console.log(index);
                        return(
                            <Col xs={12} sm={6} md={4} lg={3} key={poke.name}>
                                <div id="poke">
                                    <div  id='avatar'>
                                        <img 
                                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                                            alt={poke.name}
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
                        count={count} 
                        page={page} 
                        onChange={handleChange} 
                        color="primary" 
                        size="large"
                    />
                </footer>

            </Main>
        </>
    )
}