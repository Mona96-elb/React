import React from 'react'

//Making Hello World into a component
//https://react.dev/reference/react/createElement

function HelloWorld() {

  const myName = "Harry";

  return (
    React.createElement(
    'h1',
     {id: 'my-heading'}, 'text before span tag: ',
     React.createElement(
       'span',
       null,
       `Hello from ${myName}`,
       React.createElement('em', null, 'Wonderful'),
       ' World'
     ),
     ' :text after span tag',
   )
  )
}

export default HelloWorld