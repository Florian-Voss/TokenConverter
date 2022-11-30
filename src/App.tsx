import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TokenConverter } from './TokenConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginBottom : "auto"}}>Token Umwandler</h1>
        <TokenConverter></TokenConverter>
      </header>
    </div>
  );
}

export default App;
