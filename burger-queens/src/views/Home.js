import React from 'react';
import './Home.css';
import Buttons from '../components/Button';
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

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

				<div className= "button">
					<Link to="/menu"> <button  className="waiter" type="button"> MESERO </button></Link>
					<Link to="/kitchen"><button className="kitchen" type="button">COCINA</button></Link>
				</div>	
		</div>

		</div>       
	)
}

export default Home;