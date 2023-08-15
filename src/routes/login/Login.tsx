import './Login.scss';
import { Link } from 'react-router-dom';
import  api  from '../../hooks/Data';
import { useEffect, useState } from 'react';

import logo from '../../assets/images/logo.png'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const getPosts = async () => {
        try {
            const response = await api.get("/api/categorias")
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    // const handleSubmit = (event: any) => {
    //     event.preventDefault();

    //     const data = {
    //         login: login,
    //         password: password
    //     }

    //     axios.post('http://localhost:8080/login', data)
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    // const handleLoginChange = (event: any) => {
    //     setLogin(event.target.value);
    // }

    // const handlePasswordChange = (event: any) => {
    //     setPassword(event.target.value);
    // }

    // const handleSubmitLogin = (event: any) => {

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