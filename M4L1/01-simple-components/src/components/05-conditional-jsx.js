import React, { Component } from 'react'
import { uniqueId, seedGenerator } from '../services/seido-helpers';

//https://react.dev/learn/javascript-in-jsx-with-curly-braces

export function HelloFunc05() {

    const _seeder = new seedGenerator();
    const _latin = _seeder.latinSentence;

    const _timeOfDay = "morning";
//    const _timeOfDay = "afternoon";
//    const _timeOfDay = "evening";
//    const _timeOfDay = undefined;
    let _greetings;

    //Alternative 1
    //before the return I can do normal JS statements, such as if or switch
    switch (_timeOfDay)
    {
        case "morning":
            _greetings = <h1>Good morning</h1>;
            break;
        case "afternoon":
            _greetings = <h1>Good afternoon</h1>;
            break;
        case "evening":
            _greetings = <h1>Good evening</h1>;
            break;
        default:
            _greetings = <h1>Hello</h1>;
    }

    return (
        <div>{_greetings}
        <p>{_latin}</p>
        </div>
    )
}

export class HelloClass05a extends Component {
    render() {
        const _seeder = new seedGenerator();
        const _latin = _seeder.latinSentence;
    
        const _timeOfDay = "morning";
//    const _timeOfDay = "afternoon";
//    const _timeOfDay = "evening";
//    const _timeOfDay = undefined;

        //Alternative 2
        //Use conditional rendering with && and || operators
        return (
            <div>
                {(_timeOfDay==="morning"&&<h1>Good morning</h1>)||
                 (_timeOfDay==="afternoon"&&<h1>Good afternoon</h1>)||
                 (_timeOfDay==="evening"&&<h1>Good evening</h1>) ||
                 <h1>Hello</h1>}
            <p>{_latin}</p>
            </div>
        )
    }
}

export class HelloClass05b extends Component {
    render() {
        const _seeder = new seedGenerator();
        const _latin = _seeder.latinSentence;
    
        const _timeOfDay = "morning";
//    const _timeOfDay = "afternoon";
//    const _timeOfDay = "evening";
//    const _timeOfDay = undefined;

        //Alternative 3
        //Use conditional rendering with Conditional operator (expr)?expr :expr
        return (
            <div>
                {/* simple true - false is ok for this alternative */}
                {(_timeOfDay==="morning") ?<h1>Good morning</h1> :<h1>Hello</h1>}

                {//more complex works but is difficult to read, consider Alternative 1 or 2
                ((_timeOfDay==="morning") ?<h1>Good morning</h1> 
                    :(
                        (_timeOfDay==="afternoon") ?<h1>Good afternoon</h1>
                        :(
                            (_timeOfDay==="evening") ?<h1>Good evening</h1>:<h1>Hello</h1>)))                    
                }
            <p>{_latin}</p>
            </div>
        )
    }
}

/* Exercise
1. Write 3 component that says Hello Man, or Hello Woman, depending on content of bool variable _male.
   -- each component is using a different conditional rendering method, Alt 1, Alt 2, Alt 3
*/
