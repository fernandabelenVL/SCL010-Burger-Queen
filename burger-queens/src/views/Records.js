import React from 'react';
import Navigation from "../components/Navigation";

function Records() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
            <h1>HISTORIAL</h1>
        </div>    
    )
}

export default Records;