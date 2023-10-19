import './comunidadeAchada.scss';
import semImagem from '../../assets/images/semImagem.png';
import { useEffect, useState } from 'react';
import api from '../../hooks/Data';

export default function ComunidadeAchada({ comunidade }: any) {

    const [image, setImage] = useState<string>("");

    const getImage = async () => {
        try {
            const response = await api.get(`/api/comunidades/showIcone/${comunidade.icone}`, {
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

    return (
        <div>
            <img src={comunidade.icone === null ? semImagem : image} width={100} height={100} />
            <h5>{comunidade.title}</h5>
            <p>{comunidade.content}</p>
            <p>{comunidade.privado === false ? "Comunidade privada" : "Comunidade livre"}</p>
        </div>
    );
}
