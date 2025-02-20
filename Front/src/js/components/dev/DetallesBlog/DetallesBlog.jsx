import './DetallesBlog.css'

const DetallesBlog = ({ blog }) => {
    return (
        <div className="detallesBlog">
            <h3>{blog.titulo}</h3>
            <div className="tag">{blog.tag}</div>
            <div className="blogContImg">
                <div className="blogContenido">
                    {blog.contenido}
                </div>
                <div className="imagenBlog">
                    <img src={blog.image} alt="" />
                </div>
            </div>
            <div className="autorNombre">
                {blog.autor}
            </div>
        </div>
    );
}
export default DetallesBlog;