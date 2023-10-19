import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import api from "../../hooks/Data";
import Contato from "./Contato";
import ContatoForm from "./ContatoForm";

interface Usuario {
    id: string;
    login: string;
    contactsDtos: Array<{ telefone: string }>
}

interface state {
    user: {
        id: string;
        login: string;
    };
}
export default function Contatos() {
    const isLoggedIn = useSelector((state: state) => state.user);
    const [contatos, setContatos] = useState<Array<{ telefone: string }>>([]);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [idUsuario, setIdUsuario] = useState<string | null>(null);
    const [divs, setDivs] = useState<JSX.Element[]>([]);

    function criarNovoContato() {
        setDivs([...divs, <div key={divs.length}><ContatoForm idUsuario={idUsuario} /></div>]);
    }

    const getContatosUsuarioLogado = (usuario: Usuario) => {
        setContatos(usuario.contactsDtos.map((contato) => contato));
    };

    const getPosts = async () => {
        try {
            const response = await api.get("/api/usuarios/list");
            setUsuarios(response.data);

            const usuarioLogado = response.data.find((usuario: Usuario) => usuario.login === isLoggedIn.login);
            if (usuarioLogado) {
                setIdUsuario(usuarioLogado.id);
                getContatosUsuarioLogado(usuarioLogado);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className='contato'>
            {
                contatos.map((contato, index) => (
                    <div key={index}>
                        <Contato index={index} contato={contato} />
                    </div>
                ))
            }

            {
                divs.map((_div, index) => (
                    <div key={index}>
                        <ContatoForm idUsuario={idUsuario} ></ContatoForm>
                    </div>
                ))
            }

            <div className="perfil-right__botao">
                <button onClick={criarNovoContato} className="perfil-right__botao-adicionar">
                    <AiOutlinePlus />
                </button>
            </div>
        </div>
    )
}