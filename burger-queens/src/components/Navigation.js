import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return ( 
            <header>
            <nav className='navbar'>
            <Link to="/" className="Navigation-links">Inicio</Link>
            <Link to="/menu" className="Navigation-links">Carta</Link>
            <Link to="/kitchen" className="Navigation-links">Cocina</Link>
            <Link to="/pedidos" className="Navigation-links">Pedidos</Link>
            </nav>
            </header>
        )
    }
}

export default Navigation;