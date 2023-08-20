import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaCircleUser } from 'react-icons/fa6'
import { AiOutlineMessage } from "react-icons/ai";
import { useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import Nav from '../nav/Nav'
import Search from '../search/Search'
import './Header.scss'
import api from '../../hooks/Data'

export default function Header() {

    const [itens, setItens] = useState([])
    const [modalVisible, setModalVisible] = useState(false);

    const isLoggedIn = useSelector((state: any) => state.user);

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
                <div className='header-menu__logo-container'>
                    <a href="/"><img src={logo} alt="logo do site" /></a>
                </div>

                <Search></Search>

                <div className='header-menu__icons'>
                    <a href='#' className='header-menu__cart'>Meu carrinho</a>
                    <div className='header-menu__user-container'>
                        <a href='#' className='message header-menu__cart'><AiOutlineMessage /></a>
                        {/* {itens.map((item: any, index: number) => {
                            return (
                                isLoggedIn.isLoggedIn && item.papel.papel === "USER"
                                    ? <a href="#" key={index}>Gerenciamento</a> : null
                            )
                        })} */}
                        <button className='header-menu__user' onClick={aparecerModal}>
                            <FaCircleUser />
                        </button>
                    </div>
                </div>
            </header>

            <Nav></Nav>

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
                                            <li className='modal__item'>
                                                <a href="#">Procurar usuários</a>
                                            </li>
                                            <li className='modal__item'>
                                                <a href="#">Ver Pedidos</a>
                                            </li>
                                            <li className='modal__item'>
                                                <a href="#">Vender/Trocar <br /> Livros</a>
                                            </li>
                                            <li className='modal__item'>
                                                <a href="#">Preferencias</a>
                                            </li>
                                            <li className='modal__item'>
                                                <a href="#">Sair da Conta</a>
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