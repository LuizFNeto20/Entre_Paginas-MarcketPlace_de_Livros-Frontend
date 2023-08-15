import { useState } from 'react';
import ModalCategoria from '../modalCategoria/ModalCategoria'
import './Nav.scss'
import { FiMenu } from 'react-icons/fi'

export default function Nav() {

    const [modalVisible, setModalVisible] = useState(true);

    function aparecerModal() {
        setModalVisible(!modalVisible);
    }

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