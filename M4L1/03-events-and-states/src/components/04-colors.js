import React, { Component } from 'react'

export function ColorBoxesFunc04() {
	return (
    <>
    <h1>ColorBoxesFunc04</h1>
	<div className="FlexWrap">
		<div className="FlexItem Red">Red box</div>
		<div className="FlexItem Orange">Orange box</div>
		<div className="FlexItem Green">Green box</div>
		<div className="FlexItem Yellow">Yellow box</div>
		<div className="FlexItem Blue">Blue box</div>
	  </div>
    </> 
	)
}


export class ColorBoxesClass04 extends Component {
  render() {
	return (
		<>
		<h1>ColorBoxesFunc04</h1>
		<div className="FlexWrap">
			<div className="FlexItem Red">Red box</div>
			<div className="FlexItem Orange">Orange box</div>
			<div className="FlexItem Green">Green box</div>
			<div className="FlexItem Yellow">Yellow box</div>
			<div className="FlexItem Blue">Blue box</div>
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

3. Make a new Component Latin that consists of a <p> tag and a <button>
   - each time you click on the button a new bogus latin sentence should be presented in the <p> tag

*/

