import React, { Component, useState } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

const _seeder = new seedGenerator();

export function TextCounterFunc03(props) {
  //const text = props.text;

  //states in func component, use const and hook useState, one hook for each state property
  const [text, setText] = useState (props.text);
  const [anotherState, setAnotherState] = useState ({}); //Example if you need another state property
  
  //Eventhandler, in func component
  const onTextChange = (e) => {
    console.log(`Func component text changed: ${e.target.value}`);

    //states in func component
		//states are readonly, need to use setText() to change the state of text
    setText(e.target.value);
    }

  return (
    <>
      <h1>TextCounterFunc03</h1>
      <div>
      <textarea defaultValue={text} onChange={onTextChange}/>
      <h3>{text.length}</h3>
      <p>{text}</p>
      </div>
    </>
  )
}

TextCounterFunc03.defaultProps = {
  text: _seeder.latinWords(4).join(' ')
};


export class TextCounterClass03 extends Component {
  constructor(props) {
    super(props);          //Needs to be the 1st call

    //states, in class component, initialized, here with an empty object
    this.state = {text: this.props.text,
                  anotherState: {}       // Example if you need another state property
                 };  

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
    //const text = this.props.text;
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

TextCounterClass03.defaultProps = {
    text: _seeder.latinWords(4).join(' ')
  };