import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

export class LifeCycle01 extends Component {
  constructor() {
    super();          //Needs to be the 1st call

    this._seeder = new seedGenerator();
    //states, in class component, initialized, here with an empty object
    this.state = { text: this._seeder.latinWords(4).join(' ')};  

    //Eventhandler, in class component
    this.onTextChange = this.onTextChange.bind(this);
  }

  //Eventhandler, in class component
  onTextChange(e) {
    console.log(`Class component text changed: ${e.target.value}`);

  //states in class component
	//states are readonly, need to use setState() to change the state of text
  this.setState({               
      text: e.target.value,   // the state object has one jproperty {text: value};
    });
  }

  //Each class component has several “lifecycle methods” that you can override to run code at particular times in the process.
  //This allow proper initialization and cleanup of DOM components
  //https://reactjs.org/docs/react-component.html
  //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


  componentDidMount() {
    //https://reactjs.org/docs/react-component.html#componentdidmount
 
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    //https://reactjs.org/docs/react-component.html#componentwillunmount
 
    console.log('componentWillUnmount');
  }

  render() {
    return (
    <>
      <h1>TextCounterClass03</h1>
      <div>
      <textarea defaultValue={this.state.text} onChange={this.onTextChange} />
      <h3>{this.state.text.length}</h3>
      </div>
    </>
    )
  }
}
