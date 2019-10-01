import React from 'react';
import Navigation from '../components/Navigation';
import '../components/ButtonDefault.css'
import Buttons from '../components/ButtonDefault';
import menu from '../data/data.json';
import './Breakfast.css';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
import OrderDetail from '../components/OrderDetail'
import { Container, Row, Col} from 'reactstrap';

import { Link } from "react-router-dom";

function Breakfast() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
            <Container>

                <div className='btnMenu'>
                    <Link to="/breakfast"> <Buttons name='DESAYUNO' btnClass= 'btnLarge btnYellow margin-right' /></Link>
                    <Link to="/lunch"><Buttons name='ALMUERZO' btnClass= 'btnLarge btnGray margin-left' /></Link>
                </div>
                <InputClient />

                <Row>
                    <Col xs='6'>
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
                    </Col>
                    <Col xs='6'>
                        <OrderDetail/>
                        <Buttons name='ENVIAR A COCINA' btnClass= 'btnSend btnRed'/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Breakfast;