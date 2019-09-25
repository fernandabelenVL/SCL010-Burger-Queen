import React from 'react';
import '../App.css';
import Buttons from '../components/Button';
import Navigation from "../components/Navigation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Home() {
return (
<div className="Home">
<Navigation />
        <Buttons name="MESERO"/>
        <Buttons name="COCINA"/>
</div>       
)}

export default Home;