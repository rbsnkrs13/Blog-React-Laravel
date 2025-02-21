import CreatePost from "../../components/dev/createPost/createPost";
import Title from "../../components/dev/title/TitleBlog";
import BackToTop from "../../components/dev/BackToTop/BackToTop";
const HomePage = () => {
  const { title } = useLocation().state || { title: "Home Page" };

  return (
    <div>
      {/* f_size y h_num son opcionales */}
      <Title texto={title} f_size={40} h_num={1} />
      <BackToTop />
      <CreatePost />
      <LikeButton />
    </div>
  );
};

export default HomePage;
