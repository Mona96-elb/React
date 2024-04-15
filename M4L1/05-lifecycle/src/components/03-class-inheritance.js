import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';
import { LifeCycleLogger02 } from './02-lifecycle-log-class';

export class ClassInheritance03 extends LifeCycleLogger02 {
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

  render() {
    return (
    <>
      <h1>ClassInheritance03</h1>
      <div>
      <textarea defaultValue={this.state.text} onChange={this.onTextChange} />
      <h3>{this.state.text.length}</h3>
      </div>
    </>
    )
  }
}



