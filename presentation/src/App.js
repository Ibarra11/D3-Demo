import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CityChart from './Chart';
class App extends Component {

  render() {
    return (
      <div className="App">
        <CityChart />
      </div>
    );
  }
}

export default App;
