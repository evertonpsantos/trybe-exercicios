import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      clicks: 0,
      clicks2: 0,
      clicks3: 0,
    }
    
    this.clickMe = this.clickMe.bind(this);
    this.clickMe2 = this.clickMe2.bind(this);
    this.clickMe3 = this.clickMe3.bind(this);
  }

  clickMe = () => {
    this.setState(({ clicks }) => ({
      clicks: clicks + 1
    }));

    console.log(this.getColor(this.state.clicks));
  }

  clickMe2 = () => {
    this.setState(({ clicks2 }) => ({
      clicks2: clicks2 + 1
    }));

    console.log(this.getColor(this.state.clicks2));

  }

  clickMe3 = () => {
    this.setState(({ clicks3 }) => ({
      clicks3: clicks3 + 1
    }));

    console.log(this.getColor(this.state.clicks3));
  }

  getColor = (param) => {
    return param % 2 === 0 ? 'green' : 'white';
  }
  
  render() {

    const { clicks, clicks2, clicks3 } = this.state;

    return (<div>
    <button onClick={this.clickMe} style={{ backgroundColor: this.getColor(clicks) }}>{clicks}</button>
    <button onClick={this.clickMe2} style={{ backgroundColor: this.getColor(clicks2) }}>{clicks2}</button>
    <button onClick={this.clickMe3} style={{ backgroundColor: this.getColor(clicks3) }}>{clicks3}</button>
    </div>
    )
  }
}


export default App;
