import React, { Component } from 'react';
import './PendingCard.css'
import { Row, Col} from 'reactstrap';

class PendingCard extends Component {

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
            <div className="pending-container">
                <div className='headline-text clearfix'>
                    <Row >
                        <Col xs='8' >
                            <p><span className="bold-text">CLIENTE: </span>{this.props.client}</p>
                            <p><span className="bold-text">MESA: </span>{this.props.table}</p>
                        </Col>
                        <Col xs='4' className="text-right">
                            <p><span className="bold-text">HORA: </span>{this.props.hour}</p>
                            <p><span className="bold-text">FECHA: </span>{this.props.date}</p>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col>
                        <ul className="item-list">{listItems} </ul>
                    </Col>
                    <button className='btn-circle btn-trash'><span className='icon-white'><i className="fas fa-trash-alt"></i></span></button>
                    <button className='btn-circle btn-edit'><span className='icon-black'><i className="fas fa-pencil-alt"></i></span></button>
                </Row>
                <Row >
                    <div className='pending-total'>
                        <p className='bold-text'>TOTAL</p>
                        <p>{this.props.totalPrice}</p>
                    </div>
                </Row>

            </div>
        )
    }
}

export default PendingCard;


