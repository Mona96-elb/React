import React, { Component } from 'react'


//https://react.dev/reference/react/Component#static-defaultprops
//defaultProps is a static defined property by React
//Func and class components set defaultProps in the same way. 
export function PropsFunc02(props) {
  return (
    <>
    <h1>PropsFunc02</h1>
    <p>
    My name is <em>{props.name}</em>.&nbsp;
    My friend is <em>{props.friend}</em>.
  </p>
  </>
  )
}

PropsFunc02.defaultProps = {
  name: 'Asterix',
  friend: 'Obelix',
};


export class PropsClass02a extends Component {
  render() {
    return (
        <>
        <h1>PropsClass02a</h1>
        <p>
        My name is <em>{this.props.name}</em>.&nbsp;
        My friend is <em>{this.props.friend}</em>.
      </p>
      </>
    )
  }
}

PropsClass02a.defaultProps = {
  name: 'Asterix',
  friend: 'Obelix',
};


//An alternative to defaultProps is to use the || operator
export class PropsClass02b extends Component {
  render() {

    const name = this.props.name || 'Asterix';
    const friend = this.props.friend || 'Obelix';

    return (
        <>
        <h1>PropsClass02b</h1>
        <p>
        My name is <em>{name}</em>.&nbsp;
        My friend is <em>{friend}</em>.
      </p>
      </>
    )
  }
}