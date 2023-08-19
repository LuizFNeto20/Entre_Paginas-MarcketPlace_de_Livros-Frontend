import { useEffect, useState } from 'react';
import './Nav.scss'
import { FiMenu } from 'react-icons/fi'
import api from '../../hooks/Data';

export default function Nav() {

    const [modalVisible, setModalVisible] = useState(false);

    const [categorias, setCategorias] = useState([]);

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

    function addEspaço(categoria: string) {
        let palavraFinal = "";

        for (let i = 0; i < categoria.length; i++) {
            const char = categoria[i];
            const prevChar = categoria[i - 1];

            if (i > 0 && i < categoria.length && char === char.toUpperCase() && prevChar !== " ") {
                palavraFinal += " " + char;
            }
            else {
                palavraFinal += char;
            }
        }

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
