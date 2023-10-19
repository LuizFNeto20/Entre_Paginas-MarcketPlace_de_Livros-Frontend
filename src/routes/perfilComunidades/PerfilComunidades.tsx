import { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import ConfiguracoesComunidade from '../../components/configuracoesComunidade/ConfiguracoesComunidade';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import api from '../../hooks/Data';
import './PerfilComunidades.scss';

export default function PerfilComunidades() {

    const { comunidadeId }: any = useParams();
    const [comunidade, setComunidade] = useState<any>([]);

    const [page, setPage] = useState({
        comunidade: true,
        configuracoes: false
    });

    const getPosts = async () => {
        try {
            const response = await api.get(`/api/comunidades/byId/${comunidadeId}`);
            console.log(response.data);
            setComunidade(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <Header></Header>
            <section>
                <h1>{comunidade.id}</h1>
                <h1>{comunidade.title}</h1>

                <span onClick={() => setPage(
                    {
                        comunidade: false,
                        configuracoes: true
                    })}>
                    <IoSettingsOutline />
                </span>

                <main>
                    {
                        page.comunidade && <Posts></Posts>
                    }

                    {
                        page.configuracoes ? (
                            <>
                                <span onClick={() =>
                                    setPage({
                                        comunidade: true,
                                        configuracoes: false
                                    })
                                }>Voltar</span>
                                <ConfiguracoesComunidade comunidade={comunidade} />
                            </>
                        ) : null
                    }

                </main>

            </section >
        </>
    );
}