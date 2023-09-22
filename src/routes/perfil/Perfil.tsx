import { useRef, useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import Informacoes from '../../components/Informacoes/Informacoes';
import Contatos from '../../components/contato/Contatos';
import Enderecos from '../../components/endereco/Enderecos';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import VendaLivro from '../../components/vendalivro/VendaLivro';
import Comunidade from '../comunidade/Comunidade';
import './Perfil.scss';

export default function Perfil() {

    const [show, setShow] = useState({
        infomacoesUsuarios: true,
        enderecosUsuarios: false,
        contatosUsuarios: false,
        vendaLivros: false,
        comunidade: false
    })

    const fileInputRef: any = useRef(null);

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event : any) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            console.log(selectedFile);

            const formData = new FormData();
            formData.append('file', selectedFile);

            setTimeout(() => {
                console.log('Arquivo enviado com sucesso.');
            }, 1000);
        }
    };

    return (
        <>
            <Header nav={false}></Header>

            <div className="perfil">
                <div className='perfil-principal'>
                    <div className='perfil-principal__div'>
                        <span className='perfil-principal__div-config'
                            onClick={() => setShow(
                                {
                                    infomacoesUsuarios: true,
                                    enderecosUsuarios: false,
                                    contatosUsuarios: false,
                                    vendaLivros: false,
                                    comunidade: false
                                })}>
                            <IoSettingsOutline />
                        </span>
                        <div className='perfil-principal__div-image' onClick={openFileInput}>
                            <AiFillCamera></AiFillCamera>
                        </div>

                        <form action="#" method='post'>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: 'block' }}
                                onChange={handleFileChange}
                            />
                            <button type="submit" style={{ display: 'flex' }}></button>
                        </form>
                    </div>

                    <div className="perfil-principal__left">

                        <ul className='perfil-principal__left-menu'>

                            <li className={show.enderecosUsuarios ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        enderecosUsuarios: true,
                                        contatosUsuarios: false,
                                        vendaLivros: false,
                                        comunidade: false
                                    })}>
                                Endereços
                            </li>
                            <li className={show.contatosUsuarios ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        enderecosUsuarios: false,
                                        contatosUsuarios: true,
                                        vendaLivros: false,
                                        comunidade: false
                                    })}>
                                Contatos
                            </li>
                            <li className={show.vendaLivros ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        enderecosUsuarios: false,
                                        contatosUsuarios: false,
                                        vendaLivros: true,
                                        comunidade: false
                                    })}>
                                Vender Livro
                            </li>

                            <li>Livros Favoritos</li>

                            <li className={show.comunidade ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        enderecosUsuarios: false,
                                        contatosUsuarios: false,
                                        vendaLivros: false,
                                        comunidade: true
                                    })}>
                                Criar Comunidade
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="perfil-right">
                    {show.infomacoesUsuarios && <Informacoes></Informacoes>}

                    {show.enderecosUsuarios && <Enderecos></Enderecos>}

                    {show.contatosUsuarios && <Contatos></Contatos>}

                    {show.vendaLivros && <VendaLivro></VendaLivro>}

                    {show.comunidade && <Comunidade></Comunidade>}
                </div>
            </div>
            <Footer />
        </>
    );
}