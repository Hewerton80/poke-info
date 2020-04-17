import React,{useState} from 'react'
import api from '../../services/api'
import {Link } from "react-router-dom";
import {ContainerAuth} from "../login/styles"
import logo from "../../styles/images/pokemon-logo.png"
import {useHistory} from 'react-router-dom';

export default (props)=>{

    const [msgErroRegister, setMsgErroRegister] = useState('');
    const [nick, setNick] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');
    const [requesting, setRequesting] = useState(false);
    const history = useHistory();
    console.log('props login',props);

    async function register(e) {
        e.preventDefault()

        setMsgErroRegister('');
        if(!nick || !passwordRegister || !confirmPassword) return null
        if(passwordRegister!==confirmPassword){
            setMsgErroRegister('As senhas estão diferentes')
            return null
        }
        if(passwordRegister.length<6){
            setMsgErroRegister('Senha deve ter no mínimo 6 caractéres')

            return null
        }
        const request = {
            nick,
            pass: passwordRegister
        }
        try{
            setRequesting(true);
            const response = await api.post('/auth/singup',request);
            setRequesting(false);
            localStorage.setItem('UsrToken',response.data.token)
            localStorage.setItem('UsrNick',response.data.user.nick)
            const { pokeName } = props.location.state
            if(pokeName){
                history.push(`/pokemon/${pokeName}`);
                return;
            }
            history.push(`/`);     
        }
        catch(err){
            setRequesting(false);
            if(err.message === 'Network Error'){
                setMsgErroRegister('Falha na conexão com o servidor');
            }
            else if(err.response && err.response.status === 400){
                setMsgErroRegister('Já existe um usuário cadastrado com o email informado');

            }
            else{
                setMsgErroRegister('Erro no cadastro')
            }
            //console.log(Object.getOwnPropertyDescriptors(err));
        }
    }
    return(
        <ContainerAuth>
            <form onSubmit={e=>{register(e)}}>
                <img src={logo} alt="pokemon"/>
                <span id="erroLogin">{msgErroRegister}</span>
                <label htmlFor="EmailLogin">NickName</label>
                <input 
                    id="EmailLogin"
                    type="text"
                    placeholder="NickName"
                    value={nick}
                    onChange={(e)=>setNick(e.target.value)}
                    required
                />
                <label htmlFor="passwordLogin">Password</label>
                <input 
                    id="passwordLogin"
                    type="password"
                    placeholder="Senha"
                    value={passwordRegister}
                    onChange={e=>setPasswordRegister(e.target.value)}
                    required
                />
                <label htmlFor="passwordLogin">Confirmação do password</label>
                <input 
                    id="passwordLogin"
                    type="password"
                    placeholder="Senha"
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    required
                />
                <span id="footer">
                    <Link to="/login" >Faça login em vez disso</Link>
                    <button 
                        type="submit" 
                        loading={requesting?"disabled":""}
                        disabled={requesting?"disabled":""}
                    >
                        Cadastrar
                    </button>
                </span>
            </form>
        </ContainerAuth>
    )
    
}