import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './views/Home'
import Kitchen from "./views/Kitchen";
import Pedidos from './views/Pedidos'
import Records from './views/Records'
import Breakfast from './views/Breakfast';
import Lunch from './views/Lunch';



function App() {
  return (
    < >
    <div className="App">    
     <Router>
      <Switch>

        <Route exact path="/" component = { Home } />
        <Route path="/kitchen" component = { Kitchen } />
        <Route exact path="/pending" component = { Pedidos } />
        <Route exact path="/records" component = { Records } />
        <Route path="/breakfast" component = { Breakfast } />
        <Route path="/lunch" component = { Lunch } />

      </Switch>
    </Router>
    </div>
    </>

  );
}

export default App;
