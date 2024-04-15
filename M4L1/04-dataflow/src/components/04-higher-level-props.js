import React, { Component } from 'react'
import { GreetingsFunc01, GreetingsClass01 } from './01-greetings';
import { QuoteListClass02, QuoteListFunc02 } from './02-quote-lists';

import { uniqueId, seedGenerator } from '../services/seido-helpers';

export function GreetQuoteFunc04() {

  const _seeder = new seedGenerator();
  return (
    <>
    <GreetingsFunc01 timeOfDay="evening" name="Harry" greetings="Have a wounderful evening"/>
    <QuoteListFunc02 quotes={_seeder.allQuotes} title="Some quotes for you Harry"/>
    </>
  )
}

export class GreetQuoteClass04 extends Component {
  
  render() {
    const _seeder = new seedGenerator();
    return (
    <>
    <GreetingsClass01 timeOfDay="afternoon" name="Sam" greetings="Have a wounderful afternoon"/>
    <QuoteListClass02 quotes={_seeder.allQuotes.filter(q => q.quote.toLowerCase().includes("love"))} title="Some quotes for you Sam"/>
    </>
    ) }
}

