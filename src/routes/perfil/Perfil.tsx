import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Contato from '../../components/contato/Contato';
import ContatoForm from '../../components/contato/ContatoForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import api from '../../hooks/Data';
import './Perfil.scss';

interface Usuario {
    id: string;
    login: string;
    contatos: Array<{ telefone: string }>
}

interface state {
    user: {
        id: string;
        login: string;
    };
}

export default function Perfil() {
    const isLoggedIn = useSelector((state: state) => state.user);
    const [contatos, setContatos] = useState<Array<{ telefone: string }>>([]);
    const [novo, setNovo] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [idUsuario, setIdUsuario] = useState<string | null>(null);
    const [divs, setDivs] = useState<JSX.Element[]>([]);

    const getContatosUsuarioLogado = (usuario: Usuario) => {
        setContatos(usuario.contatos.map((contato) => contato));
        setNovo(true);
    };

    const getPosts = async () => {
        try {
            const response = await api.get("/api/usuarios/list");
            setUsuarios(response.data);
            const usuarioLogado = usuarios.find((usuario) => usuario.login === isLoggedIn.login);
            if (usuarioLogado) {
                setIdUsuario(usuarioLogado.id);
                getContatosUsuarioLogado(usuarioLogado);
            }
            console.log(contatos);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [isLoggedIn, usuarios])

    function criarNovoContato() {
        setDivs([...divs, <div key={divs.length}><ContatoForm idUsuario={idUsuario} /></div>]);
    }

    return (
        <>
            <Header />
            <div className="perfil">
                <div className="perfil-left">
                    <ul>
                        <li>Informações</li>
                        <li>Contato</li>
                        <li>Endereço</li>
                        <li>Editar Informações</li>
                        <li>Editar Informações</li>
                        <li>Editar Informações</li>
                    </ul>
                </div>
                <div className="perfil-right">
                    {contatos.map((contato, index) => (
                        <div key={index}>
                            <Contato index={index} contato={contato} />
                        </div>
                    ))}

                    {
                        divs.map((div, index) => (
                            novo && (
                                <div key={index}>
                                    <ContatoForm idUsuario={idUsuario} ></ContatoForm>
                                </div>
                            )
                        ))
                    }

                    <div className="perfil-right__botao">
                        <button onClick={criarNovoContato} className="perfil-right__botao-adicionar">
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}