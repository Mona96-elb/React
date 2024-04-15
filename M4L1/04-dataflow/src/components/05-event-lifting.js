import React, { Component } from 'react'
import { GreetingsFunc01a, GreetingsClass01a } from './01a-greetings-event';
import { QuoteListClass02a, QuoteListFunc02a } from './02a-quote-lists-event';

import { uniqueId, seedGenerator } from '../services/seido-helpers';

export function GreetQuoteFunc05() {

  const _seeder = new seedGenerator();

  //Eventhandler, in func component
  const onClick = (e) => {
      console.log(`GreetQuoteFunc05 clicked: ${e.target}`);
  }

  return (
    <>
    <GreetingsFunc01a timeOfDay="evening" name="Harry" greetings="Have a wounderful evening" onClick={onClick}/>
    <QuoteListFunc02a quotes={_seeder.allQuotes} title="Some quotes for you Harry" onClick={onClick}/>
    </>
  )
}

export class GreetQuoteClass05 extends Component {
  constructor() {
    super();          //Needs to be the 1st call

    //Eventhandler, in class component
    this.onClick = this.onClick.bind(this);
  }

  //Eventhandler, in class
  onClick(e) {
      console.log(`GreetQuoteClass05 clicked: ${e.target}`);
  }

  render() {
    const _seeder = new seedGenerator();
    return (
    <>
    <GreetingsClass01a timeOfDay="afternoon" name="Sam" greetings="Have a wounderful afternoon" onClick={this.onClick}/>
    <QuoteListClass02a quotes={_seeder.allQuotes.filter(q => q.quote.toLowerCase().includes("love"))} 
        title="Some quotes for you Sam" onClick={this.onClick}/>
    </>
    ) }
}

/* Exercise
1. To GreetingsFunc01a and GreetingsClass01a add an onClickTimeOfDay event that is lifted up to 
   GreetQuoteFunc05 and GreetQuoteClass05. 
   - the event handler should be invoked when "Good morning", "Good afternoon" or "Good evening", "Hello"is clicked
   - the event handler should simply log to the console
*/

