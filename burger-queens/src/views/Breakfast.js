import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
import Buttons from '../components/ButtonDefault';
import MenuItem  from '../components/MenuItem';
import InputClient  from '../components/InputClient';
import OrderDetail from '../components/OrderDetail';

//css
import '../components/ButtonDefault.css'
import './Breakfast.css';
import { Container, Row, Col} from 'reactstrap';

//data
import menu from '../data/data.json';


class Breakfast extends Component {
    constructor () {
        super();
        this.state = {
            menu: menu,
            orders: []
        }
    }
    
    render(){
         const Items = menu.Breakfasts.map(e => {
            return (
                <MenuItem
                key={e.id}
                product={e.product}
                price={e.price}
                img={e.img}
                />
            )
        });

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
                               {Items}
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
}

export default Breakfast;