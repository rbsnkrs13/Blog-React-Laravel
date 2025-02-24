import React from "react";
import { Route, Routes } from "react-router-dom";
import Circle_graphic from "../../components/dev/circle_graphic/Circle_graphic";
import Separador from "../../components/dev/separador/Separador";
import TooltipGraphic from "../../components/dev/TooltipGraph/TooltipGraph";
import AreaChart from "../../components/dev/Areachart/Areachart";
import "./DashboardPage.css";

export default function DashboardPage() {  
    return (
        <div>
        <h1 className="dashboardTitle">Dashboard</h1>
        <Separador className="separadorDashboard" />
        <main className="dashboardGraphics">
            <TooltipGraphic className="tooltipGraphicDashboard dGraphic"/>
            <Circle_graphic className="circleGraphicDashboard dGraphic"/>
            <AreaChart className="areaChartDashboard dGraphic"/>
        </main>
        </div>
    );
} 