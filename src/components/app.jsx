import React, { Component } from 'react';
import Gif from './gif';
import GifsList from './gifs_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: null,
      value: ''
    };
  }
  // fonction qui permet d'ajouter le gif principal au clic dans la liste
  selectGif = (giphyId) => {
    this.setState({
      selectedGif: giphyId
    });
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    console.log(event.target.value);
  }


  render() {
    return(
      <div>
        <SearchBar handleChange={this.handleChange} />
        <Gif giphyId={this.state.selectedGif} />
        <GifsList
          selectGif={this.selectGif}
          className="gif-list"
          gifs={[ { giphyId: "3oz8xKJjyUuL1Ep36E" }, { giphyId: "xT9Igi0JtwZaMKkEla" } ]}
         />
      </div>

    );
  }
}


export default App;
