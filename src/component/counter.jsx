import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {
    //instead of hardcoding the hello world we want to render it dynamically: 
    // so in the counter class we need to add a property called state and set it to an object 


    render() { 
        return (<React.Fragment><h1> Hello World</h1> <h2>how are you</h2></React.Fragment>);
    }
}

 
export default Counter;
 
