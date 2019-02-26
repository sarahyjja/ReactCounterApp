import React, { Component } from 'react';
import Buttons from './Components/Buttons'
import './App.css';

class App extends Component {

  handleDecrementClick = () => {
    console.log('BlahBlah')
};
  handleIncrementClick = () => {
    console.log('Touloulou')
};

  render() {
    return (
      <div className="App">
       <h1>Hello</h1>
       <Buttons onDecrement={this.handleDecrementClick} onIncrement={this.handleIncrementClick}/>
      </div>
    );
  }
}

export default App;
