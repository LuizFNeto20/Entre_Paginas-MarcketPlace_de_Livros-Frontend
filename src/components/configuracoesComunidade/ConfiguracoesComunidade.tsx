import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import semImagem from '../../assets/images/semImagem.png';
import api from '../../hooks/Data';
import { IoTrashOutline } from 'react-icons/io5';
import './ConfiguracoesComunidade.scss';

export default function ConfiguracoesComunidade({ comunidade }: any) {
    const navigate = useNavigate();
    const [community, setCommunity] = useState(comunidade);
    const [isDeleting, setIsDeleting] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState<string>("");

    const getImage = async () => {
        try {
            const response = await api.get(`/api/comunidades/showIcone/${community.icone}`, {
                responseType: 'blob',
            });

            const imageUrl = URL.createObjectURL(response.data);

            setImage(imageUrl);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getImage();
    });

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmitFile = async (event: any) => {
        event.preventDefault();

        if (selectedImage) {
            const formData = new FormData();
            formData.append('icone', selectedImage);

            try {
                const response = await api.post(`/api/comunidades/icone/${community.id}`, formData);
                console.log('Imagem salva:', response.data);
            } catch (error) {
                console.error('Erro ao salvar imagem:', error);
            }
        } else {
            console.error('Nenhuma imagem selecionada.');
        }

        navigate("/perfil");
    };

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            const response = await api.delete(`/api/comunidades/${community.id}`);
            console.log('Comunidade deletada:', response.data);
            navigate('/perfil');
        } catch (error) {
            console.error('Erro ao excluir a comunidade:', error);
        }
    }

    const handleFormChange = (event: any) => {
        const { name, value, type, checked } = event.target;
        setCommunity({
            ...community,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await api.patch(`/api/comunidades/${community.id}`, community);
            console.log('Comunidade atualizada:', response.data);
            navigate(`/comunidade/${community.id}`);
        } catch (error) {
            console.error('Erro ao atualizar a comunidade:', error);
        }
    }

    return (
        <div>
            <h1>Configurações da comunidade</h1>

            <img src={community.icone === null ? semImagem : image} width={100} height={100} />

            <form onSubmit={handleSubmitFile}
                method='post'
                encType='multipart/form-data'>
                <div>
                    <div>
                        <label htmlFor="icone" className="forms-informacoes-groupFile-div_label">
                            Icone da Comunidade
                        </label>
                    </div>
                    <input
                        type="file"
                        id="icone"
                        name="icone"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="forms-informacoes_button">
                    Salvar
                </button>
            </form>

            <form onSubmit={handleFormSubmit}>
                <label>
                    Título:
                    <input
                        type="text"
                        name="title"
                        value={community.title}
                        onChange={handleFormChange}
                        required
                    />
                </label>
                <label>
                    Conteúdo:
                    <textarea
                        name="content"
                        value={community.content}
                        onChange={handleFormChange}
                        required
                    ></textarea>
                </label>
                <label>
                    Privado:
                    <input
                        type="checkbox"
                        name="privado"
                        checked={community.privado === "true" ? true : false}
                        onChange={handleFormChange}
                    />
                </label>
                <button type="submit">Salvar Alterações</button>
            </form>
            <button onClick={handleDelete} disabled={isDeleting}>
                <IoTrashOutline /> Deletar Comunidade
            </button>
        </div>
    );
}
