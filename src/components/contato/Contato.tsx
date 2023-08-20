import { SyntheticEvent } from 'react';
import api from '../../hooks/Data';
import './Contato.scss';
import { FaXmark } from 'react-icons/fa6';

interface ContatoProps {
    index: number;
    contato: any;
}

export default function Contato({ index, contato }: ContatoProps) {

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.delete(`/api/contatos/${contato.id}`);
            console.log('Usuario salvo:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }
    };

    return (
        <div className='perfil-right__card'>
            <div className='perfil-right__card-contato'>
                <h3>Contato {index + 1}</h3>
                <p>telefone: <span>{contato.telefone}</span></p>
            </div>
            <button onClick={handleDelete} className='perfil-right__card-close'><FaXmark></FaXmark></button>
        </div>
    );
}
