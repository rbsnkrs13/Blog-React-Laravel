// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationMobile.css'
import logoPluma from '../../../../assets/logo_pluma.svg';

function NavigationMobile () {
  return (
    <Navbar expand="lg" className="navbar">
      <div className='containerNav'>
        <Navbar.Brand className="brand" href="/"><img src={logoPluma} className="navbarLogo" alt="hola" />CB</Navbar.Brand>
        <Navbar.Toggle className="collapseIcon" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapseNav"id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* TODO : LINKS FINALES  */}
            <Nav.Link href="/">Estadísticas de autor</Nav.Link>
            <Nav.Link href="#link">Favoritos</Nav.Link>
            <Nav.Link href="#home">Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationMobile ;