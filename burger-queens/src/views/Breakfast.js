import React from 'react';
import Navigation from '../components/Navigation';
import data from '../data/data.json';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Breakfast() {
    return (
        <container>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
        <Link to="/breakfast"> <button type="button">DESAYUNO</button></Link>
        <Link to="/lunch"><button type="button">ALMUERZO Y CENA</button></Link>

        {data.Breakfasts.map((e =>
        <button product={e.product} price={e.price} ></button>
        ))}
        </container>
        )
}

export default Breakfast;