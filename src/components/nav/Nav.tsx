import { useEffect, useState } from 'react';
import ModalCategoria from '../modalCategoria/ModalCategoria'
import './Nav.scss'
import { FiMenu } from 'react-icons/fi'

export default function Nav() {

    const [modalVisible, setModalVisible] = useState(false);

    function aparecerModal() {
        setModalVisible(!modalVisible);
    }

    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         if (modalVisible && !event.target.closest('.modal-categoria__link')) {
    //             setModalVisible(false);
    //         }
    //     };

    //     window.addEventListener('click', handleOutsideClick);

    //     return () => {
    //         window.removeEventListener('click', handleOutsideClick);
    //     };
    // }, [modalVisible]);

    return (
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu__ul'>
                    <li onClick={aparecerModal}>
                        <span><FiMenu /></span>
                        Categorias
                    </li>
                </ul>
            </nav>

            {modalVisible && <ModalCategoria></ModalCategoria>}
        </>
    )
}