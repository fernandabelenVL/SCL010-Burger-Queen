import React, { Component } from 'react';
import './Navigation.css';
import logo from '../img/logo@2x.png'
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return ( 
            <nav className='navbar'>
                <div className="logo">
                    <Link to="/"><img src= { logo } className="logo" alt="logo" /></Link>
                </div>

                <div className="navLinks">
                    <Link to="/" className="Navigation-links"> { this.props.home } </Link>
                    <Link to="/breakfast" className="Navigation-links"> { this.props.menu } </Link>
                    <Link to="/pending" className="Navigation-links"> { this.props.pending } </Link>
                    <Link to="/records" className="Navigation-links"> { this.props.records } </Link>
                </div>
            </nav>
        )
    }
}

export default Navigation;