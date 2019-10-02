import React, { Component } from 'react';
import './KitchenCommand.css'
import { Container, Row, Col} from 'reactstrap';
import { Check } from '../img/check.svg'

class KitchenCommand extends Component {
    render () {
        return (
            <div className="command-container">
                <div className='headline-text'>
                    <Row >
                        <Col xd='6'>
                            <p><span className="bold-text">CLIENTE: </span>{this.props.client}</p>
                            <p><span className="bold-text">MESA: </span>{this.props.table}</p>
                        </Col>
                        <Col xs='6'>
                            <p><span className="bold-text">HORA: </span>{this.props.hour}</p>
                            <p><span className="bold-text">FECHA: </span>{this.props.date}</p>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col>
                    <ul className="item-list">
                        <li>1 x Café con Leche</li>
                        <li>1 x Café Americano</li>
                        <li>1 x Jugo Natural</li>
                        <li>3 x Sandwich de jamón y queso</li>
                    </ul>
                    </Col>
                    <button className='btn-ready'><span className='circle-icon'><i className="fas fa-check"></i></span></button>

                </Row>

            </div>
        )
    }
}

export default KitchenCommand;


