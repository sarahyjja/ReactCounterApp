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
    const counter = this.state.counter
    const newCounter = counter - 1
    this.setState({counter: newCounter})
};
  handleIncrementClick = () => {
    const counter = this.state.counter
    const newCounter = counter + 1
    this.setState({counter: newCounter})
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
