import React from 'react';
import Navigation from '../components/Navigation';
import menu from '../data/data.json';
import './Breakfast.css';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
import { Container } from '@material-ui/core';
import OrderDetail from '../components/OrderDetail'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Breakfast() {
    return (
    <div>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
        <Link to="/breakfast"> <button type="button">DESAYUNO</button></Link>
        <Link to="/lunch"><button type="button">ALMUERZO Y CENA</button></Link>
        <InputClient />
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

                <OrderDetail/>
            </Container>
    </div>
    )
}

export default Breakfast;