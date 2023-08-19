import { useState, SyntheticEvent } from 'react'
import './Contato.scss'
import api from '../../hooks/Data';

export default function Contato({ novo, index }: any) {

    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.post('/api/contatos', { telefone });
            console.log('Contato Salvo salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }

        window.location.href = '/perfil';
    };

    return (
        novo ? (
            <div className='perfil-right__card'>
                <div className='perfil-right__card-contato'>
                    <h3>Contato {index + 1}</h3>
                    <form onChange={handleSubmit} method='post'>
                        <label htmlFor="telefone">Informe um número de contato:</label>
                        <input type="tel" name='telefone' placeholder='(67) 99999-9999' onChange={(e) => setTelefone(e.target.value)} required value={telefone} />
                        <button type='submit'>adicionar</button>
                    </form>
                </div>
            </div>
        ) : (
            <div className='perfil-right__card'>
                <div className='perfil-right__card-contato'>
                    <h3>Contato {index + 1}</h3>
                    <p>telefone: <span>(11) 99999-9999</span></p>
                </div>
            </div>
        )
    );
}
