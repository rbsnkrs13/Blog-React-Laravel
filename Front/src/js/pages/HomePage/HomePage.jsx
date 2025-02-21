import CreatePost from "../../components/dev/createPost/createPost";
import Title from "../../components/dev/title/TitleBlog";
import BackToTop from "../../components/dev/BackToTop/BackToTop";
import LikeButton from "../../components/dev/likeButton/LikeButton";
import Categorycarousel from "../../components/dev/Categorycarousel/Categorycarousel";
import Separador from "../../components/dev/Separador/Separador";
const HomePage = () => {
  return (
    <div>
      {/* f_size y h_num son opcionales */}
      <Title texto="Home Page" f_size={40} h_num={1} />
      <Separador />
      <Categorycarousel />
      <Separador />
      <BackToTop />
      <CreatePost />
      <LikeButton />
    </div>
  );
};

export default HomePage;
