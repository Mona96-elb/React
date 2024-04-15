import logo from './logo.svg';
import './App.css';
import { GreetingsFunc01, GreetingsClass01 } from './components/01-greetings';
import { QuoteListClass02, QuoteListFunc02 } from './components/02-quote-lists';
import { GreetQuoteFunc03, GreetQuoteClass03 } from './components/03-higher-level-components';
import { GreetQuoteFunc04, GreetQuoteClass04 } from './components/04-higher-level-props';
import { GreetQuoteFunc05, GreetQuoteClass05 } from './components/05-event-lifting';
import { GreetQuoteFunc06, GreetQuoteClass06 } from './components/06-state-lifting';
import { GreetQuoteFunc07, GreetQuoteClass07 } from './components/07-events-change-state';

function App() {
  return (
    //Using simple components
    /*
    <>
      <GreetingsFunc01/>
      <QuoteListFunc02/>
      <GreetingsClass01/>
      <QuoteListClass02/>
    </>
    */

    //Using the higher level components
    /*
    <>
    <GreetQuoteFunc03/>
    <GreetQuoteClass03/>
    </>
    */

    //Using the higher level components with properties
    /*
    <>
    <GreetQuoteFunc04/>
    <GreetQuoteClass04/>
    </>
    */

    //Using the higher level components with EVENT lifting
    //Event lifting is about bubbling events upwards in the component hierachy by the usage of
    //eventhandlers and properties.
    //Child component after handling the events calls a parents eventhandler, if any, 
    //that is passed to the child as a property
    /*
    <>
    <GreetQuoteFunc05/>
    <GreetQuoteClass05/>
    </>
    */

    //Using the higher level components with STATE lifting
    //STATE lifting is about keeping the states as high in the component hierachy as possible by the usage of
    //properties. States are kept and updated in a parent and passed to the child as properties.
    //When a state is updated all depending children are updated by React.
    /*
    <>
    <GreetQuoteFunc06/>
    <GreetQuoteClass06/>
    </>
    */

    //Dataflow. Events upwards will change the states which will update the children through props
    <>
    <GreetQuoteFunc07/>
    <GreetQuoteClass07/>
    </>
);
}

export default App;
