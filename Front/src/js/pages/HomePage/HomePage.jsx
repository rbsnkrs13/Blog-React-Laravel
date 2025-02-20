import CreatePost from "../../components/dev/createPost/createPost";
import Title from "../../components/dev/Title/Title";
import BackToTop from "../../components/dev/BackToTop/BackToTop";
import Categorycarousel from "../../components/dev/Categorycarousel/Categorycarousel";

const HomePage = () => {
  return (
    <div>
      {/* f_size y h_num son opcionales */}
      <Title texto="Home Page" f_size = {40} h_num={1} />
      <Categorycarousel />
      <BackToTop />
      <CreatePost />

    </div>
  );
};

export default HomePage;
