import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import imgCadastro2 from '../../assets/images/imgCadastro2.png';
import Footer from '../../components/footer/Footer';
import api from '../../hooks/Data';
import './Cadastro.scss';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const data = dataNascimento ? new Date(dataNascimento) : null;

            const response = await api.post('/api/usuarios', { nome, login, email, senha, dataNascimento: data });
            console.log('Usuario salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }

        // window.location.href = '/login';
    };

    return (
        <>
            <div className="cadastro">
                <div className='cadastro__left'>
                    <img src={imgCadastro2} alt="" />
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
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input type="date" placeholder='dataNascimento' name='dataNascimento' onChange={(e) => setDataNascimento(e.target.value)} required value={dataNascimento} />
                        <button type='submit'>Criar Conta</button>
                        <p>Já possui uma conta? <Link to={"/login"}>Faça login</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}