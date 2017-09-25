import React from 'react';
import Gif from './gif';

const GifsList = (props) => {

  return(
    <div>
     {props.gifs.map((gif) => {
           return <Gif giphyId={gif.giphyId} />;
         })}
  </div>

    );

};


export default GifsList;
