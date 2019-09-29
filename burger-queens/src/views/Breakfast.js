import React from 'react';
import Navigation from '../components/Navigation';
import '../components/Button.css'
import Button from '../components/Button';
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
        <Navigation home="INICIO" pending="PENDIENTES" records="HISTORIAL"/>
        <div className='btnMenu'>
            <Link to="/breakfast"> <Button name='DESAYUNO' btnClass= 'btnLarge btnYellow' /></Link>
            <Link to="/lunch"><Button name='ALMUERZO' btnClass= 'btnLarge btnGray' /></Link>
        </div>
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