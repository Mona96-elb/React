import React, { Component, useState, setState } from 'react'
import { GreetingsFunc01a, GreetingsClass01a } from './01a-greetings-event';
import { QuoteListClass02a, QuoteListFunc02a } from './02a-quote-lists-event';

import { uniqueId, seedGenerator } from '../services/seido-helpers';

export function GreetQuoteFunc07() {

  const _seeder = new seedGenerator();

  //states in func component, use const and hook useState, one hook for each state property
  const [timeOfDay, setTimeOfDay] = useState ("evening");
  const [name, setName] = useState ("Harry");
  const [greetings, setGreetings] = useState ("Have a wounderful evening");
 
  const [quoteFilter, setQuoteFilter] = useState ("love");
  const [quotes, setQuotes] = useState (_seeder.allQuotes.filter(q => q.quote.toLowerCase().includes("love")));

  const [title, setTitle] = useState ("Some love quotes for you Harry");


  //Eventhandler, in func component
  const onClickGreet = (e) => {
      console.log(`GreetQuoteFunc07 clicked: ${e.target}`);

      const newName = _seeder.petName;  //needed as states are async, you cannot use name (in the state) immediatly after change
      setName(newName);
      setTitle(`Some ${quoteFilter} quotes for you ${newName}`);
  }
  const onClickQuote = (e) => {
    console.log(`GreetQuoteFunc07 clicked: ${e.target}`);

    let newFilter;
    if (quoteFilter === "love")
      newFilter = "work";
    else if (quoteFilter === "work")
      newFilter = "procrastination";
    else
      newFilter = "love";

    const newQuotes = _seeder.allQuotes.filter(q => q.quote.toLowerCase().includes(newFilter));
    setQuoteFilter(newFilter);
    setQuotes(newQuotes);

    setTitle(`Some ${newFilter} quotes for you ${name}`);

}
  const onToDClick = (e) => {
    console.log(`GreetQuoteFunc07 ToD clicked: ${e.target}`);

    let newToD;
    if (timeOfDay === "morning")
      newToD = "afternoon";
    else if (timeOfDay === "afternoon")
      newToD = "evening";
    else
      newToD = "morning";
    
      setTimeOfDay(newToD);
      setGreetings(`Have a wounderful ${newToD}`);
  }

  //In State lifting the states are kept in the parent and passed as props to the children
  return (
    <>
    <GreetingsFunc01a timeOfDay={timeOfDay} name={name} greetings={greetings} onClick={onClickGreet} onToDClick={onToDClick}/>
    <QuoteListFunc02a quotes={quotes} title={title} onClick={onClickQuote}/>
    </>
  )
}

export class GreetQuoteClass07 extends Component {
  constructor() {
    super();          //Needs to be the 1st call
 
    this._seeder = new seedGenerator();
 
    //states, in class component, initialized, here with an empty object
    this.state = {
      timeOfDay: "afternoon",
      name: "Sam",
      greetings: "Have a wounderful afternoon",
      quoteFilter: "love",
      quotes: this._seeder.allQuotes.filter(q => q.quote.toLowerCase().includes("love")),
      title: "Some love quotes for you Sam" 
    };  

    //Eventhandler, in class component
    this.onClickGreet = this.onClickGreet.bind(this);
    this.onClickQuote = this.onClickQuote.bind(this);
  }

  //Eventhandler, in class
  onClickGreet(e) {
      console.log(`GreetQuoteClass07 clicked: ${e.target}`);

      const newName = this._seeder.petName;  //needed as states are async, you cannot use name (in the state) immediatly after change
      const newTitle = `Some ${this.state.quoteFilter} quotes for you ${newName}`;
      this.setState({name: newName, title: newTitle});

  }
  onClickQuote(e) {
    console.log(`GreetQuoteClass07 clicked: ${e.target}`);

    let newFilter;
    if (this.state.quoteFilter === "love")
      newFilter = "work";
    else if (this.state.quoteFilter === "work")
      newFilter = "procrastination";
    else
      newFilter = "love";

    const newQuotes = this._seeder.allQuotes.filter(q => q.quote.toLowerCase().includes(newFilter));
    const newTitle = `Some ${newFilter} quotes for you ${this.state.name}`;

    this.setState({quotes: newQuotes, title: newTitle, quoteFilter: newFilter});
  }

  render() {
   return (
    <>
    <GreetingsClass01a timeOfDay={this.state.timeOfDay} name={this.state.name} 
        greetings={this.state.greetings} onClick={this.onClickGreet}/>
    <QuoteListClass02a quotes={this.state.quotes} title={this.state.title} onClick={this.onClickQuote}/>
    </>
    ) }
}

/* Exercise
1. modify the the code so a click on the time of day changes the greeting and greeting message.
   - a click should toggle morning->afternoon->evening->morning
   - The greeting and the greeting message should change accordingly to
    Good ... Harry,  Have a woulderful ... where ... is the result fo the click toggle
*/

