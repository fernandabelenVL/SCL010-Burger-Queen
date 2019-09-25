import React from 'react';
import Navigation from "../components/Navigation";

function Pedidos() {
    return (
        <div>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
        <h1>PEDIDOS</h1>
    </div>
    )
}

export default Pedidos;