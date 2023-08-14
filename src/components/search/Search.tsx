import './Search.scss'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
    return (
        <div className='search'>
            <form action="#" method='post'>
                <input type="text" placeholder='Nome do livro ou autor' className='search_input'/>
                <button type='submit' value='Buscar' className='search_button'><FaSearch/></button>
            </form>
        </div>
    )
}