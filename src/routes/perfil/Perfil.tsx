import { useState } from 'react';
import Informacoes from '../../components/Informacoes/Informacoes';
import Contatos from '../../components/contato/Contatos';
import Enderecos from '../../components/endereco/Enderecos';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Perfil.scss';

export default function Perfil() {

    const [show, setShow] = useState({
        infomacoesUsuarios: true,
        enderecosUsuarios: false,
        contatosUsuarios: false,
    })

    return (
        <>
            <Header />
            <div className="perfil">
                <div className="perfil-left">
                    <ul className='perfil-left__menu'>
                        <li className={show.infomacoesUsuarios ? 'active' : ''}
                            onClick={() => setShow(
                                {
                                    infomacoesUsuarios: true,
                                    enderecosUsuarios: false,
                                    contatosUsuarios: false
                                })}>
                            Informaçães
                        </li>
                        <li className={show.enderecosUsuarios ? 'active' : ''}
                            onClick={() => setShow(
                                {
                                    infomacoesUsuarios: false,
                                    enderecosUsuarios: true,
                                    contatosUsuarios: false
                                })}>
                            Endereços
                        </li>
                        <li className={show.contatosUsuarios ? 'active' : ''}
                            onClick={() => setShow(
                                {
                                    infomacoesUsuarios: false,
                                    enderecosUsuarios: false,
                                    contatosUsuarios: true
                                })}>
                            Contatos
                        </li>
                    </ul>
                </div>
                <div className="perfil-right">
                    {show.infomacoesUsuarios && <Informacoes></Informacoes>}

                    {show.enderecosUsuarios && <Enderecos></Enderecos>}

                    {show.contatosUsuarios && <Contatos></Contatos>}
                </div>
            </div>
            <Footer />
        </>
    );
}