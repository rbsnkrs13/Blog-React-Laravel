import { useParams } from 'react-router-dom';
import Ciencia from '../../../assets/categorias/Ciencia.webp';
// import Cultura from '../../../assets/categorias/Cultura.webp';
// import Deportes from '../../../assets/categorias/Deportes.webp';
// import Entretenimiento from '../../../assets/categorias/Entretenimiento.webp';
// import Economia from '../../../assets/categorias/economia.webp';
// import Estetica from '../../../assets/categorias/Estetica.webp';
// import Recetas from '../../../assets/categorias/Recetas.webp';
// import salud from '../../../assets/categorias/salud.webp';
// import Tecnologia from '../../../assets/categorias/Tecnologia.webp';
// import Viajes from '../../../assets/categorias/Viajes.webp';
import './DetallesBlogPage.css';
import DetallesBlog from '../../components/dev/DetallesBlog/DetallesBlog';

const DetallesBlogPage = () => {
  const { blog_id } = useParams();

  const blogs =
    // [
    { id: blog_id, titulo: 'prueba', contenido: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aut laudantium nisi assumenda aspernatur, qui saepe maiores necessitatibus itaque aliquid alias autem corrupti eos eveniet harum deleniti blanditiis quisquam impedit!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aut laudantium nisi assumenda aspernatur, qui saepe maiores necessitatibus itaque aliquid alias autem corrupti eos eveniet harum deleniti blanditiis quisquam impedit!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aut laudantium nisi assumenda aspernatur, qui saepe maiores necessitatibus itaque aliquid alias autem corrupti eos eveniet harum deleniti blanditiis quisquam impedit!', autor: 'prueba de autor', tag: '#1er tag', image: Ciencia }
  //   { titulo: 'segundo blog', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.', autor: 'autor 2', tag: '#2do tag', image: Cultura },
  //   { titulo: 'tercer blog', contenido: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.', autor: 'autor 3', tag: '#3er tag', image: Deportes },
  //   { titulo: 'cuarto blog', contenido: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.', autor: 'autor 4', tag: '#4to tag', image: Entretenimiento },
  //   { titulo: 'quinto blog', contenido: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.', autor: 'autor 5', tag: '#5to tag', image: Economia },
  //   { titulo: 'sexto blog', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.', autor: 'autor 6', tag: '#6to tag', image: Estetica },
  //   { titulo: 'septimo blog', contenido: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.', autor: 'autor 7', tag: '#7mo tag', image: Recetas },
  //   { titulo: 'octavo blog', contenido: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.', autor: 'autor 8', tag: '#8vo tag', image: salud },
  //   { titulo: 'noveno blog', contenido: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.', autor: 'autor 9', tag: '#9no tag', image: Tecnologia },
  //   { titulo: 'decimo blog', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.', autor: 'autor 10', tag: '#10mo tag', image: Viajes },
  // ];

  return (
    <div>
      <div>
        <h2>Detalles del Blog</h2>


        <DetallesBlog blog={blogs} /> </div >
    </div>

  );
};

export default DetallesBlogPage;
