import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RedocStandalone specUrl="https://gist.githubusercontent.com/bds/eada022fa12af59459d6ebeb9a54beba/raw/af4b2f2cb3822b7774d04fb0605ce8bdcc0e43c5/swagger.json" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
