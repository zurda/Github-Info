import React, { Component } from 'react';
import GetUserInfo from './components/GetUserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetUserInfo />
      </div>
    );
  }
}

export default App;
