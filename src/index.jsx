// external modules
import React from 'react';
import ReactDOM from 'react-dom';

// internal modules
import '../assets/stylesheets/application.scss';
import App from './components/app';


// A simple example of a functional component

// render an instance of the component in the DOM
ReactDOM.render(<App className="main-frame" />, document.querySelector('.container'));
