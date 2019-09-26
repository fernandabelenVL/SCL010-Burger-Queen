import React from 'react';
import Navigation from '../components/Navigation';
import menu from '../data/data.json';
import './Breakfast.css';
import MenuItem  from '../components/MenuItem'
import { Container } from '@material-ui/core';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Breakfast() {
    return (
    <div>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
        <Link to="/breakfast"> <button type="button">DESAYUNO</button></Link>
        <Link to="/lunch"><button type="button">ALMUERZO Y CENA</button></Link>

<<<<<<< HEAD
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
=======
        <Container className="breakfast-content">
                <div className="menu-content">
                        {menu.Breakfasts.map((e =>
                        <MenuItem
                        product={e.product}
                        price={e.price}
                        img={e.img}
                        />
                        ))}

                </div>
>>>>>>> b0719f7da2798d1083d3eac60955729af28c82ae

                <div className="order-detail">
                    <h1>Detalle de la orden</h1>
                </div>
            </Container>
    </div>
    )
}

export default Breakfast;