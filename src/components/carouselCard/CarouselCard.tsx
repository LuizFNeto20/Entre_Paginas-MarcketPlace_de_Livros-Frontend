import './CarouselCard.scss';

interface livro {
    tituloCard: string,
    tituloLivro: string,
    autor: string,
    img: string
}

export default function CarouselCard({ tituloCard, tituloLivro, autor, img }: livro) {
    return (
        <div className='card-venda'>
            <h3 className='card-venda__titulo'>{tituloCard}</h3>

            <div className='card-venda__nav'>
                <button className='card-venda__nav__button-left'>
                </button>
                <div className='card-venda__nav__imagem-container'>
                    <img src={img} alt="imagem de um livro" className='card-venda__nav__imagem' />
                    <h4>{tituloLivro}</h4>
                    <p>{autor}</p>
                    <a href='#' className='card-venda__nav__button-ver-mais'>Ver mais</a>
                </div>
                <div className='card-venda__nav__imagem-container'>
                    <img src={img} alt="imagem de um livro" className='card-venda__nav__imagem' />
                    <h4>{tituloLivro}</h4>
                    <p>{autor}</p>
                    <a href='#' className='card-venda__nav__button-ver-mais'>Ver mais</a>
                </div>

                <button className='card-venda__nav__button-right'>
                </button>
            </div>
        </div>
    );
}