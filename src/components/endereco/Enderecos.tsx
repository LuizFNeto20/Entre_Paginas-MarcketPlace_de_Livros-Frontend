import { AiOutlinePlus } from "react-icons/ai";
import Endereco from "./Endereco";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import EnderecoForm from "./EnderecoForm";

/*interface Usuario {
    id: string;
    login: string;
    enderecos: Array<{ telefone: string }>
}*/

interface state {
    user: {
        id: string;
        login: string;
    };
}

export default function Enderecos() {
    const isLoggedIn = useSelector((state: state) => state.user);
    // const [enderecos, setEnderecos] = useState<Array<{ telefone: string }>>([]);
    const [novo, setNovo] = useState(false);
    // const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [idUsuario, setIdUsuario] = useState<string | null>(null);
    const [divs, setDivs] = useState<JSX.Element[]>([]);

    function criarNovoContato() {
        setDivs([...divs, <div key={divs.length}><EnderecoForm idUsuario={idUsuario} /></div>]);
    }

    // const getContatosUsuarioLogado = (usuario: Usuario) => {
    //     setEnderecos(usuario.contatos.map((contato) => contato));
    //     setNovo(true);
    // };

    return (
        <div className='endereco'>
            {
                // enderecos.map((endereco, index) => (
                //     <div key={index}>
                //         <Endereco index={index} endereco={endereco}></Endereco>
                //     </div>
                // ))
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