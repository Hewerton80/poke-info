import React,{useState,useEffect} from 'react';
import { Main } from '../../components/Container/styles';
import  CircularProgress from '../../components/Progress';
import pokeApi from '../../services/pokeApi';
import { Container , ButtonType} from './styles';
import Header from '../../components/Header';
import { Col, Row } from '../../components/Grid/styles';

export default ()=> {
    const [load,setLoad] = useState(true);
    const [types,setTypes] = useState([]);

    useEffect(()=>{
        async function getTypes(){
            try {
                const response = await pokeApi.get(`/type`);
                console.log('types: ',response.data);
                setTypes(response.data.results);
                setLoad(false);
            } 
            catch (err) {
                console.log(err);
            }
        }
        getTypes()
    },[])

    return (
        <>
        <Header active='tipos'/>
        {load?
            <CircularProgress/>
        :
            <Main>
                <Container>
                    <div>
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
                </Container>
            </Main>
        }
        </>

    );
}
