import React from 'react';
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function Menu() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
            <h1>MENU</h1>
            <Link to="/breakfast"> <button type="button"> DESAYUNO </button></Link>
		    <Link to="/lunch"><button type="button"> ALMUERZO </button></Link>
        </div>
    )
}

export default Menu;