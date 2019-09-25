import React from 'react';
import Navigation from '../components/Navigation';
import './Lunch.css';


import { Link } from "react-router-dom";

// data
import menu from '../data/data.json';


function Lunch() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>

            <Link to="/breakfast"> <button type="button"> DESAYUNO </button></Link>
		    <Link to="/lunch"><button type="button"> ALMUERZO </button></Link>

            <h1>ALMUERZO</h1>

            
            <div className="lunch-content">
                <div className ="lunch-menu">
                    {menu.Lunchs.map((e =>
                    <button className="menu-item">
                        <img src={e.img} alt="ico"/>
                        <div>{e.product}</div>
                        <div>{e.price}</div>
                    </button>    
                    ))}
                </div>
                <div className="order-detail">
                    <h1>Detalle de la orden</h1>
                </div>
            </div>
        </div>

    )
}

export default Lunch;