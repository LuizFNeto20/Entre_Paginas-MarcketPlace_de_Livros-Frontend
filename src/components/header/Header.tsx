import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineBell } from "react-icons/ai";
import { useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import Nav from '../nav/Nav'
import './Header.scss'
import api from '../../hooks/Data'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice'
import Search from '../search/Search';

interface nav {
    nav: boolean;
}

export default function Header({ nav }: nav) {

    const [itens, setItens] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: any) => state.user);

    console.log(isLoggedIn)
    function handleLogout() {
        dispatch(logout());
    }

    function aparecerModal() {
        setModalVisible(!modalVisible);
    }

    const getPosts = async () => {
        try {
            const response = await api.get("/api/usuarios/list")
            setItens(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <>
            <header className='header-menu'>
                <div className='header-menu__logo'>
                    <div className='header-menu__logo-container'>
                        <a href="/"><img src={logo} alt="logo do site" /></a>
                    </div>
                    <a href="/">Entre Páginas</a>
                </div>

                {/* <nav  className='header-menu__list'>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/">LIVROS</Link>
                        </li>
                    </ul>
                </nav> */}

                <Search></Search>

                <div className='header-menu__icons'>
                    <div className='header-menu__user-container'>
                        <div className='header-menu__cart-container'>
                            <div className='header-menu__cart-count'>
                                <a href='#' className='message header-menu__cart'><AiOutlineBell /></a>
                                {/* <span className='message-number header-menu__cart-number'>0</span> */}
                            </div>
                            <div className='header-menu__cart-count'>
                                <a href="#" className='message header-menu__cart'><HiOutlineShoppingCart /></a>
                                {/* <span className='cart-number header-menu__cart-number'>0</span> */}
                            </div>
                        </div>
                        {/* {itens.map((item: any, index: number) => {
                            return (
                                isLoggedIn.isLoggedIn && item.papel.papel === "USER"
                                    ? <a href="#" key={index}>Gerenciamento</a> : null
                            )
                        })} */}
                        <button className='header-menu__user' onClick={aparecerModal}>
                            {isLoggedIn.login}
                        </button>
                    </div>
                </div>
            </header>

            {
                nav && <Nav></Nav>
            }

            {
                modalVisible && (
                    itens.map((item: any, index: number) => {
                        return (
                            isLoggedIn.isLoggedIn
                                ?
                                <div className='modal-super' key={index} onClick={() => { setModalVisible(!modalVisible) }}>


                                    <div className='modal'>
                                        <ul>
                                            <li className='modal__item'>
                                                <Link to="/perfil">{isLoggedIn.login === item.login ? item.login : "Perfil"}</Link>
                                            </li>
                                            {/* <li className='modal__item'>
                                                <a href="#">Ver Pedidos</a>
                                            </li> */}
                                            {/* <li className='modal__item'>
                                                <a href="#">Vender/Trocar <br /> Livros</a>
                                            </li>
                                            <li className='modal__item'>
                                                <a href="#">Preferencias</a>
                                            </li> */}
                                            <li className='modal__item'>
                                                <Link to="/" onClick={handleLogout}>Sair da conta</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div className='modal' key={index}>
                                    <ul>
                                        <li className='modal__item'>
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li className='modal__item'>
                                            <Link to="/cadastro">Cadastre-se</Link>
                                        </li>
                                    </ul>
                                </div>
                        )
                    })
                )
            }
        </>
    )
}