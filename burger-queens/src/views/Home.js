import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'reactstrap';

import './Home.css';
import '../components/ButtonDefault.css'
import Buttons from '../components/ButtonDefault';
import Navigation from "../components/Navigation";
import bigBurger from '../img/big-burger@2x.png'


function Home() {
	return (
	<>	
		<div className="Home">
			<Navigation />
			<Container className="home-content">
				<div>
					<img src= { bigBurger } alt="Big Burger" className="bigBurger"></img>
				</div>
				<div>
					<h3 className="bold-text">¡BIENVENIDO!</h3>
					<p>Para empezar selecciona si eres Mesero o Cocina</p>				
				</div>
				<div className= "btnsHome">
					<Link to="/breakfast"> <Buttons name='MESERO' btnClass= 'btnSmall btnYellow' /></Link>
					<Link to="/kitchen"><Buttons name='COCINA' btnClass= 'btnSmall btnRed' /></Link>
				</div>	
			</Container>
	</div>   
	</>
	)
}

export default Home;