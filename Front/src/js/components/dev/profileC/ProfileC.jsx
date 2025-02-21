import './ProfileC.css';

function Profile() {
    return (
        <div>
            <div className="grid place-content-center h-full">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body flex flex-col items-center text-center">
                        <h1 className="card-title">Perfil</h1>
                        <h2>Nombre de usuario:</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h2>Email:</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h2>Intro contraseña:</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Editar Campos</button>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
}
export default Profile;