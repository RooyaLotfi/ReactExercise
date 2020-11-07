import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Counter extends Component {
    //instead of hardcoding the hello world we want to render it dynamically: 
    // so in the counter class we need to add a property called state and set it to an object 
    // state is a special property in react component. It is any data that this component needs. for example
    // here state has a property called count and we set it to zero
    // so this state object includes any data this component needs
    state = {
        count:0,
        imgURL: 'https://picsum.photos/200'
    };

    style = {
        fontSize : 50,
        fontWeight: 10
    };
    

    // in this span element we want to render something dynamically: between curly braces you can add any valid javascript expressions if //
    //we want to render the value of count property. An expression is something that produces some values //
    render() { 
        return (
        <React.Fragment>
        <h1> Hello World</h1> 
        <img src = {this.state.imgURL} alt =""/>

        <span>{this.state.count}</span>
        <h1>rendering by calling a function:</h1>
        <span>{this.formatCount()}</span>
        <button>incremgent</button>
        <h2>how are you</h2>
        <button style = {this.style}>this is a button with a new style</button>
        </React.Fragment>
        );
    }

    formatCount(){
        // since this.state.count has been repeated a couple of times we can use object destructuring:
        const {count} = this.state; // this means count = this.state.count
        const value = <h3>zero</h3>;
        return count === 0 ? value: count;
    }
}

 
export default Counter;
 
