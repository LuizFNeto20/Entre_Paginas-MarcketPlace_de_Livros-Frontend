import './Destaque.scss';
import imagemTeste1 from '../../assets/images/imagemteste1.jpg';

export default function Destaque() {
    return (
        <div className="Destaque">
            <div className='Destaque__capa'>
                <img src={imagemTeste1} alt="" className='Destaque__img-capa' />
                <div className='Destaque__capa-texto'>
                    <h4>Enfim, capivaras</h4>
                    <p className='Destaque__capa-texto-autor'>autor(a): Luisa Geisler</p>
                    <p className='Destaque__capa-texto-sinopse'><span>Descrição:</span> <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
                    <a href='#' className='Destaque__button-ver-mais'>Ver mais</a>
                </div>
            </div>
        </div >
    )
}