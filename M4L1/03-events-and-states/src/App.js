import logo from './logo.svg';
import './App.css';
import './css/flexbox_5.css';
import { TextCounterClass01, TextCounterFunc01 } from './components/01-stateless';
import { TextCounterClass02, TextCounterFunc02 } from './components/02-events';
import { TextCounterClass03, TextCounterFunc03 } from './components/03-states';
import { ColorBoxesClass04, ColorBoxesFunc04 } from './components/04-colors';

function App() {
  return (
    //Stateless
    /*
    <>
      <TextCounterFunc01/>
      <TextCounterClass01/>
    </>
    */

    //Add events
    /*
    <>
    <TextCounterFunc02/>
    <TextCounterClass02/>
    <TextCounterFunc02 text="Hello, my name is Martin"/>
    <TextCounterClass02 text="Hello, my name is Martin"/>
    </>
    */

    //Add states
    
    <>
    <TextCounterFunc03/>
    <TextCounterClass03/>
    <TextCounterFunc03 text="Hello, my name is Martin"/>
    <TextCounterClass03 text="Hello, my name is Martin"/>
    </>
    

    //Color exercise
    /*
    <>
    <ColorBoxesFunc04/>
    <ColorBoxesClass04/>
    </>
    */
  );
}

export default App;
