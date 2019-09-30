import React, { Component } from 'react';
import './ButtonsHome.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class ButtonsHome extends Component {
render() {
    return (
        <div>
            <Link to="/breakfast"><button className="btnYellow"> MESERO</button></Link> 
            <Link to="/kitchen">  <button className="btnRed"> COCINA</button> </Link>
        </div>
        )
    }
}

export default ButtonsHome;