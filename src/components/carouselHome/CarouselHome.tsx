import { useState, useEffect, useRef } from 'react';
import './CarouselHome.scss';
import { TbPointFilled } from 'react-icons/tb';
import capa from '../../assets/images/capa.png';
import logo from '../../assets/images/logo.png';
import imagemteste1 from '../../assets/images/imagemteste1.jpg';
import testecom from '../../assets/images/testecom.jpg';

export default function CarouselHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imgBackground = [
        {
            imagem: capa,
            texto: 'O que está disponível no Entre Páginas?',
        },
        {
            imagem: logo,
            texto: 'logo 123',
        },
        {
            imagem: imagemteste1,
            texto: 'imagem teste 1',
        },
        {
            imagem: testecom,
            texto: 'imagem teste com',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imgBackground.length);
    };

    const intervalRef = useRef<number | null>(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 6000);
    };

    const resetInterval = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        startInterval();
    };

    useEffect(() => {
        startInterval();

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <section className='section-search'>
            <div className='carousel-container'>
                {imgBackground.map((img, index) => (
                    <img
                        key={index}
                        src={img.imagem}
                        alt={`Imagem ${index + 1}`}
                        className={`section-search__img-capa ${index === currentSlide ? 'active' : ''
                            }`}
                    />
                ))}
            </div>
            <div className='section-search__container'>
                <h1>{imgBackground[currentSlide].texto}</h1>
            </div>
            <ul className='section-search__list'>
                {imgBackground.map((_img, index) => (
                    <li
                        key={index}
                        className={`section-search__list-item ${index === currentSlide ? 'active-li' : ''
                            } ${index === imgBackground.length ? 'list-final' : ''}`}
                        onClick={() => {
                            setCurrentSlide(index);
                            resetInterval();
                        }}
                    >
                        <TbPointFilled />
                    </li>
                ))}
            </ul>
        </section>
    );
}
