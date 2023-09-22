import { AiOutlinePlus } from "react-icons/ai";
import Endereco from "./Endereco";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import EnderecoForm from "./EnderecoForm";
import api from "../../hooks/Data";

interface Usuario {
    id: string;
    login: string;
    addressDtos: any
}

interface state {
    user: {
        id: string;
        login: string;
    };
}

interface Endereco {
    bairro: string,
    cep: string,
    complemento: string,
    id: string,
    localidade: string,
    logradouro: string,
    pais: string,
    uf: string,
}

export default function Enderecos() {
    const isLoggedIn = useSelector((state: state) => state.user);
    const [enderecos, setEnderecos] = useState<Array<{ endereco: string }>>([]);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [idUsuario, setIdUsuario] = useState<string | null>(null);
    const [divs, setDivs] = useState<JSX.Element[]>([]);

    function criarNovoContato() {
        setDivs([...divs, <div key={divs.length}><EnderecoForm idUsuario={idUsuario} /></div>]);
    }

    const getContatosEnderecosLogado = (usuario: Usuario) => {
        setEnderecos(usuario.addressDtos.map((endereco: Endereco) => endereco));
    };

    const getPosts = async () => {
        try {
            const response = await api.get("/api/usuarios/list");
            setUsuarios(response.data); 

            const usuarioLogado = response.data.find((usuario: Usuario) => usuario.login === isLoggedIn.login);
            if (usuarioLogado) {
                setIdUsuario(usuarioLogado.id);
                getContatosEnderecosLogado(usuarioLogado);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className='endereco'>
            {
                enderecos.map((endereco, index) => (
                    <div key={index}>
                        <Endereco index={index} endereco={endereco}></Endereco>
                    </div>
                ))
            }

            {
                divs.map((div, index) => (
                    <div key={index}>
                        <EnderecoForm idUsuario={idUsuario} ></EnderecoForm>
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