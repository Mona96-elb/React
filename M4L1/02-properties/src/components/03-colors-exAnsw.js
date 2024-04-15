import React from 'react'

export function ColorBoxes01() {
	return (
    <>
    <h1>ColorBoxes01</h1>
	<div className="FlexWrap">
		<div className="FlexItem Red">Red box</div>
		<div className="FlexItem Orange">Orange box</div>
		<div className="FlexItem Green">Green box</div>
		<div className="FlexItem Yellow">Yellow box</div>
		<div className="FlexItem Blue">Blue box</div>
		<div className="FlexItem Red">Red box</div>
		<div className="FlexItem Orange">Orange box</div>
		<div className="FlexItem Green">Green box</div>
		<div className="FlexItem Yellow">Yellow box</div>
		<div className="FlexItem Blue">Blue box</div>
	  </div>
    </> )
}

export function ColorBoxes02(props) {
	const c = props.color;

	return (
    <>
    <h1>ColorBoxes02</h1>
	<div className="FlexWrap">
		{(c === 'red' || c === 'all') && <div className="FlexItem Red">Red box</div>}
		{(c === 'orange' || c === 'all') && <div className="FlexItem Orange">Orange box</div>}
		{(c === 'green' || c === 'all') && <div className="FlexItem Green">Green box</div>}
		{(c === 'yellow' || c === 'all') && <div className="FlexItem Yellow">Yellow box</div>}
		{(c === 'blue' || c === 'all') && <div className="FlexItem Blue">Blue box</div>}
		{(c === 'red' || c === 'all') && <div className="FlexItem Red">Red box</div>}
		{(c === 'orange' || c === 'all') && <div className="FlexItem Orange">Orange box</div>}
		{(c === 'green' || c === 'all') && <div className="FlexItem Green">Green box</div>}
		{(c === 'yellow' || c === 'all') && <div className="FlexItem Yellow">Yellow box</div>}
		{(c === 'blue' || c === 'all') && <div className="FlexItem Blue">Blue box</div>}
	  </div>
    </> )
}

ColorBoxes02.defaultProps = {
	color: 'all'
  };

export function ColorBoxes03(props) {
	const c = props.color;
	
	return (
    <>
    <h1>ColorBoxes03</h1>
	<div className="FlexWrap">
		{c?.includes('red') && <div className="FlexItem Red">Red box</div>}
		{c?.includes('orange') && <div className="FlexItem Orange">Orange box</div>}
		{c?.includes('green') && <div className="FlexItem Green">Green box</div>}
		{c?.includes('yellow') && <div className="FlexItem Yellow">Yellow box</div>}
		{c?.includes('blue') && <div className="FlexItem Blue">Blue box</div>}
		{c?.includes('red') && <div className="FlexItem Red">Red box</div>}
		{c?.includes('orange') && <div className="FlexItem Orange">Orange box</div>}
		{c?.includes('green') && <div className="FlexItem Green">Green box</div>}
		{c?.includes('yellow') && <div className="FlexItem Yellow">Yellow box</div>}
		{c?.includes('blue') && <div className="FlexItem Blue">Blue box</div>}
	  </div>
    </> )
}

/* Exercises
1. In ColorBoxes02 add properties so the color to be shown is set i a property. For example
	- <ColorBoxes02 color="orange" /> should only show orange boxes

2. In ColorBoxes03 add properties so several colors could be set. For example
	- <ColorBoxes03 color={["orange", "green", "blue"]}  /> should only show orange, green and blue boxes
	- Hint: remeber you can use JS .includes to check if an element is included in the array. 
	        See JS M3L2 13-array-searching-array

3. Add Default property so ColorBoxes02 displays color red if no props is set
4. Modify code  and Default property so ColorBoxes02 displays all colors if no props is set
*/


