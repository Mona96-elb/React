import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld01 from './components/01-hello-world';


const root = ReactDOM.createRoot(document.getElementById('root'));

//from the React template

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Using React createElement
//https://react.dev/reference/react/createElement
/*
root.render(React.createElement(
  'h1',
   {id: 'my-heading'}, 'text before span tag: ',
   React.createElement(
     'span',
     null,
     'Hello ',
     React.createElement('em', null, 'Wonderful'),
     ' World'
   ),
   ' :text after span tag',
 ));
*/

//Using React function component
//https://react.dev/reference/react-dom/client/createRoot#root-render
//root.render(HelloWorld01());
//root.render([HelloWorld01(), HelloWorld01(), HelloWorld01()]);

//Using JSX syntax
//https://react.dev/learn/writing-markup-with-jsx
//root.render(<HelloWorld01/>);
/*
root.render(
<>
  <HelloWorld01/>
  <HelloWorld01/>
  <HelloWorld01/>
</>);
*/

/*
//Every html tag has its jsx correspondant
//https://react.dev/learn/writing-markup-with-jsx
//root.render(<HelloWorld01/>);
root.render(
  <><h1>3 times HelloWorld component</h1>
    <p>
    <HelloWorld01/>
    <HelloWorld01/>
    <HelloWorld01/>
    </p>
  </>);
  */
  