import './Home.scss'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LivroVenda from '../../components/livrosvenda/LivroVenda';
import LivroTroca from '../../components/livrostroca/LivroTroca';

export default function Home() {

  return (
    <>
      <Header></Header>
      <LivroVenda></LivroVenda>
      <LivroTroca></LivroTroca>
      <Footer></Footer>
    </>
  )
}


