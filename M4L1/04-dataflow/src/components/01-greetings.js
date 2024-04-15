import React, { Component } from 'react'

//https://react.dev/learn/javascript-in-jsx-with-curly-braces

export function GreetingsFunc01(props) {

    const timeOfDay = props.timeOfDay || "morning";
    const name = props.name;
    const greetings = props.greetings || `What a lovely ${timeOfDay}`;
    return (
        <div>
            {(timeOfDay==="morning"&&<h1>Good morning <span>{name}</span></h1>)||
            (timeOfDay==="afternoon"&&<h1>Good afternoon <span>{name}</span></h1>)||
            (timeOfDay==="evening"&&<h1>Good evening <span>{name}</span></h1>) ||
            <h1>Hello <span>{name}</span></h1>}

            <p>{greetings}</p>
        </div>
    )
}

export class GreetingsClass01 extends Component {
    
    render() {

        const timeOfDay = this.props.timeOfDay || "morning";
        const name = this.props.name;
        const greetings = this.props.greetings || `What a lovely ${timeOfDay}`;
        
        return (
        <div>
            {(timeOfDay==="morning"&&<h1>Good morning <span>{name}</span></h1>)||
            (timeOfDay==="afternoon"&&<h1>Good afternoon <span>{name}</span></h1>)||
            (timeOfDay==="evening"&&<h1>Good evening <span>{name}</span></h1>) ||
            <h1>Hello <span>{name}</span></h1>}

            <p>{greetings}</p>
        </div>
        )
    }
}
