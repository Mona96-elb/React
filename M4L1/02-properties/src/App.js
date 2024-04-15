import logo from './logo.svg';
import './App.css';
import './css/flexbox_5.css';
import { PropsClass01, PropsFunc01 } from './components/01-props';
import { PropsFunc02, PropsClass02a, PropsClass02b } from './components/02-props-default';
import { ColorBoxes01, ColorBoxes02, ColorBoxes03 } from './components/03-colors';
import { ColorBoxes04 } from './components/04-props-type';

function App() {
  return (
  
  //Using Props
  /*
  <>
    <PropsFunc01 name="Harry" friend="Sam"/>
    <PropsClass01 name="Hemronie" friend="Sara"/>
  </>
  */

  //Undefined props
  /*
  <>
  <PropsFunc01/>
  <PropsClass01/>
  </>
  */
  
  //Default props
  /*
  <>
  <PropsFunc02/>
  <PropsClass02a friend="Idefix"/>
  <PropsClass02b name="Idefix"/>
  </>
  */

  //Color exercise props and default props
  
  <>
  <ColorBoxes01/>
  <ColorBoxes02 color="orange" />
  <ColorBoxes03 color={["orange", "green", "blue"]}  />
  </>


  //PropTypes
  /*
  <>
  <ColorBoxes04 />
  <ColorBoxes04 number="30"/>
  <ColorBoxes04 color={["orange", "green", "blue"]} number={15} title="Hello wonderful world" />
  <ColorBoxes04 number={30} title="Hello wonderful world" />
  </>
  */
);
}

export default App;
