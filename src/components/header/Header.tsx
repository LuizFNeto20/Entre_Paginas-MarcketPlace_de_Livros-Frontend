import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import logo from '../../assets/images/logo.png';
import Search from '../search/Search';
import './Header.scss';

export default function Header() {

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
            </header>

            
        </>
    )
}