import React, { Component } from "react";
import deleteImage from '../../images/delete.png';
import approveImage from '../../images/approve.png';
import coverArt from '../../images/matrix.png';
class Search extends Component {
  render() {
    return (
      <div>
        <div className="ui equal width grid">
          <div className="column search-movies">
            <img id="delete-button" className="action-buttons" src={deleteImage} alt="delete" />
          </div>
          <div className="column search-movies">
            <div className="movie">
              <img src={coverArt} alt="delete" />
            </div>
          </div>
          <div className="column search-movies">
            <img id="approve-button" className="action-buttons" src={approveImage} alt="delete" />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Search;