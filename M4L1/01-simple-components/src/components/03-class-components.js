import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

export default class HelloWorld03 extends Component {
  render() {


    const greeting = "Good morning";
    const address = {city: "Oslo", country: "Norway"};
    const paragraph = <p>My special paragraph</p>;
  
    const _seeder = new seedGenerator();
    const q = _seeder.quote;
    return (
        <>
        <h1>{greeting} A class component</h1>
        <h1 id="my-heading">
        text before span tag:&nbsp;
        <span>
          hello&nbsp;<em>Wonderful&nbsp;</em>World
        </span>
        &nbsp;:text after span tag 
        </h1>
        <p>I live in {address.city} which is in {address.country}</p>
        {paragraph}
        <p>{q.quote}</p>
      </>
    )
  }
}

/*
Exercises:
1. In folder html-for-exercises->flexbox_5.html
    - implement <div class="FlexWrap">...</> as a React Class Component in JSX
    - in React instead of class= you have to use className=
2. Have App.js to render muliple instances of the class and function component you created

*/
