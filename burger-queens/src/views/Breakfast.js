import React from 'react';
import Navigation from '../components/Navigation';
import menu from '../data/data.json';
import './Breakfast.css';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
import { Container } from '@material-ui/core';
import OrderDetail from '../components/OrderDetail'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ButtonsMenu from '../components/ButtonsMenu';
import ButtonSend from '../components/ButtonSend';

function Breakfast() {
    return (
    <div>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>

        <ButtonsMenu />
        <InputClient />
        
        <Container className="breakfast-content">
                <div className="menu-content">
                        {menu.Breakfasts.map((e =>
                        <MenuItem
                        key={e.id}
                        product={e.product}
                        price={e.price}
                        img={e.img}
                        />
                        ))}

                </div>
                     <OrderDetail/>
        </Container>
        <ButtonSend />
    </div>
    )
}

export default Breakfast;