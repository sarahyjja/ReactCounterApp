import React, { Component } from 'react';
import Buttons from './Components/Buttons'
import './App.css';
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      counter: 0
    }
  }

  handleDecrementClick = () => {
    console.log('BlahBlah')
};
  handleIncrementClick = () => {
    console.log('Touloulou')
};

  render() {
    return (
      <div className="App">
       <h1>Counter</h1>
       <p>{this.state.counter}</p>
       <Buttons onDecrement={this.handleDecrementClick} onIncrement={this.handleIncrementClick}/>
      </div>
    );
  }
}

export default App;
