import React,{useState,useEffect} from 'react';
import { Main } from '../../components/Container/styles';
import  CircularProgress from '../../components/Progress';
import pokeApi from '../../services/pokeApi';
import { Container , ButtonType} from './styles';
import Header from '../../components/Header';
import { Col, Row } from '../../components/Grid/styles';

export default ()=> {
    const [load,setLoad] = useState(true);
    const [abilits,setAbilits] = useState([])

    useEffect(()=>{
        async function getAbilits(){
            try {
                const response = await pokeApi.get(`/ability?limit=300`);
                console.log('abilits: ',response.data);
                setAbilits(response.data.results);
                setLoad(false);
            } 
            catch (err) {
                console.log(err);
            }
        }
        getAbilits()
    },[])

    return (
        <>
        <Header active='habilidades'/>
        {load?
            <CircularProgress/>
        :
            <Main>
                <Container>
                    <div>
                        <Row>
                            {
                                abilits.map(ability=>(
                                    <Col xs={6} sm={3} key={ability.name}>
                                        <ButtonType type={'abilits'}>
                                            {ability.name}
                                        </ButtonType>
                                    </Col>
                                ))//.filter((t,i)=>i<12)
                            }
                        </Row>
                    </div>
                </Container>
            </Main>
        }
        </>

    );
}
