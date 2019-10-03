import React, { Component } from 'react';
import './KitchenCommand.css'
import { Row, Col} from 'reactstrap';

class KitchenCommand extends Component {
    render () {

        const items = [ 
            {id: 0,  item: '1 x Café con Leche'},
            {id: 1,  item:"1 x Café Americano"},
            {id: 2,  item:"1 x Jugo Natural"},
            {id: 3,  item:"3 x Sandwich de jamón y queso"}
        ];
        const listItems = items.map((item) =>
        <li key={item.id}>{item.item}</li>)

        return (
            <div className="command-container">
                <div className='headline-kitchen'>
                    <Row >
                        <Col>
                            <p><span className="bold-text">CLIENTE: </span>{this.props.client}</p>
                            <p><span className="bold-text">MESA: </span>{this.props.table}</p>
                        </Col>
                        <Col>
                            <p><span className="bold-text">HORA: </span>{this.props.hour}</p>
                            <p><span className="bold-text">FECHA: </span>{this.props.date}</p>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col>
                        <ul className="item-list"> {listItems}</ul>
                    </Col>
                    <button className='btn-ready'><span className='circle-icon'><i className="fas fa-check"></i></span></button>

                </Row>

            </div>
        )
    }
}

export default KitchenCommand;


