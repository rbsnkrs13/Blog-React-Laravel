import { useState, useEffect } from 'react';
import { Container, Form, FormControl, Row, Col, Card } from 'react-bootstrap';
import './Article_finder.css';

const SearchPage = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCardId, setSelectedCardId] = useState(''); // Nueva constante para almacenar el id de la tarjeta seleccionada
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para detectar si es móvil

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setSelectedCardId(card); // Actualiza el id de la tarjeta seleccionada
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (selectedCardId && searchQuery) {
            // Realiza la búsqueda usando selectedCardId y searchQuery
            console.log(`Buscando ${searchQuery} en ${selectedCardId}`);
            // Aquí puedes agregar la lógica para realizar la búsqueda
        } else {
            console.log('Por favor, selecciona una categoría y escribe un término de búsqueda.');
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
                <Form onSubmit={handleSearchSubmit}>
                    <FormControl
                        type="text"
                        placeholder=""
                        className={isMobile ? 'buscadorMovil' : 'buscadorWeb'} // Cambia la clase según el estado isMobile
                        value={searchQuery} // Establece el valor del campo de búsqueda
                        onChange={(e) => setSearchQuery(e.target.value)} // Permite la edición manual del campo de búsqueda
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
            </div>
        </Container>
    );
};

export default SearchPage;
