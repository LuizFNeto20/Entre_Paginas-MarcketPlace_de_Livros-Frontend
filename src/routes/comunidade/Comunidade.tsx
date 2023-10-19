import { useState } from 'react';
import api from '../../hooks/Data';

export default function Comunidade({ usuarioLogado }: any) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        privado: false,
    });

    const handleChange = (event: any) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await api.post(`/api/comunidades/${usuarioLogado.id}`, formData);
            console.log('Salvou com sucesso: ', response.data);
        } catch (error) {
            console.error('Erro ao salvar:', error);
        }
    };

    return (
        <div>
            <h2>Formulário da Comunidade</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Conteúdo:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="privado">Privado:</label>
                    <input
                        type="checkbox"
                        id="privado"
                        name="privado"
                        checked={formData.privado}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
