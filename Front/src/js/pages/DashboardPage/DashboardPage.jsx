import React from "react";
import { Route, Routes } from "react-router-dom";
import Circle_graphic from "../../components/dev/circle_graphic/Circle_graphic";
import Separador from "../../components/dev/separador/Separador";
import "./DashboardPage.css";

export default function DashboardPage() {  
    return (
        <div>
        <h1 className="dashboardTitle">Dashboard</h1>
        <Separador className="separadorDashboard" />
        <main className="dashboardGraphics">
        <Routes>
            <Route path={"/"} element={<Circle_graphic className="circleGraphicDashboard"/>} />
        </Routes>
        </main>
        </div>
    );
}