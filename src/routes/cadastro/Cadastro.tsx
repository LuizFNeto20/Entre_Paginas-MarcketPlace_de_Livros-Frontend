import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import api from '../../hooks/Data';
import './Cadastro.scss';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.post('/api/usuarios', { nome, login, email, senha });
            console.log('Usuario salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }

        window.location.href = '/login';
    };

    return (
        <>
            <Header></Header>
            <div className="cadastro">
                <div className='cadastro__left'>
                </div>

                <div className='cadastro__right'>
                    <h1>Crie sua conta</h1>
                    <form onSubmit={handleSubmit} method='post'>
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" placeholder='Nome' name='nome' onChange={(e) => setNome(e.target.value)} required value={nome} />
                        <label htmlFor="login">Login</label>
                        <input type="text" placeholder='Login' name='login' onChange={(e) => setLogin(e.target.value)} required value={login} />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder='E-mail' name='email' onChange={(e) => setEmail(e.target.value)} required value={email} />
                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder='Senha' name='senha' onChange={(e) => setSenha(e.target.value)} required value={senha} />
                        <button type='submit'>Criar Conta</button>
                        <p>Já possui uma conta? <Link to={"/login"}>Faça login</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}