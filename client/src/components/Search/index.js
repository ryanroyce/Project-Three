import React, { Component } from "react";
import deleteImage from '../../images/delete.png';
import approveImage from '../../images/approve.png';
import coverArt from '../../images/matrix.png';

class Search extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="five wide column search-movies">
          <img id="delete-button" className="action-buttons" src={deleteImage} alt="delete" />
          {/* <i className="angle left icon" id="action-buttons"></i> */}
        </div>

        <div className="six wide column">
          {/* <img src={coverArt} alt="movie-art" /> */}
          <div className="ui card" id="movie-card">
            <a className="image" href="/">
              <img src={coverArt} alt="movie-art" />
            </a>
            <div className="content">
              <a className="header" href="/">The Matrix</a>
              <div className="meta">
                <p>A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="five wide column search-movies">
          {/* <i className="angle right icon" id="action-buttons"></i> */}
          <img id="approve-button" className="action-buttons" src={approveImage} alt="delete" />
        </div>
      </div>
    );
  }
}

export default Search;