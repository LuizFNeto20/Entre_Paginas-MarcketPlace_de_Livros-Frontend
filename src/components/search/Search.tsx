// import axios from 'axios';
import './Search.scss'
// import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {

    // const [erro, setErro] = useState('');
    // const [titulo, setTitulo] = useState('');
    // const [livro, setLivro] = useState([]);

    // const getLivros = async () => {
    //     try {
    //         const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${titulo}&langRestrict=pt&key=AIzaSyCneFuVfysqGY6CGDXI7IQYIPVfMtgLsIw`);
    //         console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
    //         setLivro(response.data.items);
    //     } catch (error) {
    //         setErro('Erro ao buscar livro');
    //         console.error('Erro ao buscar livro:', error);
    //     }
    // };

    // useEffect(() => {
    //     getLivros();
    // }, [titulo])

    return (
        <div className='search'>
            <input type="text" placeholder='Livro ou Autor' spellCheck='false' required className='search_input' />
            <button value='Buscar' className='search_button'>
                <span>
                    <FaSearch />
                </span>
            </button>
            {/* <input type="text" placeholder='Faça sua pesquisa!!' spellCheck='false' required className='search_input' onChange={(event) => setTitulo(event.target.value)} value={titulo} /> */}
            {/* <button value='Buscar' className='search_button'><FaSearch /></button> */}

            {/* <div className='search_filter'>
                {
                    livro.map((livro: any) => {
                        const imageLinks = livro.volumeInfo.imageLinks;

                        return (
                            <div className='search_filter_item' key={livro.id}>
                                {imageLinks && imageLinks.thumbnail && <img src={imageLinks.thumbnail} alt={livro.volumeInfo.title} />}
                                <p>{livro.volumeInfo.title}</p>
                            </div>
                        )
                    })
                }

            </div> */}
        </div>
    )
}
