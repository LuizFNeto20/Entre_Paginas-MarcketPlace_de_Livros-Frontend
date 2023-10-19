import { SyntheticEvent, useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import api from '../../hooks/Data';
import Contatos from '../contato/Contatos';
import Enderecos from '../endereco/Enderecos';
import './informacoes.scss';
import { useNavigate } from 'react-router-dom';

interface StateVisibility {
    visibleImg: boolean;
    visibleNome: boolean;
    visibleEmail: boolean;
    visibleLogin: boolean;
    visibleData: boolean;
    visibleSenha: boolean;
}

interface ValorInputs {
    id: string;
    imagem: string,
    nome: string;
    email: string;
    login: string;
    dataNascimento: string;
    senha: string;
    confirmarSenha: string;
}

export default function Informacoes({ usuarioLogado }: any) {

    const navigate = useNavigate();
    const valorInicialInputs: ValorInputs = {
        id: "",
        imagem: "",
        nome: "",
        email: "",
        login: "",
        dataNascimento: "",
        senha: "",
        confirmarSenha: "",
    }

    const [visibility, setVisibility] = useState<StateVisibility>({
        visibleImg: false,
        visibleNome: false,
        visibleEmail: false,
        visibleLogin: false,
        visibleData: false,
        visibleSenha: false,
    });

    const [inputs, setInputs] = useState<ValorInputs>(valorInicialInputs);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (usuarioLogado) {
            const dataDoInputDate = new Date(usuarioLogado.dataNascimento);
            const dataFormatada = dataDoInputDate.toISOString().split('T')[0];
            setInputs({
                ...inputs,
                id: usuarioLogado.id,
                imagem: usuarioLogado.imagem,
                dataNascimento: dataFormatada,
                nome: usuarioLogado.nome,
                email: usuarioLogado.email,
                login: usuarioLogado.login
            })
        }
    }, [usuarioLogado]);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmitFile = async (event: any) => {
        event.preventDefault();

        if (selectedImage) {
            const formData = new FormData();
            formData.append('imagem', selectedImage);

            try {
                const response = await api.post(`/api/usuarios/image/${inputs.id}`, formData);
                console.log('Imagem salva:', response.data);
            } catch (error) {
                console.error('Erro ao salvar imagem:', error);
            }
        } else {
            console.error('Nenhuma imagem selecionada.');
        }

        navigate("/perfil");
    };
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (inputs.senha === inputs.confirmarSenha) {
            try {
                const data = inputs.dataNascimento ? new Date(inputs.dataNascimento) : null;

                const response = await api.patch(`/api/usuarios/${inputs.id}`, {
                    nome: inputs.nome,
                    login: inputs.login,
                    email: inputs.email,
                    senha: inputs.senha,
                    dataNascimento: data
                });

                console.log('Usuario salvo:', response.data);
            } catch (error) {
                console.error('Erro ao salvar projeto:', error);
            }
        } else {
            console.log("senhas diferentes")
        }

        navigate("/perfil");
    };


    return (
        <div className='forms'>
            <h2>Informações do Perfil</h2>

            <form onSubmit={handleSubmitFile}
                method='post'
                encType='multipart/form-data'>
                <div className="forms-informacoes-groupFile">
                    <div className='forms-informacoes-groupFile-div'>
                        <label htmlFor="imagem" className="forms-informacoes-groupFile-div_label">
                            Foto de Perfil
                        </label>
                        <span className='forms-informacoes-groupFile-div_visible'
                            onClick={() => setVisibility({ ...visibility, visibleImg: !visibility.visibleImg })}>
                            {
                                visibility.visibleImg && <AiFillEye></AiFillEye>
                            }

                            {
                                !visibility.visibleImg && <AiFillEyeInvisible></AiFillEyeInvisible>
                            }
                        </span>
                    </div>
                    <input
                        type="file"
                        id="imagem"
                        name="imagem"
                        className="forms-informacoes-groupFile_input"
                        disabled={!visibility.visibleImg}
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="forms-informacoes_button">
                    Salvar
                </button>
            </form>
            <br />
            <form onSubmit={handleSubmit} className='forms-informacoes'>
                <div className="forms-informacoes-group">
                    <div className='forms-informacoes-group-div'>
                        <label htmlFor="nome" className="forms-informacoes-group-div_label">
                            Nome
                        </label>
                        <span className='forms-informacoes-groupFile-div_visible'
                            onClick={() => setVisibility({ ...visibility, visibleNome: !visibility.visibleNome })}>
                            {
                                visibility.visibleNome && <AiFillEye></AiFillEye>
                            }

                            {
                                !visibility.visibleNome && <AiFillEyeInvisible></AiFillEyeInvisible>
                            }
                        </span>
                    </div>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={inputs.nome}
                        className="forms-informacoes-group-div_input"
                        readOnly={!visibility.visibleNome}
                        onChange={handleChange}
                    />
                </div>

                <div className="forms-informacoes-group">
                    <div className='forms-informacoes-group-div'>
                        <label htmlFor="email" className="forms-informacoes-group-div_label">
                            Email
                        </label>
                        <span className='forms-informacoes-groupFile-div_visible'
                            onClick={() => setVisibility({ ...visibility, visibleEmail: !visibility.visibleEmail })}>
                            {
                                visibility.visibleEmail && <AiFillEye></AiFillEye>
                            }

                            {
                                !visibility.visibleEmail && <AiFillEyeInvisible></AiFillEyeInvisible>
                            }
                        </span>
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={inputs.email}
                        className="forms-informacoes-group-div_input"
                        readOnly={!visibility.visibleEmail}
                        onChange={handleChange}
                    />
                </div>

                <div className="forms-informacoes-group">
                    <div className='forms-informacoes-group-div'>
                        <label htmlFor="login" className="forms-informacoes-group-div_label">
                            Login
                        </label>
                        <span className='forms-informacoes-groupFile-div_visible'
                            onClick={() => setVisibility({ ...visibility, visibleLogin: !visibility.visibleLogin })}>
                            {
                                visibility.visibleLogin && <AiFillEye></AiFillEye>
                            }

                            {
                                !visibility.visibleLogin && <AiFillEyeInvisible></AiFillEyeInvisible>
                            }
                        </span>
                    </div>

                    <input
                        type="text"
                        id="login"
                        name="login"
                        value={inputs.login}
                        className="forms-informacoes-group-div_input"
                        readOnly={!visibility.visibleLogin}
                        onChange={handleChange}
                    />
                </div>

                <div className="forms-informacoes-group">
                    <div className='forms-informacoes-group-div'>
                        <label htmlFor="dataNascimento" className="forms-informacoes-group-div_label">
                            Data de Nascimento
                        </label>
                        <span className='forms-informacoes-groupFile-div_visible'
                            onClick={() => setVisibility({ ...visibility, visibleData: !visibility.visibleData })}>
                            {
                                visibility.visibleData && <AiFillEye></AiFillEye>
                            }

                            {
                                !visibility.visibleData && <AiFillEyeInvisible></AiFillEyeInvisible>
                            }
                        </span>
                    </div>

                    <input
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        value={inputs.dataNascimento}
                        className="forms-informacoes-group-div_input"
                        readOnly={!visibility.visibleData}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="forms-informacoes_button">
                    Salvar
                </button>
            </form>

            <div className='forms-div'>
                <h2>Trocar senha</h2>

                <span className='forms-div_visible'
                    onClick={() => setVisibility({ ...visibility, visibleSenha: !visibility.visibleSenha })}>
                    {
                        visibility.visibleSenha && <AiFillEye></AiFillEye>
                    }

                    {
                        !visibility.visibleSenha && <AiFillEyeInvisible></AiFillEyeInvisible>
                    }
                </span>
            </div>

            <form onSubmit={handleSubmit} className='forms-novaSenha'>
                <div className='forms-novaSenha_principal'>
                    <div className="forms-novaSenha_group">
                        <label htmlFor="senha" className="forms-novaSenha_group-label">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={inputs.senha}
                            className="forms-novaSenha_group-input"
                            readOnly={!visibility.visibleSenha}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="forms-novaSenha_group">
                        <label htmlFor="confirmar-senha" className="forms-novaSenha_group-label">
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            value={inputs.confirmarSenha}
                            className="forms-novaSenha_group-input"
                            readOnly={!visibility.visibleSenha}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className="forms-novaSenha_button">
                    Salvar
                </button>
            </form>

            <Enderecos></Enderecos>
            <Contatos></Contatos>
        </div>
    );
}