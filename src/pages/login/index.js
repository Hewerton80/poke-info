import React,{useState} from 'react'
import api from '../../services/api'
import {Link } from "react-router-dom";
import {ContainerAuth} from "./styles"
import logo from "../../styles/images/pokemon-logo.png"
import {useHistory} from 'react-router-dom';
export default (props)=>{
    console.log('props login',props);
    const [msgErroLogin, setErroLogin] = useState('');
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [requesting, setRequesting] = useState(false);
    const history = useHistory();

    async function login(e){
        e.preventDefault()
        if(!emailLogin || !passwordLogin) return null
        const request = {
            nick: emailLogin,
            pass : passwordLogin
        }
        try{
            setRequesting(true);
            const response = await api.post('/auth/singin',request)
            setRequesting(false)
            localStorage.setItem('UsrToken',response.data.token)
            localStorage.setItem('UsrNick',response.data.user.nick)

            const { pokeName } = props.location.state
            if(pokeName){
                history.push(`/pokemon/${pokeName}`);
                return;
            }
            history.push(`/`)
            
        }
        catch(err){
            console.log(Object.getOwnPropertyDescriptors(err))
            setRequesting(false);
            if(err.message === 'Network Error'){
                setErroLogin('Falha na conexão com o servidor');
            }
            else if(err.response && err.response.status === 400){
                setErroLogin('Nick e/ou senha inválidas');

            }
            else{
                setErroLogin('Erro no login');
            }
        }

    }
    

    return(
        <ContainerAuth>
            <form onSubmit={e=>{login(e)}}>
                <img src={logo} alt="pokemon"/>
                <span id="erroLogin">{msgErroLogin}</span>
                <label htmlFor="EmailLogin">NickName</label>
                <input 
                    id="EmailLogin"
                    type="text"
                    placeholder="NickName"
                    value={emailLogin}
                    onChange={(e)=>setEmailLogin(e.target.value)}
                    required
                />
                <label htmlFor="passwordLogin">Password</label>
                <input 
                    id="passwordLogin"
                    type="password"
                    placeholder="Senha"
                    value={passwordLogin}
                    onChange={e=>setPasswordLogin(e.target.value)}
                    required
                />
                <span id="footer">
                    <Link 
                        to={{
                            pathname:"/register",
                            state: props.location.state && props.location.state.pokeName?props.location.state.pokeName:{}

                        }} 
                    >
                        Cadastre-se
                    </Link>                    
                    <button 
                        type="submit" 
                        loading={requesting?"disabled":""}
                        disabled={requesting?"disabled":""}
                    >
                        Entrar
                    </button>
                </span>
            </form>
        </ContainerAuth>
    )
    
}