import './Home.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LivroVenda from '../../components/livrosvenda/LivroVenda';
import LivroTroca from '../../components/livrostroca/LivroTroca';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

export default function Home() {

  const opa = useSelector(selectUser);

  console.log(opa);

  return (
    <>
      <Header></Header>
      <LivroVenda></LivroVenda>
      <LivroTroca></LivroTroca>
      <Footer></Footer>
    </>
  )
}


