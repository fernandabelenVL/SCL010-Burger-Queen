import React from 'react';
import Navigation from "../components/Navigation";

function Menu() {
    return (
        <div>
            <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
            <h1>MENU</h1>
            </div>
        
            <div className="button-menu">
            <button className="">DESAYUNO</button>
            <button>ALMUERZO Y CENA</button>
            </div>
            <div>
                <p>NOMBRE DEL CLIENTE</p>
                <input></input>
            </div>
        </div>
    )
}

export default Menu;