import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import separador from '../../../../assets/separador.svg'; // Importa el archivo SVG
import './Separador.css';

const Separador = () => {
   // const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para detectar si es móvil

    return (
        <Container>
            <img src={separador} alt="Separador" className="separador-img" />
        </Container>
    );
};

export default Separador;
