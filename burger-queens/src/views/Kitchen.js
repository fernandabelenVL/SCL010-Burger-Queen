import React from 'react';
import Navigation from '../components/Navigation';

function Kitchen() {
    return (
        <div>
        <Navigation home="INICIO" menu='MENU' pending="PENDIENTES" records="HISTORIAL"/>
        <h1>COCINA</h1>
        </div>
    )
}

export default Kitchen;