import React from 'react';
import Navigation from '../components/Navigation';
import OrderDetail from '../components/OrderDetail'
import './Lunch.css';
import MenuItem  from '../components/MenuItem'
import InputClient  from '../components/InputClient'
import { Link } from "react-router-dom";
import '../components/ButtonDefault.css'
import Buttons from '../components/ButtonDefault';
import { Container, Row, Col} from 'reactstrap';



// data
import menu from '../data/data.json';

//css


function Lunch() {
    return (
        <div>
            <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
            <Container>

                <div className='btnMenu'>
                    <Link to="/breakfast"> <Buttons name='DESAYUNO' btnClass= 'btnLarge  btnGray margin-right' /></Link>
                    <Link to="/lunch"><Buttons name='ALMUERZO' btnClass= 'btnLarge btnYellow margin-left' /></Link>
                </div>
                <InputClient />

                <Row>
                    <Col xs='6'>
                        <div className="menu-content-lunch">
                            {menu.Lunchs.map((e =>
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

export default Lunch;