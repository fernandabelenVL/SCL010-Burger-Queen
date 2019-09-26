import React from 'react';
import Navigation from '../components/Navigation';
import menu from '../data/data.json';
import './Breakfast.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Breakfast() {
    return (
    <container>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
        <Link to="/breakfast"> <button type="button">DESAYUNO</button></Link>
        <Link to="/lunch"><button type="button">ALMUERZO Y CENA</button></Link>

        <br></br>
    <div className="containerBreakfast">
        <div className="breakfastProducts">
        {menu.Breakfasts.map((e =>
            <button className="btnBreakfast"> 
                <img src={e.img} alt="ico"/>
                <div> {e.product} </div>
                <div> {e.price} </div>
            </button>
        ))}
        </div>

        <div className="itemMenu">
            <h1>DETALLE DE LA ORDEN</h1>
        </div>
    </div>
    </container>
    )
}

export default Breakfast;