import React from 'react';
import '../App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Proyects({ match }) {
        return (
            <Router>
                <ul>
                    <li><Link to={`${match.url}/a-proyect`}>A Proyect</Link></li>
                    <li><Link to={`${match.url}/another-proyect`}>Another Proyect</Link></li>
                    <li><Link to={`${match.url}/other-component`}>Other Component</Link></li>
                </ul>

                <Route
                exact path = {match.path}
                render = {() => <h3>Please Select a Proyect</h3>}
                />    
                <Route path={`${match.path}/:id`} component = { Project }/>

            </Router>
        )
}

function Project ({ match }){
    return (
        <div>
            <h3>{match.params.id}</h3>
        </div>
    )
}

export default Proyects