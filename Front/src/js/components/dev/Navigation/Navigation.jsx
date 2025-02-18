import { Link } from "react-router-dom";

const Navigation = () => {
<<<<<<< HEAD
  return (<div className="navbar">
=======
  return (
    <div className="navbar">
>>>>>>> c8ed577930c6fd2dacc1877d04404f17a4684554
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
