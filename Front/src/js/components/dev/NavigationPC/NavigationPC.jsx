import './NavigationPC.css';
import LogoPrincipal from '../../../../assets/Logo-principal.png';
import { useContext } from 'react';
import { AuthContext } from '../../../bootstrap/contexts/AuthContext';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationPC = () => {
    const { loggedUser, logOut } = useContext(AuthContext);
    return (
        <div className="navigatorPc" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className='logoDiv'>
                <Link to="/">
                    <img src={LogoPrincipal} alt="Logo Principal" className='logoPrincipal' />
                </Link>
            </div>
            <div className="listaPc">
                <ul>
                    <Link to="/"><li><div className="textoNavbar">Inicio</div></li></Link>
                    {/* <Link to="/news"><li><div className="textoNavbar">Novedades</div></li></Link> */}
                    {loggedUser && (
                        <>
                            {loggedUser.role === "admin"
                                && (<Link to="/admin" ><li><div className="textoNavbar">Admin</div></li></Link>)}
                            <Link to="/favorite_posts" ><li><div className="textoNavbar">Favoritos</div></li></Link>
                            <Link to={`/profile`}>
                                <li>
                                    <div className="textoNavbar flex items-center">
                                        <FaUser className="mr-2" />
                                        <p>Perfil</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to='/createPost'><li><div className="textoNavbar">Crear Post</div></li></Link>
                            <Link to="#" onClick={logOut} >  <li><div className="textoNavbar">Cerrar sesion</div></li></Link>
                        </>
                    )}
                    {!loggedUser && (<Link to="/logIn" >  <li><div className="textoNavbar">Iniciar Sesion</div></li></Link>)}
                </ul>
            </div>
        </div>
    );
}
export default NavigationPC;