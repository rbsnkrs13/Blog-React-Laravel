
const HomePage = () => {
  return (
    <div>
      {/* f_size y h_num son opcionales */}
      <Title texto="Home Page" f_size = {40} h_num={1} />
      <BackToTop />
      <CreatePost />

    </div>
  );
};

export default HomePage;
