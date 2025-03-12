import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/dev/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../bootstrap/contexts/AuthContext";

const PrivateRoutes = () => {
    const { loggedUser, isLoading } = useContext(AuthContext);

    console.log('loggedUser HOLAAAAAAAA----------->:', loggedUser)

    if (isLoading) {
        return <Loader />
    }
    if (!loggedUser) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

export default PrivateRoutes
