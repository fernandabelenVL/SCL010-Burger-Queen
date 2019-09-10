import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Hola Fer</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We are burguer QUEENS</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
