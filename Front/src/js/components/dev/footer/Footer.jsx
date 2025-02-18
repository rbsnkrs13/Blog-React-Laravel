
const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f8f8f8' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'inline', margin: '0 15px' }}>
          <a href="/cookies" style={{ textDecoration: 'none', color: '#333' }}>Cookies</a>
        </li>
        <li style={{ display: 'inline', margin: '0 15px' }}>
          <a href="/privacidad" style={{ textDecoration: 'none', color: '#333' }}>Privacidad</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
