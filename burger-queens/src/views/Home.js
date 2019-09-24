import React from 'react';
import '../App.css';
import logo from '../img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Waiter from "./Waiter";
import Kitchen from "./Kitchen";

function Home() {
    return (
<div className="Home">
        
    <Router>

        <Link to="/"><img src={logo} className="Logo" alt="logo" /></Link>

        <span>
        <button>
        <Link to="/waiter" className="Home-link">Mesero</Link>
        </button>

        <button>
        <Link to="/kitchen" className="Home-link">Cocina</Link>
        </button>

        <Route path="/index" component = { Home } />
        <Route exact path="/waiter" component = { Waiter } />
        <Route exact path="/kitchen" component = { Kitchen } />
        </span>

    </Router>

</div>        
)}

export default Home;