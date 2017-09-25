import React from 'react';

const Gif = (props) => {
  const url = `https://media.giphy.com/media/${props.giphyId}/giphy.gif`;
  return (
    <img
      className="gif"
      src={url}
      onClick={props.handleClick}
    />
  );
};

export default Gif;
