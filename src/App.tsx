import React from 'react';
import './App.css';
import { TokenConverter } from './TokenConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginBottom : "auto"}}>Token Converter</h1>
        <TokenConverter></TokenConverter>
      </header>
    </div>
  );
}

export default App;
