import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Finally it is showing
        </p>
        <a
          className="App-link"
          href="https://vermontgreenmagic.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vermont Green Magic
        </a>
      </header>
    </div>
  );
}

export default App;
