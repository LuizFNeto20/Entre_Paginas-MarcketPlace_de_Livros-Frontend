import './Nav.scss'
import { FiMenu } from 'react-icons/fi'

export default function Nav() {
    return (
        <nav className='nav-menu'>
            <ul className='nav-menu__ul'>
                <li>
                    <span><FiMenu /></span>
                    Categorias
                </li>
            </ul>
        </nav>
    )
}