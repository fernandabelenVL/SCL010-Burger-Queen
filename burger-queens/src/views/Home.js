import React from 'react';
import './Home.css';

import Buttons from '../components/Button';
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import bigBurger from '../img/big-burger@2x.png'


function Home() {
	return (
		<div className="Home">
			<Navigation />
			
			<div>
				<img src= { bigBurger } alt="Big Burger" className="bigBurger"></img>
			</div>

			<Link to="/menu"> <button type="button"> MESERO </button></Link>
			<Link to="/kitchen"><button type="button">COCINA</button></Link>
		</div>       
	)
}

export default Home;