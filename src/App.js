import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {counter:0};
}

handleChange = (event) => {
  const cadena = event.target.value
  // console.log(cadena);
  this.setState({
    counter: cadena.length
  })
}

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleChange}></textarea>
    <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;

