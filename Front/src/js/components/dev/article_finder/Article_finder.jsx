import { useState, useEffect } from 'react';
// import { Container, Form, FormControl, Row, Col, Card } from 'react-bootstrap';
import './Article_finder.css';

const SearchPage = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCardId, setSelectedCardId] = useState(''); // Nueva constante para almacenar el id de la tarjeta seleccionada
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para detectar si es móvil
    const [results, setResults] = useState([]); // Estado para almacenar los resultados de búsqueda

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setSelectedCardId(card); // Actualiza el id de la tarjeta seleccionada
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (selectedCardId && query) {
            // Realiza la búsqueda en tiempo real usando selectedCardId y searchQuery
            console.log(`Buscando ${query} en ${selectedCardId}`);
            // Aquí puedes agregar la lógica para realizar la búsqueda y actualizar los resultados
            // Por ejemplo, puedes hacer una llamada a una API y actualizar el estado de resultados
            // setResults(apiResults);
        } else {
            setResults([]);
        }
    };

    // Hook para actualizar el estado isMobile cuando cambia el tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <div style={{ backgroundColor: '#eef0f2' }}>
                <h3 style={{color: '#846a6a'}}>Encuentra el artículo:</h3>
            </div>
            <div>
                <Form>
                    <FormControl
                        type="text"
                        placeholder="Buscar..."
                        className={isMobile ? 'buscadorMovil' : 'buscadorWeb'} // Cambia la clase según el estado isMobile
                        value={searchQuery} // Establece el valor del campo de búsqueda
                        onChange={handleSearchChange} // Permite la búsqueda en tiempo real
                    />
                </Form>
                
                <Row>
                    <Col xs={4} lg={4} className="text-center">
                        <Card
                            id="Autor"
                            className={selectedCard === 'Autor' ? 'cardsSeleccionadas' : 'cardSinSeleccionar'}
                            onClick={() => handleCardClick('Autor')}
                        >
                            <Card.Body>Autor</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} lg={4} className="text-center">
                        <Card
                            id="Título"
                            className={selectedCard === 'Título' ? 'cardsSeleccionadas' : 'cardSinSeleccionar'}
                            onClick={() => handleCardClick('Título')}
                        >
                            <Card.Body>Título</Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} lg={4} className="text-center">
                        <Card
                            id="Contenido"
                            className={selectedCard === 'Contenido' ? 'cardsSeleccionadas' : 'cardSinSeleccionar'}
                            onClick={() => handleCardClick('Contenido')}
                        >
                            <Card.Body>Contenido</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <Card
                            id="Fecha de publicación"
                            className={selectedCard === 'Fecha de publicación' ? 'cardsSeleccionadas' : 'cardSinSeleccionar'}
                            onClick={() => handleCardClick('Fecha de publicación')}
                        >
                            <Card.Body>Fecha de publicación</Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* Muestra los resultados de búsqueda en tiempo real */}
                <div>
                    {results.map((result, index) => (
                        <div key={index}>{result}</div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default SearchPage;
