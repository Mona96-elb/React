import React, { Component } from 'react'


//https://react.dev/learn/passing-props-to-a-component
//In a function component use props as as parameter
export function PropsFunc01(props) {
  return (
    <>
    <h1>PropsFunc01</h1>
    <p>
    My name is <em>{props.name}</em>.&nbsp;
    My friend is <em>{props.friend}</em>.
  </p>
  </>
  )
}


//In a class component React provides the props in this.props
export class PropsClass01 extends Component {
  render() {
    return (
        <>
        <h1>PropsClass01</h1>
        <p>
        My name is <em>{this.props.name}</em>.&nbsp;
        My friend is <em>{this.props.friend}</em>.
      </p>
      </>
    )
  }
}

/* Exercises
1. Copy the component 05-conditional-jsx from 01-simple-components. Modify the components so _timeOfDay becomes a prop.
   - the App should then invoke them as
        <HelloFunc05 timeOfDay="morning"/>
        <HelloClass05a timeOfDay="afternoon"/>
        <HelloClass05b timeOfDay="afternoon"/>
   - change the timeOfDay prop as verify the component rendering
*/