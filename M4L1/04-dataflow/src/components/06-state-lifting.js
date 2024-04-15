import React, { Component, useState } from 'react'
import { GreetingsFunc01a, GreetingsClass01a } from './01a-greetings-event';
import { QuoteListClass02a, QuoteListFunc02a } from './02a-quote-lists-event';

import { uniqueId, seedGenerator } from '../services/seido-helpers';

export function GreetQuoteFunc06() {

  const _seeder = new seedGenerator();

  //states in func component, use const and hook useState, one hook for each state property
  const [timeOfDay, setTimeOfDay] = useState ("evening");
  const [name, setName] = useState ("Harry");
  const [greetings, setGreetings] = useState ("Have a wounderful evening");
  const [quotes, setQuotes] = useState (_seeder.allQuotes);
  const [title, setTitle] = useState ("Some quotes for you Harry");
  

  //Eventhandler, in func component
  const onClick = (e) => {
      console.log(`GreetQuoteFunc06 clicked: ${e.target}`);
  }

  //In State lifting the states are kept in the parent and passed as props to the children
  return (
    <>
    <GreetingsFunc01a timeOfDay={timeOfDay} name={name} greetings={greetings} onClick={onClick}/>
    <QuoteListFunc02a quotes={quotes} title={title} onClick={onClick}/>
    </>
  )
}

export class GreetQuoteClass06 extends Component {
  constructor() {
    super();          //Needs to be the 1st call
 
    this._seeder = new seedGenerator();
 
    //states, in class component, initialized, here with an empty object
    this.state = {
      timeOfDay: "afternoon",
      name: "Sam",
      greetings: "Have a wounderful afternoon",
      quotes: this._seeder.allQuotes.filter(q => q.quote.toLowerCase().includes("love")),
      title: "Some quotes for you Sam" 
    };  

    //Eventhandler, in class component
    this.onClick = this.onClick.bind(this);
  }

  //Eventhandler, in class
  onClick(e) {
      console.log(`GreetQuoteClass06 clicked: ${e.target}`);
  }

  render() {
   return (
    <>
    <GreetingsClass01a timeOfDay={this.state.timeOfDay} name={this.state.name} 
        greetings={this.state.greetings} onClick={this.onClick}/>
    <QuoteListClass02a quotes={this.state.quotes} title={this.state.title} onClick={this.onClick}/>
    </>
    ) }
}

