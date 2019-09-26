import React from 'react';
import Navigation from '../components/Navigation';
import OrderDetail from '../components/OrderDetail'
import './Lunch.css';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
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

            <InputClient />

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

                <OrderDetail/>
            </Container>

        </div>

    )
}

export default Lunch;