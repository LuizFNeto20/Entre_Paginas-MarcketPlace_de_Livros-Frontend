import { useEffect, useState } from 'react';
import './Nav.scss'
import { FiMenu } from 'react-icons/fi'
import api from '../../hooks/Data';
import { useSelector } from 'react-redux';

export default function Nav() {

    const [modalVisible, setModalVisible] = useState(false);

    const [categorias, setCategorias] = useState([]);

    const isLoggedIn = useSelector((state: any) => state.user);

    const getPosts = async () => {
        try {
            const response = await api.get("/api/categorias")
            setCategorias(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    function addEspaço(palavra: string) {
        let palavraFinal = "";

        palavraFinal = palavra.replace(/_/g, " ");

        return palavraFinal;
    }

    return (
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu__ul'>
                    <li onClick={() => { setModalVisible(!modalVisible) }}>
                        <span><FiMenu /></span>
                        Categorias
                    </li>
                    {
                        isLoggedIn.isLoggedIn && <li>Livros desejados</li>
                    }
                    {
                        isLoggedIn.isLoggedIn && <li>Ofertas para minha região</li>
                    }
                    <li>

                    </li>
                </ul>
            </nav>

            {modalVisible
                && <div className='modal-superior' onClick={() => { setModalVisible(!modalVisible) }}>
                    <div className='modal-categoria'>
                        <ul className='modal-categoria__list'>
                            {
                                categorias.map((categoria: any, index: number) => (
                                    <li key={index + 1}><a href="#" className='modal-categoria__link'>{addEspaço(categoria)}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>}
        </>
    )
}
