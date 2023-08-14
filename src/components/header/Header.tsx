import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaCartShopping, FaCircleUser } from 'react-icons/fa6'
import logo from '../../assets/images/logo.png'
import Search from '../search/Search'
import './Header.scss'
import Nav from '../nav/Nav'

export default function Header() {

    const [modalVisible, setModalVisible] = useState(false);

    function aparecerModal() {
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <header className='header-menu'>
                <div className='header-menu__logo-container'>
                    <a href="/"><img src={logo} alt="logo do site" /></a>
                </div>

                <Search></Search>

                <div className='header-menu__icons'>
                    <button className='header-menu__cart'><FaCartShopping />
                        <span className='header-menu__cart-count'>0</span>
                    </button>
                    <button className='header-menu__user' onClick={aparecerModal}><FaCircleUser /></button>
                </div>
            </header>

            <Nav></Nav>

            {modalVisible && (
                <div className='modal'>
                    <ul>
                        <li className='modal__item'>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className='modal__item'>
                            <Link to="/cadastro">Cadastre-se</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}