import './Login.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Login() {
    return (
        <>
            <Header></Header>
            <div className="login">
                <img src={logo} className='login__logo' alt="Imagem do logo no login" />
                <div className='login__form'>
                    <form action="#" method='post'>
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" placeholder='Login' />
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" placeholder='Senha' />
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