import { useState } from "react";
import "./NewsCarousel.css"; // Puedes adaptar estilos personalizados aquí

export default function NewsCarousel({ newsItems }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Agrupar elementos como en la versión anterior
    const groupNewsItems = (items) => {
        return items.map((_, i) => {
            const prevIndex = (i - 1 + items.length) % items.length;
            const nextIndex = (i + 1) % items.length;
            return [items[prevIndex], items[i], items[nextIndex]];
        });
    };

    const groupedNewsItems = groupNewsItems(newsItems);

    // Funciones de navegación
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? groupedNewsItems.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === groupedNewsItems.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel w-full rounded-lg shadow-lg bg-base-200 p-4">
            {groupedNewsItems.map((group, groupIndex) => (
                <div
                    key={groupIndex}
                    className={`carousel-item w-full ${groupIndex === currentSlide ? "block" : "hidden"}`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {group.map((item, itemIndex) => (
                            <div key={itemIndex} className="p-4 bg-base-100 rounded-lg shadow">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <div className="flex gap-4 items-start mt-2">
                                    {item.img && (
                                        <img
                                            className="w-24 h-24 object-cover rounded-lg"
                                            src={item.img}
                                            alt={item.title}
                                        />
                                    )}
                                    <p className="text-sm text-gray-500">{item.bodyText}</p>
                                </div>
                                {item.tags.length > 0 && (
                                    <p className="mt-2 text-xs text-primary">{item.tags.join(", ")}</p>
                                )}
                                <p className="text-xs text-gray-400 mt-1">
                                    <small>{item.author}</small>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex justify-between mt-4">
                <button className="btn btn-primary" onClick={handlePrev}>
                    ❮
                </button>
                <button className="btn btn-primary" onClick={handleNext}>
                    ❯
                </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 gap-2">
                {groupedNewsItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-300"}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
