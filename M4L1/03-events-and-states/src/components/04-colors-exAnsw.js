import React, { Component, useState } from 'react'

export function ColorBoxesFunc04() {

	const [clickCount, setClickCount] = useState (0);


	//Eventhandler, in func component
	const onClick = (e) => {
		console.log(`Func component box clicked: ${e.target.className}`);

		//states, in func component, 
		//states are readonly, need to use setClickCount() to change the state of text
		setClickCount(clickCount + 1);
	}
	
	return (
    <>
    <h1>ColorBoxesFunc04: nr clicks {clickCount}</h1>
	<div className="FlexWrap">
		<div className="FlexItem Red" onClick={onClick}>Red box</div>
		<div className="FlexItem Orange" onClick={onClick}>Orange box</div>
		<div className="FlexItem Green" onClick={onClick}>Green box</div>
		<div className="FlexItem Yellow" onClick={onClick}>Yellow box</div>
		<div className="FlexItem Blue" onClick={onClick}>Blue box</div>
	  </div>
    </> 
	)
}


export class ColorBoxesClass04 extends Component {
	constructor() {
		super();          //Needs to be the 1st call

		//states, in class component, initialized, here with an empty object
		this.state = {clickCount: 0};  

		//Eventhandler, in class component
		this.onClick = this.onClick.bind(this);
		}

		//Eventhandler, in class component
		onClick(e) {
			console.log(`Class component box clicked: ${e.target.className}`);

			//states in class component
			//states are readonly, need to use setState() to change the state of clickCount
			this.setState({               
				clickCount: this.state.clickCount + 1,  
			});
	}
	
	render() {
	return (
		<>
		<h1>ColorBoxesFunc04: nr clicks {this.state.clickCount}</h1>
		<div className="FlexWrap">
			<div className="FlexItem Red" onClick={this.onClick}>Red box</div>
			<div className="FlexItem Orange" onClick={this.onClick}>Orange box</div>
			<div className="FlexItem Green" onClick={this.onClick}>Green box</div>
			<div className="FlexItem Yellow" onClick={this.onClick}>Yellow box</div>
			<div className="FlexItem Blue" onClick={this.onClick}>Blue box</div>
		  </div>
		</> 	)
  }
}

/* Exercise
for both Func and Class components:

1. Add a Click event handler to the colored boxes so a click in a box is registered by printed out to the console
2. Add state so the total number of clicks is kept as a state in the component.
   - the total should presented in browser as part of the <h1> header tag
   Hint: you can use a state clickCount and initialize the state it as:
   		func comp - const [clickCount, setClickCount] = useState (0);
		class comp - this.state = {clickCount: 0};  

*/

