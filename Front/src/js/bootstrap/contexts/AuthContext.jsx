import { createContext, useEffect, useState } from "react";
import userService from "../../services/userService";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [loggedUser, setLoggedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Corrección de nombre

    const authenticateUser = () => {
        const token = localStorage.getItem("authToken");

        if (token) {
            userService
                .verifyUser(token)
                .then(({ data }) => {
                    console.log(data)
                    setLoggedUser(data.user);
                })
                .catch(error => {
                    console.error("Error:", error);
                    setLoggedUser(null); // En caso de error, aseguramos que no haya usuario logueado
                })
                .finally(() => {
                    setIsLoading(false); // Se ejecuta siempre, con éxito o error
                });
        } else {
            setIsLoading(false); // Si no hay token, también terminamos la carga
        }
    };

    const logOut = () => {
        localStorage.removeItem("authToken");
        setLoggedUser(null);
        setIsLoading(false);
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, isLoading, logOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper };
