import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/Home'
import Kitchen from "./views/Kitchen";
import Pending from './views/Pending'
import Records from './views/Records'
import Breakfast from './views/Breakfast';
import Lunch from './views/Lunch';
import Footer from './components/Footer'

function App() {
  return (
    < >
    <div className="App">    
     <Router>
      <Switch>

        <Route exact path="/" component = { Home } />
        <Route path="/kitchen" component = { Kitchen } />
        <Route path="/pending" component = { Pending } />
        <Route path="/records" component = { Records } />
        <Route path="/breakfast" component = { Breakfast } />
        <Route path="/lunch" component = { Lunch } />

      </Switch>
    </Router>
  
    </div>
    <Footer />
    </>
  );
}

export default App;
