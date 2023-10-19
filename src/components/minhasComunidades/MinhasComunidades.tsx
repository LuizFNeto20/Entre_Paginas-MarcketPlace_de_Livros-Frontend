import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../hooks/Data';
import ComunidadeAchada from '../comunidadeAchada/ComunidadeAchada';
import './MinhasComunidades.scss';

export default function MinhasComunidades({ usuarioLogado }: any) {

    const [comunidades, setComunidades] = useState<any>([]);

    const getPosts = async () => {
        try {
            const response = await api.get(`/api/comunidades/mycommunities/${"ADMIN"}/${usuarioLogado.id}`);
            setComunidades(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <div>
                <h2>Comunidades criadas por mim.</h2>
                <div>
                    {comunidades.map((comunidade: any) => (
                        <Link to={`/comunidade/${comunidade.id}`} key={comunidade.id} >
                            <ComunidadeAchada comunidade={comunidade}></ComunidadeAchada>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h2>Comunidades em que participo como moderador.</h2>
            </div>

            <div>
                <h2>Comunidades em que participo.</h2>
            </div>
        </>
    );
}