import React, { Component } from 'react';
import './ButtonsMenu.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ButtonsMenu extends Component {
render() {
    return (
        <div>
            <Link to="/breakfast"><button className="btnBreakfast"> DESAYUNO </button></Link> 
            <Link to="/lunch"><button className="btnLunch"> ALMUERZO Y CENA </button> </Link>
        </div>
        )
    }
}

export default ButtonsMenu;