import React from 'react';
import Navigation from '../components/Navigation';
import './Lunch.css';
import MenuItem  from '../components/MenuItem'
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';


// data
import menu from '../data/data.json';

//css


function Lunch() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>

            <Link to="/breakfast"> <button type="button"> DESAYUNO </button></Link>
		    <Link to="/lunch"><button type="button"> ALMUERZO Y CENA</button></Link>

            <Container className="lunch-content">
                <div className="menu-content">
                        {menu.Lunchs.map((e =>
                        <MenuItem
                        product={e.product}
                        price={e.price}
                        img={e.img}
                        />
                        ))}

                </div>

                <div className="order-detail">
                    <h1>Detalle de la orden</h1>
                </div>
            </Container>

        </div>

    )
}

export default Lunch;