import React, { Component } from 'react'
import { GreetingsFunc01, GreetingsClass01 } from './01-greetings';
import { QuoteListClass02, QuoteListFunc02 } from './02-quote-lists';

import { uniqueId, seedGenerator } from '../services/seido-helpers';

export function GreetQuoteFunc03() {
    return (
    <>
    <GreetingsFunc01/>
    <QuoteListFunc02/>
    </>
  )
}

export class GreetQuoteClass03 extends Component {
  
  render() {
    return (
    <>
    <GreetingsClass01/>
    <QuoteListClass02/>
    </>
    ) }
}

