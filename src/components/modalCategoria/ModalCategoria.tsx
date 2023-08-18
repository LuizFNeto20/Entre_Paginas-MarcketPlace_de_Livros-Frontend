import { useEffect, useState } from 'react';
import api from '../../hooks/Data';
import './ModalCategoria.scss'

export default function ModalCategoria() {

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
        <div className='modal-categoria'>
            <ul className='modal-categoria__list'>
                {
                    categorias.map((categoria: any, index: number) => (
                        <li key={index + 1}><a href="#" className='modal-categoria__link'>{addEspaço(categoria)}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}