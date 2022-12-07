import React from 'react';
import './App.css';
import { TokenConverter } from './TokenConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <h1>Token Converter</h1>
          <TokenConverter></TokenConverter>
        </div>
      </header>
    </div>
  );
}

export default App;
