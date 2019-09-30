import React from 'react';
import Navigation from '../components/Navigation';
import OrderDetail from '../components/OrderDetail'
import './Lunch.css';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import ButtonsMenu from '../components/ButtonsMenu';
import ButtonSend from '../components/ButtonSend';

// data
import menu from '../data/data.json';

//css


function Lunch() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>

            <ButtonsMenu  />
            <InputClient />

            <Container className="lunch-content">
                <div className="menu-content">
                        {menu.Lunchs.map((e =>
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

export default Lunch;