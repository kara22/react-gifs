// external modules
import React from 'react';
import ReactDOM from 'react-dom';

// internal modules
import '../assets/stylesheets/application.scss';
import Gif from './components/gif';
import GifsList from './components/gifs_list';


// A simple example of a functional component

// render an instance of the component in the DOM
ReactDOM.render(<GifsList gifs={[ { giphyId: "3oz8xKJjyUuL1Ep36E" }, { giphyId: "3oz8xKJjyUuL1Ep36E" } ]} />, document.querySelector('.container'));
