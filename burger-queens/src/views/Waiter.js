import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Waiter() {
return (
<div className="Waiter">
    
<Router>
    <span>
        <button>
        <Link to="/breakfast" className="Waiter-link">Desayunos</Link>
        </button>

        <button>
        <Link to="/menu" className="Waiter-link">Menú</Link>
        </button>

    </span>
</Router>
</div>        
    )
}

export default Waiter;