import './LivroTroca.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import imagemTeste1 from '../../assets/images/imagemteste1.jpg';

export default function LivroTroca() {
    return (
        <div className='card-troca'>
            <button className='card-troca__button-left'>
                <FaArrowLeft />
            </button>
            <h3 className='card-troca__titulo'>Livros disponiveis para troca</h3>
            <button className='card-troca__button-right'>
                <FaArrowRight />
            </button>
            <div className='card-troca__nav'>
                <div className='card-troca__nav__imagem-container'>
                    <img src={imagemTeste1} alt="imagem de um livro" className='card-troca__nav__imagem' />
                    <h4>Enfim, capivaras</h4>
                    <p>Luisa Geisler</p>
                    <a href='#' className='card-troca__nav__button-ver-mais'>Ver mais</a>
                </div>
                <div className='card-troca__nav__imagem-container'>
                    <img src={imagemTeste1} alt="imagem de um livro" className='card-troca__nav__imagem' />
                    <h4>Enfim, capivaras</h4>
                    <p>Luisa Geisler</p>
                    <a href='#' className='card-troca__nav__button-ver-mais'>Ver mais</a>
                </div>

            </div>
        </div>
    )
}