import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Contato from '../../components/contato/Contato';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Perfil.scss';

export default function Perfil() {

    const [divs, setDivs] = useState<JSX.Element[]>([]);
    const [novo, setNovo] = useState(false);

    function criarNovoContato() {
        const novoContato = [...divs]
        novoContato.push(<div></div>);
        setDivs(novoContato);
        setNovo(true);
    }

    return (
        <>
            <Header></Header>
            <div className="perfil">
                <div className='perfil-left'>
                    <ul className=''>
                        <li>Informações</li>
                        <li>Contato</li>
                        <li>Endereço</li>
                        <li>Editar Informações</li>
                        <li>Editar Informações</li>
                        <li>Editar Informações</li>
                    </ul>
                </div>
                <div className='perfil-right'>

                    {
                        divs.map((div, index) => {
                            return (
                                <div key={index}>
                                    <Contato novo={novo} index={index}></Contato>
                                </div>
                            )
                        })
                    }

                    <div className='perfil-right__botao'>
                        <button onClick={criarNovoContato} className='perfil-right__botao-adicionar'><AiOutlinePlus></AiOutlinePlus></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )

}