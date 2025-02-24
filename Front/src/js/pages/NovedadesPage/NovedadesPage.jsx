import { useEffect, useState } from 'react';
import "./NovedadesPage.css";
import postService from '../../services/postService';
// import Post from './Post';
// import './NewsCarousel.css';
import Loader from '../../components/dev/Loader/Loader';
import DetallesBlog from '../../components/dev/DetallesBlog/DetallesBlog';

const NovedadesPage = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    loadNewPost();
  }, []);

  const loadNewPost = () => {
    postService
      .getLastTenPost()
      .then(({ data }) => {
        setNewsItems(data)
      })

      .catch(err => console.log(err))
  }



  return (
    <div className='novedades-page'>
      <h1 className='novedades'>Novedades:</h1>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 carousel-news">
        {newsItems && newsItems.length > 0 ? (
          newsItems.map((item, index) => (
            <div className="carousel-item-news " key={index}>
              <DetallesBlog blog={item} />
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>

    </div>
  );
};
export default NovedadesPage;