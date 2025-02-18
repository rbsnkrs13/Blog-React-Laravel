import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsCarousel.css';

export default function NewsCarousel({ newsItems }) {
    return (
        <Carousel>
            {newsItems.map((item, index) => (
                <Carousel.Item key={index}>
                    <div className="item-content">
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
                </Carousel.Item>
            ))}
        </Carousel>
    );
}