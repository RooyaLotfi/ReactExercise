import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './component/counter'; // counter is a default export so we do not need curly braces around it. 

// the following lines are where we are rendering a react component
// here we are trying to render counter component into dom 
ReactDOM.render(
  <React.StrictMode> 
    <Counter />
    <Counter />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
); // this line says what do you want to render (<Counter/>) and where you want to render it? document.getElementById('root')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
