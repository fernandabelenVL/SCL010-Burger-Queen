import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import KitchenCommand from '../components/KitchenCommand'
import { Container, Row, Col} from 'reactstrap';

import './Kitchen.css'


function Kitchen() {
    return (
        <div>
            <Navigation home="INICIO" records="HISTORIAL"/>
            <Container className='command-list'>
                <KitchenCommand
                client="Camila Perez"
                table="4"
                hour="17:45"
                date="13/09/2019"
                />

                <KitchenCommand
                client="Adriana Sanchez"
                table="8"
                hour="18:21"
                date="13/09/2019"
                />
            </Container>
        </div>
    )
}

export default Kitchen;