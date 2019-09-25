import React from 'react';
import Navigation from '../components/Navigation';
import data from '../data';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Table, Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';


function Breakfast() {
    return (
        <container>
        <Navigation home="INICIO" menu="MENU" pending="PENDIENTES" records="HISTORIAL"/>
        <Link to="/breakfast"> <button type="button">DESAYUNO</button></Link>
        <Link to="/lunch"><button type="button">ALMUERZO Y CENA</button></Link>

        {data.breakfast.map((e =>
        <Button product={e.data.breakfast.product}/>
        ))}
        </container>
        )
}

export default Breakfast;