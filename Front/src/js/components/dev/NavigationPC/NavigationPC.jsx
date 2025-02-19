// import { Container, Row, Col } from 'react-bootstrap';
import './NavigationPC.css';
import LogoPrincipal from '../../../../assets/Logo-principal.png';

const NavigationPC = () => {
    return (
        <div className="navigatorPc" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className='logoDiv'>
                <img src={LogoPrincipal} alt="" className='logoPrincipal' />
            </div>
            <div className="listaPc">
                <ul>
                    <li><a href="#home" style={{ color: 'white' }}>Estadisticas de autor</a></li>
                    <li><a href="#about" style={{ color: 'white' }}>Favoritos</a></li>
                    <li><a href="#services" style={{ color: 'white' }}>Perfil</a></li>
                </ul>
            </div>
        </div>
    );
}
export default NavigationPC;