import { SyntheticEvent } from 'react';
import { FaXmark } from 'react-icons/fa6';
import api from '../../hooks/Data';
import './Contato.scss';

interface ContatoProps {
    index: number;
    contato: any;
}

export default function Contato({ index, contato }: ContatoProps) {

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.delete(`/api/contatos/${contato.id}`);
            console.log('Contato Deletado:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }
        window.location.reload();
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
