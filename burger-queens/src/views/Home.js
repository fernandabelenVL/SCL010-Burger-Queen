import React from 'react';
import './Home.css';
import '../components/Button.css'
import Button from '../components/Button';
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
					<Link to="/breakfast"> <Button name='MESERO' btnClass= 'btnSmall btnYellow' /></Link>
					<Link to="/kitchen"><Button name='COCINA' btnClass= 'btnSmall btnRed' /></Link>
				</div>	
		</div>

		</div>       
	)
}

export default Home;