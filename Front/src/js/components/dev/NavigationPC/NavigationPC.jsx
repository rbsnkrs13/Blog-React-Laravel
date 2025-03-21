import './NavigationPC.css';
import LogoPrincipal from '../../../../assets/Logo-principal.png';
import { useContext } from 'react';
import { AuthContext } from '../../../bootstrap/contexts/AuthContext';
import { FaUser } from 'react-icons/fa';
const NavigationPC = () => {
    const { loggedUser, logOut } = useContext(AuthContext);
    return (
        <div className="navigatorPc" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className='logoDiv'>
                // TODO onClick go to /
                <img src={LogoPrincipal} alt="" className='logoPrincipal' />
            </div>
            <div className="listaPc">
                <ul>
                    <a href="/"><li><div className="textoNavbar">Inicio</div></li></a>
                    <a href="/news"><li><div className="textoNavbar">Novedades</div></li></a>
                    {loggedUser && (
                        <>
                            {loggedUser.role === "admin"
                                && (<a href="/admin" ><li><div className="textoNavbar">Admin</div></li></a>)}
                            <a href="/favorite_posts" ><li><div className="textoNavbar">Favoritos</div></li></a>
                            <a href={`/profile`}>
                                <li>
                                    <div className="textoNavbar flex items-center">
                                        <FaUser className="mr-2" />
                                        <p>Perfil</p>
                                    </div>
                                </li>
                            </a>
                            <a href='/createPost'><li><div className="textoNavbar">Crear Post</div></li></a>
                            <a href="#" onClick={logOut} >  <li><div className="textoNavbar">Cerrar sesion</div></li></a>
                        </>
                    )}
                    {!loggedUser && (<a href="/logIn" >  <li><div className="textoNavbar">Iniciar Sesion</div></li></a>)}
                </ul>
            </div>
        </div>
    );
}
export default NavigationPC;