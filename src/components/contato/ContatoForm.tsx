import './ContatoForm.scss'
import { SyntheticEvent, useState } from "react";
import api from "../../hooks/Data";

interface indexId {
    idUsuario: string | null;
}

export default function ContatoForm({ idUsuario }: indexId) {

    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.post(`/api/contatos/${idUsuario}`, { telefone });
            console.log('Contato Salvo salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }

        window.location.href = '/perfil';
    };
    
    return (
        <div className='perfil-right__card'>
            <div className='perfil-right__card-contato'>
                <h3>Novo Contato</h3>
                <form onSubmit={handleSubmit} method='post'>
                    <label htmlFor="telefone">Informe um número de contato:</label>
                    <input type="tel" name='telefone' placeholder='(67) 99999-9999' onChange={(e) => setTelefone(e.target.value)} required value={telefone} />
                    <button type='submit'>adicionar</button>
                </form>
            </div>
        </div>
    )
}