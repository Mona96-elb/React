import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

export function ColoredBoxesFunc() {
  let count =0;

  return (
    <>
    <div>ColoredBoxesFunc</div>
    <div className="FlexWrap"> 
    <div className="FlexItem Red">Red box {count}</div>
    <div className="FlexItem Orange">Orange box {++count}</div>
    <div className="FlexItem Green">Green box {++count}</div>
    <div className="FlexItem Yellow">Yellow box {++count}</div>
    <div className="FlexItem Blue">Blue box {++count}</div>
    <div className="FlexItem Red">Red box {++count}</div>
    <div className="FlexItem Orange">Orange box {++count}</div>
    <div className="FlexItem Green">Green box {++count}</div>
    <div className="FlexItem Yellow">Yellow box {++count}</div>
    <div className="FlexItem Blue">Blue box {++count}</div>
    </div>
    </>
  )
}


export class ColoredBoxesClass extends Component {
  render() {

    const _seeder = new seedGenerator();

    const _colors = ['Red', 'Orange', 'Green', 'Yellow', 'Blue'];

    return (
        <>
        <div>ColoredBoxesFunc</div>
        <div className="FlexWrap"> 
        <div className="FlexItem Red">Red box {_seeder.latinWord}</div>
        <div className="FlexItem Orange">Orange box {_seeder.latinWord}</div>
        <div className="FlexItem Green">Green box {_seeder.latinWord}</div>
        <div className="FlexItem Yellow">Yellow box</div>
        <div className="FlexItem Blue">Blue box</div>

        {_colors.map( i => <div className={`FlexItem ${i}`}>{i} box</div>)}

        </div>
        </>    )
  }
}



/*
Exercises:
1. In folder html-for-exercises->flexbox_5.html
    - implement <div className="FlexWrap">...</> as a React ClassName Component in JSX
    - in React instead of className= you have to use classNameName=
2. Have App.js to render muliple instances of the className and function component you created

*/