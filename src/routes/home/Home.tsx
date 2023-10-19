import imagemTeste1 from '../../assets/images/imagemTeste1.jpg'; //imagem teste
import CarouselCard from '../../components/carouselCard/CarouselCard';
import CarouselHome from '../../components/carouselHome/CarouselHome';
import Comunidades from '../../components/comunidades/Comunidades';
import Destaque from '../../components/destaque/Destaque';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import SideBar from '../../components/sideBar/SideBar';
import './Home.scss';

export default function Home() {

  const livrosTroca = {
    tituloCard: 'Livros para trocar',
    tituloLivro: 'Enfim, capivaras - T',
    autor: "Luisa Geisler",
    img: imagemTeste1,
  }

  return (
    <>
      <Header></Header>

      <div className='section'>
        <SideBar></SideBar>

        <div className='section-right'>
          <CarouselHome></CarouselHome>

          <Comunidades></Comunidades>

          <Destaque></Destaque>

          <CarouselCard
            tituloCard={livrosTroca.tituloCard}
            tituloLivro={livrosTroca.tituloLivro}
            autor={livrosTroca.autor}
            img={livrosTroca.img}></CarouselCard>

          <Footer></Footer>
        </div>

      </div>
    </>
  );
}
