import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Cadastro.scss';

export default function Cadastro() {
    return (
        <>
            <Header></Header>
            <div className="cadastro">
                <div className='cadastro__left'>
                </div>

                <div className='cadastro__right'>
                    <h1>Crie sua conta</h1>
                    <form action="#" method='post'>
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" placeholder='Nome' name='nome'/>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder='E-mail' name='email'/>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder='Senha' name='senha'/>
                        <button type='submit'>Criar Conta</button>
                        <p>Já possui uma conta? <Link to={"/login"}>Faça login</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}