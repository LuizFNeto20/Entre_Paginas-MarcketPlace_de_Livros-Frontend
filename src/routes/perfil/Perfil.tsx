import { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Informacoes from '../../components/Informacoes/Informacoes';
import Header from '../../components/header/Header';
import VendaLivro from '../../components/vendalivro/VendaLivro';
import api from '../../hooks/Data';
import Comunidade from '../comunidade/Comunidade';
import './Perfil.scss';
import MinhasComunidades from '../../components/minhasComunidades/MinhasComunidades';

interface Usuario {
    id: string;
    login: string;
}

interface state {
    user: {
        id: string;
        login: string;
    };
}

interface logado {
    imagem: string;
    nome: string;
    email: string;
    login: string;
    dataNascimento: Date;
}

export default function Perfil() {
    const isLoggedIn = useSelector((state: state) => state.user);
    const [_idUsuario, setIdUsuario] = useState<string | null>(null);
    const [_usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [image, setImage] = useState<string | null>(null);
    const [usuarioLog, setUsuarioLog] = useState<logado>();
    const [show, setShow] = useState({
        infomacoesUsuarios: true,
        vendaLivros: false,
        comunidade: false,
        minhasComunidades: false
    })

    const getPosts = async () => {
        try {
            const response = await api.get("/api/usuarios/list");
            setUsuarios(response.data);

            const usuarioLogado = response.data.find((usuario: Usuario) => usuario.login === isLoggedIn.login);

            if (usuarioLogado) {
                setIdUsuario(usuarioLogado.id);
                setUsuarioLog(usuarioLogado);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getImage = async () => {
        try {
            const response = await api.get(`/api/usuarios/showImage/${usuarioLog?.imagem}`, {
                responseType: 'blob',
            });

            const imageUrl = URL.createObjectURL(response.data);

            setImage(imageUrl);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getPosts();
    }, [])

    useEffect(() => {
        if (usuarioLog) {
            getImage();
        }
    }, [usuarioLog]);


    return (
        <>
            <Header></Header>
            <div className="perfil">
                <div className='perfil-principal'>
                    <div className='perfil-principal__div'>
                        <div className='perfil-principal__div-image'>
                            {image && <img src={image} alt="Imagem do Usuário" />}
                        </div>
                        <span className='perfil-principal__div-config'
                            onClick={() => setShow(
                                {
                                    infomacoesUsuarios: true,
                                    vendaLivros: false,
                                    comunidade: false,
                                    minhasComunidades: false
                                })}>
                            <IoSettingsOutline />
                        </span>

                        <div className='perfil-principal__div-suporte'>
                            {/* <ul className='perfil-principal__div-suporte--redes'>
                                <li>
                                    <a href="#"><FaInstagram /></a>
                                </li>

                                <li>
                                    <a href="#"><FiTwitter /></a>
                                </li>

                                <li>
                                    <a href="#"><FaTwitch /></a>
                                </li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="perfil-principal__left">

                        <ul className='perfil-principal__left-menu'>

                            <li className={show.vendaLivros ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        vendaLivros: true,
                                        comunidade: false,
                                        minhasComunidades: false
                                    })}>
                                Vender Livro
                            </li>

                            <li>Livros Favoritos</li>

                            <li className={show.comunidade ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        vendaLivros: false,
                                        comunidade: true,
                                        minhasComunidades: false
                                    })}>
                                Criar Comunidade
                            </li>
                            <li className={show.minhasComunidades ? 'active' : ''}
                                onClick={() => setShow(
                                    {
                                        infomacoesUsuarios: false,
                                        vendaLivros: false,
                                        comunidade: false,
                                        minhasComunidades: true
                                    })}>
                                Minhas Comunidades
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="perfil-right">
                    {show.infomacoesUsuarios && <Informacoes usuarioLogado={usuarioLog}></Informacoes>}

                    {show.vendaLivros && <VendaLivro></VendaLivro>}

                    {show.comunidade && <Comunidade usuarioLogado={usuarioLog}></Comunidade>}

                    {show.minhasComunidades && <MinhasComunidades usuarioLogado={usuarioLog}></MinhasComunidades>}
                </div>
            </div>
        </>
    );
}