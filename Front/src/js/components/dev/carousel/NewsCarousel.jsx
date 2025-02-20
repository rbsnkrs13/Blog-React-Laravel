import React from 'react';
import Post from './Post';
import './NewsCarousel.css';

export default function NewsCarousel({ newsItems }) {
    // Función para agrupar los elementos de noticias en el actual, el anterior y el siguiente

    return (
        <div className="carousel">
            {newsItems.map((item, index) => (
                <Post key={index} item={item} index={index} totalItems={newsItems.length} />
            ))}
        </div>
    );
}
