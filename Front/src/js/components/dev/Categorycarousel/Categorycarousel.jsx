import React, { useEffect, useState } from 'react';
import './Categorycarousel.css';
import Category from '../Category/Category';
import Ciencia from '../../../../assets/carouselVertical/Ciencia.webp';
import Cultura from '../../../../assets/carouselVertical/Cultura.webp';
import Deportes from '../../../../assets/carouselVertical/Deportes.webp';
import economia from '../../../../assets/carouselVertical/economia.webp';
import Entretenimiento from '../../../../assets/carouselVertical/Entretenimiento.webp';
import Estetica from '../../../../assets/carouselVertical/Estetica.webp';
import Recetas from '../../../../assets/carouselVertical/Recetas.webp';
import salud from '../../../../assets/carouselVertical/salud.webp';
import Tecnologia from '../../../../assets/carouselVertical/Tecnologia.webp';
import Viajes from '../../../../assets/carouselVertical/Viajes.webp';

const provisionalCategories = [
    { id: 1, title: 'Tecnologia', image: Tecnologia },
    { id: 2, title: 'Salud', image: salud },
    { id: 3, title: 'Ciencia', image: Ciencia },
    { id: 4, title: 'Viajes', image: Viajes },
    { id: 5, title: 'Cultura', image: Cultura },
    { id: 6, title: 'Deportes', image: Deportes },
    { id: 7, title: 'Entretenimiento', image: Entretenimiento },
    { id: 8, title: 'Recetas', image: Recetas },
    { id: 9, title: 'Estetica', image: Estetica },
    { id: 10, title: 'Economia', image: economia }
];

export default function CategoryCarrousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(provisionalCategories);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="carousel carousel-vertical rounded-box w-72 h-24">
                {categories.map((category) => (<>
                    <div
                        key={category.id}
                        className="carousel-item  cursor-pointer relative"
                    >
                        <Category
                            title={category.title}
                            imageUrl={category.image} // Ajusta la ruta según tu estructura de carpetas
                        />
                    </div>
                    </>
                ))}
            </div>
        </div>
    );
}