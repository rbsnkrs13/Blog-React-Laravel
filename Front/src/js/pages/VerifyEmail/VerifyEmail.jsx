import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
    const { id, hash } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/email/verify/${id}/${hash}`)
            .then(() => navigate("/login?verified=success"))  // Redirige a login si la verificación es exitosa
            .catch(() => navigate("/login")); // Redirige si hay error
    }, [id, hash, navigate]);

    return <p>Verificando cuenta...</p>;
}
