import React, { Component } from 'react'

export function QuoteListFunc02a(props) {

    const title = props.title;
    const quotes = props.quotes || [];  //What happens here? why?

    //Eventhandler, in func component
    const onClick = (e) => {
        console.log(`Func component clicked: ${e.target}`);

        //event lifting. After I am done locally in my component I call the onClick in props, if any
        if (props.onClick)
            props.onClick(e);
    }
    return (
        <>
        <h1 onClick={onClick}>{title}</h1>
        <ul>
            {
            quotes.map(q => <li>{q.quote} {q.author}</li>)
            }
        </ul>
        </>
    )
}

export class QuoteListClass02a extends Component {
    constructor() {
        super();          //Needs to be the 1st call
    
        //Eventhandler, in class component
        this.onClick = this.onClick.bind(this);
    }
    
    //Eventhandler, in class
    onClick(e) {
        console.log(`Class component clicked: ${e.target}`);

        //event lifting. After I am done locally in my component I call the onClick in props, if any
        if (this.props.onClick)
            this.props.onClick(e);
    }
    
    render() {
        const title = this.props.title;
        const quotes = this.props.quotes || []; //What happens here? why?

        return (
        <>
        <h1 onClick={this.onClick}>{title}</h1>
        <ul>
            {
            quotes.map(q => <li>{q.quote} {q.author}</li>)
            }
        </ul>
        </>
      )
    }
}
