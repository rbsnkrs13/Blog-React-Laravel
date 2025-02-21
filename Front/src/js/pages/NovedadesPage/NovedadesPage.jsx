import NewCarousel from "../../components/dev/carousel/NewsCarousel";
import "./NovedadesPage.css";

const NovedadesPage = () => {
  const defaultNewsItems = [
    {
      title: "Tecnología: Últimas Innovaciones",
      img: "https://via.placeholder.com/150",
      bodyText: "Descubre las últimas innovaciones en inteligencia artificial y robótica que están revolucionando el mundo.",
      tags: ["Tecnología", "IA", "Innovación"],
      author: "Carlos Mendoza",
    },
    {
      title: "Economía Global en 2025",
      img: "https://via.placeholder.com/150",
      bodyText: "Análisis de las tendencias económicas que podrían dar forma al mercado global en los próximos años.",
      tags: ["Economía", "Finanzas", "Mercado"],
      author: "Laura Gómez",
    },
    {
      title: "Salud y Bienestar: Consejos Clave",
      img: "https://via.placeholder.com/150",
      bodyText: "Mejora tu bienestar físico y mental con estos consejos esenciales de expertos en salud.",
      tags: ["Salud", "Bienestar", "Estilo de Vida"],
      author: "Dr. Fernando Ruiz",
    },
    {
      title: "Deportes: Lo Mejor de la Semana",
      img: "https://via.placeholder.com/150",
      bodyText: "Revive los mejores momentos de los eventos deportivos más importantes de la semana.",
      tags: ["Deportes", "Eventos", "Actualidad"],
      author: "Ana Torres",
    },
    {
      title: "Viajes: Destinos Impresionantes",
      img: "https://via.placeholder.com/150",
      bodyText: "Explora los destinos más impresionantes del mundo para tus próximas vacaciones.",
      tags: ["Viajes", "Turismo", "Aventura"],
      author: "María Fernández",
    },
    {
      title: "Cultura Pop: Noticias y Tendencias",
      img: "https://via.placeholder.com/150",
      bodyText: "Mantente al día con las últimas noticias y tendencias de la cultura pop.",
      tags: ["Entretenimiento", "Cultura Pop", "Noticias"],
      author: "Juan Pérez",
    }
  ];
  return (
    <div className="novedadesPage">
      <h1>Novedades</h1>
      <NewCarousel newsItems={defaultNewsItems} />
    </div>
  );
};

export default NovedadesPage;