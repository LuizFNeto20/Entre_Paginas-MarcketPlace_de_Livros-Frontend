// import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import imagemTeste1 from '../../assets/images/imagemTeste1.jpg';
import './LivroVenda.scss'

export default function LivroVenda() {
    // // const images = [imagemTeste1, /* Add more image paths here */];
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const goToPrevious = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };

    // const goToNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    // };

    return (
        <div className='card-venda'>
            <button className='card-venda__button-left'>
                <FaArrowLeft />
            </button>
            <h3 className='card-venda__titulo'>Livros a venda</h3>
            <button className='card-venda__button-right'>
                <FaArrowRight />
            </button>
            <div className='card-venda__nav'>
                <div className='card-venda__nav__imagem-container'>
                    <img src={imagemTeste1} alt="imagem de um livro" className='card-venda__nav__imagem' />
                    <h4>Enfim, capivaras</h4>
                    <p>Luisa Geisler</p>
                    <a href='#' className='card-venda__nav__button-ver-mais'>Ver mais</a>
                </div>
                <div className='card-venda__nav__imagem-container'>
                    <img src={imagemTeste1} alt="imagem de um livro" className='card-venda__nav__imagem' />
                    <h4>Enfim, capivaras</h4>
                    <p>Luisa Geisler</p>
                    <a href='#' className='card-venda__nav__button-ver-mais'>Ver mais</a>
                </div>
            </div>
        </div>
    );
}
