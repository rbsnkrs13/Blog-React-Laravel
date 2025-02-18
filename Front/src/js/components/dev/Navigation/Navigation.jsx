import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/logIn">Iniciar Sesion</Link>
        </li>
        <li>
          <Link to="/crearBlog">Contact</Link>
        </li>
        <li>
          <Link to="/perfil/1">perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
