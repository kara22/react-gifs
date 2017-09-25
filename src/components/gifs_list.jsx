import React from 'react';
import Gif from './gif';

const GifsList = (props) => {


  const gifItems = props.gifs.map((gif) => {
    return <Gif giphyId={gif.giphyId} handleClick={() => props.selectGif(gif.giphyId)} />;
  });

  return(
    <div className="gif-list list-container">
     { gifItems }
    </div>
  );

};


export default GifsList;
