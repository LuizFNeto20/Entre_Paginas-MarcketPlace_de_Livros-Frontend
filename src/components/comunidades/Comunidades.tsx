import { useEffect } from 'react';
import imgTeste from '../../assets/images/testecom.jpg';
import './Comunidades.scss';

export default function Comunidades() {
    useEffect(() => {
        const h5Elements = document.querySelectorAll('.comunidades-destaque__container h5');

        h5Elements.forEach((h5) => {
            const text = h5.textContent;
            if (text !== null && text.length > 10) {
                h5.textContent = text.substring(0, 10) + '...';
            }
        });
    }, []);

    return (
        <div className='comunidades'>
            <h3 className='comunidades-titulo'>Comunidades em destaque</h3>
            <div className='comunidades-destaque'>
                <button className='comunidades-destaque__button-left'></button>
                <div className='comunidades-destaque__container'>
                    <img src={imgTeste} alt="" />
                    <h5>Augustinho</h5>
                    <p>membros: 10</p>
                </div>
                <div className='comunidades-destaque__container'>
                    <img src={imgTeste} alt="" />
                    <h5>Fãs do Augustinho</h5>
                    <p>membros: 10</p>
                </div>
                <button className='comunidades-destaque__button-right'></button>
            </div>
        </div>
    )
}
