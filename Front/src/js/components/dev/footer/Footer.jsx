import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'inline', margin: '0 15px' }}>
            <Link to="/cookies">Cookies</Link>
        </li>
        <li style={{ display: 'inline', margin: '0 15px' }}>
            <Link to="/privacidad">Privacidad</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
