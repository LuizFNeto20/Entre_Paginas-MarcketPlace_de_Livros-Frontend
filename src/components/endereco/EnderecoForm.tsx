import { useState, useEffect, SyntheticEvent } from 'react';
import './EnderecoForm.scss';
import axios from 'axios';
import api from '../../hooks/Data';

interface IndexId {
    idUsuario: string | null;
}

interface Endereco {
    uf: string;
    bairro: string;
    logradouro: string;
    localidade: string;
}

export default function EnderecoForm({ idUsuario }: IndexId) {

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState<Endereco>({
        uf: '',
        bairro: '',
        logradouro: '',
        localidade: '',
    });
    const [erro, setErro] = useState('');
    const [pais, setPais] = useState('');
    const [complemento, setComplemento] = useState('');

    const getEndereco = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                setErro('CEP não encontrado');
            } else {
                setErro('');
                setEndereco({
                    uf: response.data.uf,
                    bairro: response.data.bairro,
                    logradouro: response.data.logradouro,
                    localidade: response.data.localidade,
                });
            }
        } catch (error) {
            setErro('Erro ao buscar endereço');
            console.error('Erro ao buscar endereço:', error);
        }
    };

    const isValidCep = (cep: string) => {
        const cepPattern = /^[0-9]{8}$/;
        return cepPattern.test(cep);
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (!isValidCep(cep)) {
            setErro('CEP inválido');
            return;
        }

        const enderecoFinal = {
            ...endereco,
            pais: pais,
            complemento: complemento,
            cep: cep,
        };

        console.log('Endereço Salvo:', enderecoFinal);


        try {
            const response = await api.post(`/api/enderecos/${idUsuario}`, { ...endereco, pais, complemento, cep });
            console.log('Endereço Salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar endereço:', error);
        }

        window.location.reload();
    }
        ;

    useEffect(() => {
        if (cep.length === 8) {
            getEndereco();
        } else {
            setEndereco({
                uf: '',
                bairro: '',
                logradouro: '',
                localidade: '',
            });
            setErro('');
        }
    }, [cep]);


    return (
        <div className='endereco-form'>
            <h3>Endereço</h3>
            <form method='post' onSubmit={handleSubmit}>
                <div className='endereco-form__input'>
                    <label htmlFor='cep'>CEP</label>
                    <input type='text' name='cep' maxLength={8}
                        pattern='[0-9]{8}'
                        title='CEP deve conter 8 números'
                        required
                        autoComplete='off'
                        autoFocus id='cep' placeholder="Digite o CEP"
                        value={cep} onChange={(e) => setCep(e.target.value)} />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='uf'>Uf</label>
                    <input type='text' name='uf' id='uf' readOnly required placeholder="Digite o uf" value={endereco.uf} />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='bairro'>Bairro</label>
                    <input type='text' name='bairro' id='bairro' readOnly required placeholder="Digite o bairro" value={endereco.bairro} />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='logradouro'>Logradouro</label>
                    <input type='text' name='logradouro' id='logradouro' readOnly required placeholder="Digite o logradouro" value={endereco.logradouro} />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='cidade'>Cidade</label>
                    <input type='text' name='cidade' id='cidade' readOnly required placeholder="Digite o cidade" value={endereco.localidade} />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='pais'>País</label>
                    <input type='text' name='pais' id='pais' required placeholder="Digite o pais" value={pais} onChange={(e) => setPais(e.target.value)} />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='complemento'>Complemento</label>
                    <input type='text' name='complemento' id='complemento' placeholder="Digite o complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                </div>

                <button type='submit'>Adicionar</button>
            </form>
            {erro && <p className="erro-mensagem">{erro}</p>}
        </div>
    )
}