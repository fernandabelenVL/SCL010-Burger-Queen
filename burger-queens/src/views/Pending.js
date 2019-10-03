import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import PendingCard from '../components/PendingCard'
import { Container, Col, Row} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Pending.css"


class Pending extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render() {
        return (
            <div>
                <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>

                <Container>
                    <Row className="select-box">
                        <Col >
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret outline color="secondary">Ordenar por hora</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Ver antiguas primero</DropdownItem>
                                <DropdownItem>Ver nuevas primero</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        </Col>
                        <Col>
                            <DatePicker 
                                placeholderText="Buscar por fecha y hora" 
                                showTimeSelect
                                timeFormat="p"
                                timeIntervals={30}
                            />
                        </Col>
                    </Row>
                </Container>

                <Container className='command-list-pending'>
                    <PendingCard
                        client="Camila Perez"
                        table="4"
                        hour="17:45"
                        date="13/09/2019"
                        totalPrice="$3.800"
                    />
                    <PendingCard
                        client="Rodrigo Morales"
                        table="15"
                        hour="18:45"
                        date="13/09/2019"
                        totalPrice="$3.800"
                    />
                    <PendingCard
                        client="Maritza Reyes"
                        table="7"
                        hour="19:45"
                        date="13/09/2019"
                        totalPrice="$3.800"
                    />
                </Container>
            </div>
        )
    }
}

export default Pending;