import React from "react";
import Carousel from "../../components/dev/Carousel/Carousel";
import "./NovedadesPage.css";

const NovedadesPage = () => {
    return (
      <div className="novedadesPage">
        <h1>Novedades</h1>
        <Carousel />
      </div>
    );
  };
  
  export default NovedadesPage;