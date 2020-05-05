import React from 'react';
import Component from './components/Counter'
import './App.css';


class App extends React.Component {

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