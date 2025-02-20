import "./TitleBlog.css";

function Title({ texto, f_size = 40, h_num = 1 }) {
  //f_size es el tamaño de la fuente y h_num es el numero de la etiqueta h
  //f_size defecto 40px y h_num defecto 1
  const Tag = `h${Math.min(Math.max(h_num, 1), 6)}`; // numero entre 1 y 6
  return (
    <>
      <Tag id="titulo" style={{ fontSize: `${f_size}px` }} className="title">{texto}</Tag>
    </>
  );
};

export default Title;