import React from 'react';
import './Home.css';
// import Buttons from '../components/Button';
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import bigBurger from '../img/big-burger@2x.png'


function Home() {
	return (
		<div className="Home">
			<Navigation />
			<div className="home-content">
				<div>
					<img src= { bigBurger } alt="Big Burger" className="bigBurger"></img>
				</div>
				<div>
					<h3>¡BIENVENIDO!</h3>
					<p>Para empezar selecciona si eres Mesero o Cocina</p>				
				</div>

				<Link to="/menu"> <button type="button"> MESERO </button></Link>
				<Link to="/kitchen"><button type="button">COCINA</button></Link>
			</div>
		</div>       
	)
}

export default Home;