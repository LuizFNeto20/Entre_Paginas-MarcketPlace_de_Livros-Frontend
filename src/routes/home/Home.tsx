import imagemTeste1 from '../../assets/images/imagemTeste1.jpg'; //imagem teste
import CarouselCard from '../../components/carouselCard/CarouselCard';
import CarouselHome from '../../components/carouselHome/CarouselHome';
import Comunidades from '../../components/comunidades/Comunidades';
import Destaque from '../../components/destaque/Destaque';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.scss';

export default function Home() {

  const livrosVenda = {
    tituloCard: 'Livros a venda',
    tituloLivro: 'Enfim, capivaras - V',
    autor: "Luisa Geisler",
    img: imagemTeste1,
  }

  const livrosTroca = {
    tituloCard: 'Livros para trocar',
    tituloLivro: 'Enfim, capivaras - T',
    autor: "Luisa Geisler",
    img: imagemTeste1,
  }

  return (
    <>
      <Header nav={true}></Header>
      <CarouselHome></CarouselHome>

      <Comunidades></Comunidades>

      <CarouselCard
        tituloCard={livrosVenda.tituloCard}
        tituloLivro={livrosVenda.tituloLivro}
        autor={livrosVenda.autor}
        img={livrosVenda.img}></CarouselCard>

      <Destaque></Destaque>

      <CarouselCard
        tituloCard={livrosTroca.tituloCard}
        tituloLivro={livrosTroca.tituloLivro}
        autor={livrosTroca.autor}
        img={livrosTroca.img}></CarouselCard>

      <Footer></Footer>
    </>
  );
}
