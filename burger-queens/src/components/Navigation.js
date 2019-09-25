import React, { Component } from 'react';
import './Navigation.css';
import logohorizontal from '../img/logohorizontal.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return ( 
            <nav className='navbar'>
            <div className="logohorizontal">
                <Link to="/"><img src= { logohorizontal } className="logoHorizontal" alt="logo" /></Link>
            </div>

            <div className="navLinks">
            <Link to="/" className="Navigation-links"> { this.props.home } </Link>
            <Link to="/menu" className="Navigation-links">  { this.props.menu } </Link>
            <Link to="/pending" className="Navigation-links">  { this.props.pending } </Link>
            <Link to="/records" className="Navigation-links"> { this.props.records } </Link>

            </div>
            </nav>
        )
    }
}

export default Navigation;