import React, {useEffect,useState} from 'react';
import {useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import pokebola from '../../styles/images/pokebola1.png';
import pokeanimation from '../../styles/images/poke.gif';
import { Col, Row } from '../../components/Grid/styles';
import BackGroundAnimation from '../../components/BackGroundAnimation';
import  CircularProgress from '../../components/Progress';
import { Main } from '../../components/Container/styles';
import pokeApi from '../../services/pokeApi';
import { Pagination } from '@material-ui/lab';
import { Container } from './styles';

export default ()=>{
    const [items,setItems] = useState([]);
    const [load,setLoad] = useState(true);
    const [loadItens,setLoadItens] = useState(false);
    const [limit, setLimit] = useState(48);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(localStorage.getItem('pageItem')?Number(localStorage.getItem('pageItem')):1);
    const history = useHistory()

    useEffect(()=>{
        async function getPokes(){
            localStorage.setItem('pageItem',page);
            console.log('page: ',page);
            setLoadItens(true);
            try {
                const response = await pokeApi(`/item?limit=${limit}&offset=${(page-1) *limit}`);
                console.log('items: ',response.data);
                setItems(response.data.results);
                setCount(response.data.count);
                setLoad(false);
                setLoadItens(false);
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
    // function handlePoke(poke){
    //     console.log(poke);
    //     history.push(`/pokemon/${poke.name}`)
    // }
    return (
        <>
            <Header active='itens'/>
            {load?
            <CircularProgress/>
            :
            <Main>
                <Container>
                    <div className='container-item'>
                        <Row>
                            {items.map((item,i)=>{
                                //let indexByUrl = item.url.split('item/')[1].split('/').join('');
                                //let index = i+1+(page-1)*limit;
                                
                                // if(index<10){
                                //     index = `00${index}`;
                                // }
                                // else if(index<100){
                                //     index = `0${index}`;
                                // }
                                //console.log(index);
                                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`;
                                return(
                                    <Col xs={6} sm={4} md={3} lg={2} key={item.name}>
                                        <div id="item" >
                                            <div  id='avatar'>
                                                {/* <BackGroundAnimation/> */}
                                                <img 
                                                    src={pokeanimation}
                                                    alt={item.name}
                                                    onLoad={(e)=>{
                                                        e.target.src = imgUrl;
                                                    }}
                                                    onError={(e)=>{e.target.src = pokebola }}
                                                />
                                            </div>
                                            <div id='name'>
                                                <h3>
                                                    {item.name}
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
                                disabled={loadItens}
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