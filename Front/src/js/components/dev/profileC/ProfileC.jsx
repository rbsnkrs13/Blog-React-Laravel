import './ProfileC.css';

function Profile() {
    return (
        <div className="profile">
           <form className='FormElementProfile'>
                <p>Nombre: </p>
                <label for="changeUser">Cambiar nombre:</label>
                <input id="changeUser" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <p>Email: </p>
                <label for="changeEmail">Cambiar email:</label>
                <input id="changeEmail"type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <p>Contraseña: *****</p>
                <label for="changePass">Cambiar contraseña:</label>
                <input id="changePass"type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <button className='changeButton' type="submit">
                    Enviar
                </button>
           </form>
           <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
        </div>
    );
}
export default Profile;