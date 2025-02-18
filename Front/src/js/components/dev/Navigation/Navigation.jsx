import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
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
    </div>
  );
};

export default Navigation;
