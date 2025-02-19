import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsCarousel.css';

export default function NewsCarousel({ newsItems }) {
    // Función para agrupar los elementos de noticias en el actual, el anterior y el siguiente
    const groupNewsItems = (items) => {
        return items.map((_, i) => {
            const prevIndex = (i - 1 + items.length) % items.length;
            const nextIndex = (i + 1) % items.length;
            return [items[prevIndex], items[i], items[nextIndex]];
        });
    };

    const groupedNewsItems = groupNewsItems(newsItems, 3);

    return (
        <Carousel className='news-carousel' interval={null} indicators={false}>
            {groupedNewsItems.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex} className='carousel-item'>
                    <div className="item-group">
                        {group.map((item, itemIndex) => (
                            <div key={itemIndex} className="item-content">
                                <h3 className='item-title'>{item.title}</h3>
                                <div className="item-text-with-image">
                                    {item.img && <img
                                        className="item-image"
                                        src={item.img}
                                        alt={item.title}
                                    />}
                                    <p className='item-text'>{item.bodyText}</p>
                                </div>
                                {item.tags.length > 0 && <p className='item-tag'>{item.tags.join(', ')}</p>}
                                <p className="item-author"><small>{item.author}</small></p>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}