import './Login.scss';
import { Link } from 'react-router-dom';
import api from '../../hooks/Data';
import { SyntheticEvent, useState } from 'react';

import logo from '../../assets/images/logo.png'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Login() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.post('/api/auth/login', { login, senha });
            console.log('Usuario salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }

        window.location.href = '/login';
    }

    return (
        <>
            <Header></Header>
            <div className="login">
                <img src={logo} className='login__logo' alt="Imagem do logo no login" />
                <div className='login__form'>
                    <form onSubmit={handleSubmit} method='post'>
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" placeholder='Login' onChange={(e) => setLogin(e.target.value)} required value={login} />
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder='Senha' onChange={(e) => setSenha(e.target.value)} required value={senha} />
                        <button type='submit' name='submit'>Entrar</button>
                    </form>
                </div>
                <div className='login__cadastrar'>
                    <p>Ainda não tem conta?</p>

                    <Link to='/cadastro'>Cadastre-se</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}