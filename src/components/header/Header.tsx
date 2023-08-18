import { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaCartShopping, FaCircleUser } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import Nav from '../nav/Nav'
import Search from '../search/Search'
import './Header.scss'

export default function Header() {

    const isLoggedIn = useSelector((state: any) => state.user);
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
                    <button className='header-menu__cart'>Meu carrinho</button>
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