import { SyntheticEvent } from 'react';
import { FaXmark } from 'react-icons/fa6';
import api from '../../hooks/Data';
import './Endereco.scss';

interface EnderecoProps {
    index: number;
    endereco: any;
}
export default function Endereco({ index, endereco }: EnderecoProps) {

    const handleDelete = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            const response = await api.delete(`/api/enderecos/${endereco.id}`);
            console.log('Endereço deletado:', response.data);
        } catch (error) {
            console.error('Erro ao salvar projeto:', error);
        }
        window.location.reload();
    };

    return (
        <div className='perfil-right__card'>
            <div className='perfil-right__card-endereco'>
                <h3>Endereço {index + 1}</h3>
                <p>

                    cep: {endereco.cep}<br/>
                    bairro: {endereco.bairro}<br/>
                    localidade: {endereco.localidade}<br/>
                    logradouro: {endereco.logradouro}<br/>
                    pais: {endereco.pais}<br/>
                    uf: {endereco.uf}<br/>
                    complemento: {endereco.complemento}
                </p>
            </div>
            <button onClick={handleDelete} className='perfil-right__card-close'><FaXmark></FaXmark></button>
        </div>
    )
}