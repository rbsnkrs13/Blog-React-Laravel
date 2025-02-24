import { useState, useEffect } from 'react'; // Importa los hooks useState y useEffect de React
import './Article_finder_daisy.css'; // Importa el archivo de estilos CSS

const SearchPage = () => { // Define el componente funcional SearchPage
    
    const [selectedCard, setSelectedCard] = useState(''); //boton seleccionado

    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]); //almacena los diferentes resultados de la busqueda

    const handleCardClick = (card) => { //le llega un string
        setSelectedCard(card);
    };

    const handleSearchChange = (e) => { // Función que maneja los cambios en el input de búsqueda
        const query = e.target.value; // Obtiene el valor del input
        setInputValue(query);

        if (selectedCard && query) 
        {
            console.log(`Buscando ${inputValue} en ${selectedCard}`); 
        } 
    };
    
    /*html------------------------------------------------------------------------------------------------- */

    return (
        <div className="container mx-auto p-4 mt-10"> {/* Contenedor principal con estilos de espaciado */}
            <div className="bg-gray-200 p-4 rounded text-center"> {/* Contenedor con fondo gris y centrado */}
                <h2 className="Titulo">Encuentra el artículo:</h2> {/* Título de la búsqueda */}
            </div>

            <div className='text-center mt-10'> {/* Contenedor para el input de búsqueda */}
                <label id="buscador_lab" className="input input-bigger"> {/* Etiqueta estilizada para el input */}
                    <svg className="h-[1em] opacity-60 icon-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle> {/* Dibuja una lupa */}
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input 
                        type="search"
                        className="input-field"
                        required placeholder="Buscar..."
                        value={inputValue} //esto no se por que es realmente necesario???
                        id="input_busc"
                        onChange={handleSearchChange}
                    />
                </label>
            </div>

            <div className="flex flex-wrap justify-around mt-10"> {/* Contenedor de los botones de filtro */}
                {/* Cada botón representa una categoría de búsqueda */}
                <button 
                    className="btn"
                    onClick={() => handleCardClick('Autor')} // Llama a la función al hacer clic
                >Autor</button>

                <button 
                    className="btn"
                    onClick={() => handleCardClick('Título')}
                >Título</button>

                <button 
                    className="btn"
                    onClick={() => handleCardClick('Contenido')}
                >Contenido</button>

                <button 
                    className="btn"
                    onClick={() => handleCardClick('Fecha de publicación')}
                >Fecha de publicación</button>
            </div>

            {/* Muestra los resultados de búsqueda en tiempo real */}
            <div className="mt-4">
                {results.map((result, index) => ( // Recorre la lista de resultados y los muestra
                    <div key={index}>{result}</div> // Cada resultado se muestra dentro de un div
                ))}
            </div>
        </div>
    );
};

export default SearchPage; // Exporta el componente para ser usado en otras partes de la app
