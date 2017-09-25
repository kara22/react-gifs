import React from 'react';

const SearchBar = (props) => {
  return <input className="form-control" placeholder="Search a gif ;)" onChange={props.handleChange} />;
};

export default SearchBar;
