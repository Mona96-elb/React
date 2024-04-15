import React from 'react'

export class LifeCycleLogger02 extends React.Component {
  
        //Each component has several “lifecycle methods” that you can override to run code at particular times in the process.
      //This allow proper initialization and cleanup of DOM components
      //https://reactjs.org/docs/react-component.html
      //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


      componentDidMount() {
        //https://reactjs.org/docs/react-component.html#componentdidmount
        //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
        //Initialization that requires DOM nodes should go here. 
        //If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

        console.log('componentDidMount');
      }


      componentWillUnmount() {
        //https://reactjs.org/docs/react-component.html#componentwillunmount
        //componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
        //Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, 
        //or cleaning up any subscriptions that were created in componentDidMount().

        console.log('componentWillUnmount');
      }


      componentDidUpdate(prevProps, prevState, snapshot) {
        //https://reactjs.org/docs/react-component.html#componentdidupdate
        //componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
        //Use this as an opportunity to operate on the DOM when the component has been updated. 

        console.log(
          'componentDidUpdate     ',
          prevProps,
          prevState,
          snapshot,
        );
      }


      getSnapshotBeforeUpdate(prevProps, prevState) {
        //https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
        //Before the component is updated (e.g., as a result of setState()), you can use getSnapshotBeforeUpdate(). 
        //This method receives the previous properties and state as arguments. And it can return a “snapshot” value, 
        //which is any value you want to pass over to the next lifecycle method called componentDidUpdate().

        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return 'hello';
      }


      shouldComponentUpdate(newProps, newState) {
        //https://reactjs.org/docs/react-component.html#shouldcomponentupdate
        //Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. 
        //The default behavior is to re-render on every state change, 
        //and in the vast majority of cases you should rely on the default behavior.
        //This method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. 
        //Currently, if shouldComponentUpdate() returns false, then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. 

        console.log('shouldComponentUpdate  ', newProps, newState);
        return true;
      }

  
  render() {
    return;
  }
}


