import React, { Component } from "react";
import deleteImage from '../../images/delete.png';
import approveImage from '../../images/approve.png';
import coverArt from '../../images/matrix.png';

class Search extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="five wide column search-movies">
          <a href="/search" className="ui medium image" id="action-buttons">
            <img src={deleteImage} alt="delete" />
          </a>
        </div>

        <div className="six wide column">
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
          <a href="/search" className="ui medium image" id="action-buttons">
            <img src={approveImage} alt="delete" />
          </a>
        </div>
      </div>
    );
  }
}

export default Search;