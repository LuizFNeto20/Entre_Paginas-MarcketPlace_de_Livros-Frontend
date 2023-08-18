import './Home.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LivroVenda from '../../components/livrosvenda/LivroVenda';
import LivroTroca from '../../components/livrostroca/LivroTroca';
import { useSelector } from 'react-redux';

export default function Home() {
  const isLoggedIn = useSelector((state: any) => state.user);

  console.log(isLoggedIn)
  return (
    <>
      {isLoggedIn && <Header></Header>}
      <LivroVenda></LivroVenda>
      <LivroTroca></LivroTroca>
      <Footer></Footer>
    </>
  )
}


