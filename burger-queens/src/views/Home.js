import React from 'react';
import './Home.css';
import ButtonsHome from '../components/ButtonsHome';
import Navigation from "../components/Navigation";
import bigBurger from '../img/big-burger@2x.png'
import Footer from '../components/Footer'


function Home() {
	return (
	<>	
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
					<ButtonsHome/>
				</div>	
		</div>
	</div>   
	
	<Footer />
	</>
	)
}

export default Home;