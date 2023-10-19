import { useEffect, useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { GiCapybara } from 'react-icons/gi';
import { MdPersonOff } from 'react-icons/md';
import { TbArrowsExchange2 } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../hooks/Data';
import { logout } from '../../redux/userSlice';
import './SideBar.scss';

export default function SideBar() {

    const isLoggedIn = useSelector((state: any) => state.user);
    const [modalVisible, setModalVisible] = useState(false);
    const [itens, setItens] = useState([])

    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }

    // function aparecerModal() {
    //     setModalVisible(!modalVisible);
    // }

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
            <div className='sideBar'>

                <ul>
                    <li>
                        <button className='button' /*onClick={aparecerModal}*/>
                            <Link to="/perfil"><GiCapybara /></Link>

                        </button>
                        <span className="hover-text">Perfil</span>
                    </li>
                    <li>
                        <button className='button'>
                            <AiOutlineBell />
                        </button>
                        <span className="hover-text" style={{ marginLeft: '22px' }}>0 mensagens</span>
                    </li>

                    <li>
                        <button className='button'>
                            <TbArrowsExchange2 />
                        </button>
                        <span className="hover-text" style={{ marginLeft: '35px' }}>Troque um livro</span>
                    </li>
                    <li>
                        <button className='button'>
                            <Link to="/" onClick={handleLogout}><MdPersonOff /></Link>
                        </button>
                        <span className="hover-text">Logout</span>
                    </li>
                </ul>

            </div >

            {/* {
                modalVisible && (
                    itens.map((item: any, index: number) => {
                        return (
                            isLoggedIn.isLoggedIn
                                ?
                                <div className='modal-super' key={index} onClick={() => { setModalVisible(!modalVisible) }}>


                                    <div className='modal'>
                                        <ul>
                                            <li className='modal__item'>
                                            </li>
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
            } */}
        </>
    )
}