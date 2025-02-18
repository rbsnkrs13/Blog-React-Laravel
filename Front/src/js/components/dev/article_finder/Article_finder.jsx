import { useState } from 'react';
import { Container, Form, FormControl, Row, Col, Card } from 'react-bootstrap';
import './Article_finder.css';

const SearchPage = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setSearchQuery(card); // Actualiza el valor del campo de búsqueda con el id de la tarjeta seleccionada
    };

    return (
        <Container className="p-3">
            <div style={{ backgroundColor: '#eef0f2' }}>
                <h3 style={{color: '#846a6a'}}>Encuentra el artículo</h3>
            </div>
            <div>
                <Form>
                    <FormControl
                        type="text"
                        placeholder=""
                        className="mb-3"
                        value={searchQuery} // Establece el valor del campo de búsqueda
                        onChange={(e) => setSearchQuery(e.target.value)} // Permite la edición manual del campo de búsqueda
                    />
                </Form>
                <Container>
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
                </Container>

            </div>
        </Container>
    );
};

export default SearchPage;
