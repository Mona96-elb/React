import logo from './logo.svg';
import './App.css';
import { LifeCycle01 } from './components/01-lifecycle-class';
import { ClassInheritance03 } from './components/03-class-inheritance';
import { TimeTickerFunc04 } from './components/04-lifecycle-func';
import { TimeTickerFunc05, TimeTickerClass05, TimeTickerClass05a } from './components/05-using-lifecycle';
import { ReadWebApiFunc06, ReadWebApiClass06} from './components/06-using-lifecycle-async';

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

function App() {
  return (
  //Override a Lifecycle event
  /*
  <>
  <LifeCycle01/>
  </>
  */

  //Using inheritance to make a parent class that logs lifecycles
  /*
  <>
  <ClassInheritance03/>
  </>
  */

  //Lifecyle in functional component
  /*
  <>
  <TimeTickerFunc04/>
  </>
  */

  //Using Lifecyles example
  /*
  <>
  <TimeTickerFunc05/>
  <TimeTickerClass05/>
  <TimeTickerClass05a/>
  </>
  */

  //Using Lifecyles async example
  
  <>
  <ReadWebApiFunc06/>
  <ReadWebApiClass06/> 
  </>
  
  );
}

export default App;
