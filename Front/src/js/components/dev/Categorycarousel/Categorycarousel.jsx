import { useState } from 'react';
import './Categorycarousel.css';
// import Ciencia from '../../../../assets/carouselVertical/Ciencia.webp';
// import Cultura from '../../../../assets/carouselVertical/Cultura.webp';
// import Deportes from '../../../../assets/carouselVertical/Deportes.webp';
// import economia from '../../../../assets/carouselVertical/economia.webp';
// import Entretenimiento from '../../../../assets/carouselVertical/Entretenimiento.webp';
// import Estetica from '../../../../assets/carouselVertical/Estetica.webp';
// import Recetas from '../../../../assets/carouselVertical/Recetas.webp';
// import salud from '../../../../assets/carouselVertical/salud.webp';
// import Tecnologia from '../../../../assets/carouselVertical/Tecnologia.webp';
// import Viajes from '../../../../assets/carouselVertical/Viajes.webp';
import servicioCategorias from '../../../services/categoriesService';
import Category from '../CategoryCarouselItem/CategoryItem';


// const provisionalCategories = [
//     { id: 1, title: 'Tecnologia', image: Tecnologia, description: 'Noticias de tecnologia' },
//     { id: 2, title: 'Salud', image: salud, description: 'Noticias de salud' },
//     { id: 3, title: 'Ciencia', image: Ciencia, description: 'Noticias de ciencia' },
//     { id: 4, title: 'Viajes', image: Viajes, description: 'Noticias de viajes' },
//     { id: 5, title: 'Cultura', image: Cultura, description: 'Noticias de cultura' },
//     { id: 6, title: 'Deportes', image: Deportes, description: 'Noticias de deportes' },
//     { id: 7, title: 'Entretenimiento', image: Entretenimiento, description: 'Noticias de entretenimiento' },
//     { id: 8, title: 'Recetas', image: Recetas, description: 'Noticias de recetas' },
//     { id: 9, title: 'Estetica', image: Estetica, description: 'Noticias de estetica' },
//     { id: 10, title: 'Economia', image: economia, description: 'Noticias de economia' },
// ];

export default function CategoryCarrousel() {
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     setCategories(provisionalCategories);
    // }, []);

    servicioCategorias.
        getCategorias()
        .then(({ data }) => {

            setCategories(data)
        })
        .catch(err => console.log(err))


    // .then((categories) => {
    //     setCategories(categories);
    //     console.log(categories);
    // })
    // .catch((error) => console.error(error));

    return (
        <div className="flex justify-center items-center">
            <div className="carousel carousel-vertical rounded-box carousel-Category">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="carousel-item carousel-item-Category cursor-pointer relative"
                    >
                        <Category
                            title={category.name}
                            imageUrl={category.img_url} // Ajusta la ruta según tu estructura de carpetas
                            description={category.description} // Añade la descripción
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}