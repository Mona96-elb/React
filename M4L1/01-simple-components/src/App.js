import logo from './logo.svg';
import './App.css';
import './css/flexbox_5.css'

import HelloWorld01 from './components/01-hello-world';
import HelloWorld02 from './components/02-hello-world';
import HelloWorld03 from './components/03-class-components';
import { QuoteListFunc04,  QuoteListClass04} from './components/04-quote-lists';
import { HelloFunc05,  HelloClass05a, HelloClass05b} from './components/05-conditional-jsx';
import { ColoredBoxesClass, ColoredBoxesFunc } from './components/colored-box';

function App() {
  return (

    //Adding a component from App.js
    /*
    <HelloWorld02/>
    */

    //Class and function components from App.js
    /*
    <>
    <HelloWorld02/>
    <HelloWorld03/>
    </>
    */

    /*
    <>
    <ColoredBoxesFunc/>
    <ColoredBoxesClass/>
    </>
    */

    //Class and function components mixing javascript
    /*
    <>
    <QuoteListFunc04/>
    <QuoteListClass04/>
    </>
    */

    //Class and function components conditional rendering in JSX
    
    <>
    <HelloFunc05/>
    <HelloClass05a/>
    <HelloClass05b/>
    </>
  
    );
}

export default App;
