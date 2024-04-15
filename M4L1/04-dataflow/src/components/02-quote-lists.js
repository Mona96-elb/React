import React, { Component } from 'react'

export function QuoteListFunc02(props) {

    const title = props.title;
    const quotes = props.quotes || [];  //What happens here? why?

    return (
        <>
        <h1>{title}</h1>
        <ul>
            {
            quotes.map(q => <li>{q.quote} {q.author}</li>)
            }
        </ul>
        </>
    )
}

export class QuoteListClass02 extends Component {
    render() {
        const title = this.props.title;
        const quotes = this.props.quotes || []; //What happens here? why?

        return (
        <>
        <h1>{title}</h1>
        <ul>
            {
            quotes.map(q => <li>{q.quote} {q.author}</li>)
            }
        </ul>
        </>
      )
    }
}
