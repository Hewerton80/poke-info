import React, {useEffect,useState} from 'react';
import Header from '../../components/Header';
import { Col, Row } from '../../components/Grid/styles';
import  CircularProgress from '../../components/Progress';
import pokeApi from '../../services/pokeApi';
import api from '../../services/api';
import {useHistory,Link} from 'react-router-dom';
import { Main, Type} from './styles';
import pokebola from '../../styles/images/pokebola1.png'
import {IoIosReturnLeft} from 'react-icons/io'


export default (props)=>{
    const [poke,setPoke] = useState(null);
    //const [evolutions,setEvolutions] = useState(null);

    const [loading,setLoading] = useState(true);
    const history = useHistory();
    useEffect(()=>{
        async function getPoke(){
            const {name} = props.match.params;
            try {
                await api.get( '/poke/index',{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('UsrToken')}`
                    }
                })
                const response = await pokeApi(`/pokemon/${name}`);
                console.log('poke: ',response.data);
                setPoke(response.data);
                
                // const evolutionData = await pokeApi(`/evolution-chain/${response.data.id}`);
                // console.log('evolutiosn: ',evolutionData.data);
                // setEvolutions(evolutionData.data);
                setLoading(false);

            } 
            catch (err) {
                if(err.response.status === 401){
                    if(err.response.data && err.response.data.msg=== 'token mal formatado'){
                        localStorage.removeItem('UsrToken');
                        localStorage.removeItem('UsrNick');
                        history.push('/');
                    }
                }
                console.log(Object.getOwnPropertyDescriptors(err));
            }
        }
        getPoke()
    },[props])
    return (
        <>
            <Header/>
            {loading?
            <CircularProgress/>
            :
            <Main>
                <Row>
                    <Col xs={12}>
                        <h1 className='pokename'>
                            {poke && `${poke.name} N°${poke.id}`}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <span className="avatar">
                        <img 
                            // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                            //src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${poke.name}.png`}
                            src={`https://img.pokemondb.net/artwork/${poke && poke.name}.jpg`}

                            alt={poke && poke.name}
                            onError={(e)=>{e.target.src = pokebola }}
                        />
                        </span>
                    </Col>
                    <Col xs={12} lg={6}>

                        <div className="infos">
                            <div className="att">
                                <p>Tipo: </p>
                                {poke && poke.types.map(type=>(
                                    <Type key={type.type.name} type={type.type.name}>
                                        {type.type.name}
                                    </Type>
                                ))
                                }

                            </div>
                            <div className="att">
                                <p>Habilidades: </p>
                                {poke && poke.abilities.map(ability=>(
                                    <span id='ability' key={ability.ability.name} >
                                        {ability.ability.name}
                                    </span>
                                ))
                                }

                            </div>
                            <div className="att">
                                <p>
                                    Altura: 
                                </p>
                                <span>
                                    {poke && poke.height/10} M
                                </span>
                            </div>
                            <div className="att">
                                <p>
                                    Peso: 
                                </p>
                                <span>
                                    {poke && poke.weight/10} Kg
                                </span>

                            </div>
                            <div className="att">
                                <Link to='/'>
                                    <button>
                                        <IoIosReturnLeft color='#fff'/>Voltar para lista de pokémons
                                    </button>
                                </Link> 

                            </div> 
                            {/* <div className="evolution att ">
                                <p>
                                    Evoluções: 
                                </p>
                                <span>
                                        <img 
                                            // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                                            //src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${poke.name}.png`}
                                            src={`https://img.pokemondb.net/artwork/${evolutions && evolutions.chain.species.name}.jpg`}
                                            alt={evolutions && evolutions.chain.species.name}
                                        />                                 
                                        {evolutions && evolutions.chain.evolves_to[0] &&(
                                            <>
                                            <img 
                                                // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                                                //src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${poke.name}.png`}
                                                src={`https://img.pokemondb.net/artwork/${evolutions.chain.evolves_to[0].species.name}.jpg`}
                                                alt={evolutions.chain.evolves_to[0].species.name}
                                            />
                                            {evolutions.chain.evolves_to[0].evolves_to[0] && (
                                                <img 
                                                    // src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
                                                    //src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${poke.name}.png`}
                                                    src={`https://img.pokemondb.net/artwork/${evolutions.chain.evolves_to[0].evolves_to[0].species.name}.jpg`}
                                                    alt={evolutions.chain.evolves_to[0].evolves_to[0].species.name}
                                                />  
                                            )

                                            }
                                            </>
                                        )
                                    }
                                </span>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Main>
            }
        </>

    )
}