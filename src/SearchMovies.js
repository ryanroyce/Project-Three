import React, { Component } from "react";
import deleteImage from './images/delete.png';
import approveImage from './images/approve.png';
import coverArt from './images/matrix.png';
class SearchMovies extends Component {
  render() {
    return (
      <div>
        <h2>Search Movies</h2>
        <img id="delete-button" className="action-buttons" src={deleteImage} alt="delete" />
       
        <div className="movie">
        <img src={coverArt} alt="delete" />
        </div>
       
        <img id="approve-button" className="action-buttons" src={approveImage} alt="delete" />
      </div>
    );
  }
}

export default SearchMovies;