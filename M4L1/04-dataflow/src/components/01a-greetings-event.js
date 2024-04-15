import React, { Component } from 'react'

//https://react.dev/learn/javascript-in-jsx-with-curly-braces

export function GreetingsFunc01a(props) {

    const timeOfDay = props.timeOfDay || "morning";
    const name = props.name;
    const greetings = props.greetings || `What a lovely ${timeOfDay}`;

    //Eventhandler, in func component
    const onClick = (e) => {
        console.log(`Func component clicked: ${e.target}`);

        //event lifting. After I am done locally in my component I call the onClick in props, if any
        if (props.onClick)
            props.onClick(e);
    }

    const onToDClick = (e) => {
        console.log(`ToD clicked: ${e.target}`);  

        if (props.onToDClick)
            props.onToDClick(e);
    }

    return (
        <div>
            {(timeOfDay==="morning"&&<h1><span onClick={onToDClick}>Good morning</span> <span onClick={onClick}>{name}</span></h1>)||
            (timeOfDay==="afternoon"&&<h1><span onClick={onToDClick}>Good afternoon</span> <span onClick={onClick}>{name}</span></h1>)||
            (timeOfDay==="evening"&&<h1><span onClick={onToDClick}>Good evening</span> <span onClick={onClick}>{name}</span></h1>) ||
            <h1>Hello <span onClick={onClick}>{name}</span></h1>}

            <p>{greetings}</p>
        </div>
    )
}

export class GreetingsClass01a extends Component {
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

        const timeOfDay = this.props.timeOfDay || "morning";
        const name = this.props.name;
        const greetings = this.props.greetings || `What a lovely ${timeOfDay}`;
        
        return (
        <div>
            {(timeOfDay==="morning"&&<h1>Good morning <span onClick={this.onClick}>{name}</span></h1>)||
            (timeOfDay==="afternoon"&&<h1>Good afternoon <span onClick={this.onClick}>{name}</span></h1>)||
            (timeOfDay==="evening"&&<h1>Good evening <span onClick={this.onClick}>{name}</span></h1>) ||
            <h1>Hello <span onClick={this.onClick}>{name}</span></h1>}

            <p>{greetings}</p>
        </div>
        )
    }
}
