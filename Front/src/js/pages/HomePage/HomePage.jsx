import CreatePost from "../../components/dev/createPost/createPost";
import Title from "../../components/dev/title/TitleBlog";
import BackToTop from "../../components/dev/backToTop/BackToTop";
import LikeButton from "../../components/dev/likeButton/LikeButton";
import Categorycarousel from "../../components/dev/Categorycarousel/Categorycarousel";
import Separador from "../../components/dev/separador/Separador";
// import Authors from "./js/components/dev/authors/Authors";
import NewsCarousel from "../../components/dev/carousel/NewsCarousel";
import ArticleFinder from "../../components/dev/article_finder/Article_finder_daisy";
import Counter from "../../components/dev/counter/Counter";

const HomePage = () => {
  return (
    <div>
      {/* f_size y h_num son opcionales */}
      <Title texto="Home Page" f_size={40} h_num={1} />
      <NewsCarousel />
      <Separador />
      <Categorycarousel />
      <Separador />
      <ArticleFinder /> 
      <Separador />
      {/* <Authors/> */}
      <Separador />
      <Counter />
      <BackToTop />
      <CreatePost />
      <LikeButton />
    </div>
  );
};

// export default HomePage;
