import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

const _seeder = new seedGenerator();

export function TextCounterFunc02(props) {
  const text = props.text;

    //Eventhandler, in func component
  const onTextChange = (e) => {
      console.log(`Func component text changed: ${e.target.value}`)
    }

  return (
    <>
      <h1>TextCounterFunc02</h1>
      <div>
      <textarea defaultValue={text} onChange={onTextChange}/>
      <h3>{text.length}</h3>
      </div>
    </>
  )
}

TextCounterFunc02.defaultProps = {
  text: _seeder.latinWords(4).join(' ')
};


export class TextCounterClass02 extends Component {
  constructor() {
    super();          //Needs to be the 1st call

    //Eventhandler, in class component
    this.onTextChange = this.onTextChange.bind(this);
  }

  //Eventhandler, in class
  onTextChange(e) {
    console.log(`Class component text changed: ${e.target.value}`)
  }

  render() {
    const text = this.props.text;

    return (
    <>
      <h1>TextCounterClass02</h1>
      <div>
      <textarea defaultValue={text} onChange={this.onTextChange} />
      <h3>{text.length}</h3>
      </div>
    </>
    )
  }
}

TextCounterClass02.defaultProps = {
    text: _seeder.latinWords(4).join(' ')
  };