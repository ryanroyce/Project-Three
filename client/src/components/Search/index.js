import React, { Component } from "react";
import coverArt from '../../images/matrix.png';

class Search extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="sixteen wide column">
          <div className="ui card" id="movie-card">
            <a className="image" href="/search">
              <img src={coverArt} alt="movie-art" />
            </a>
            <div className="content">
              <a className="header" href="/search">The Matrix</a>
              <div className="meta">
                <p>A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ui row">
          <div className="two wide column search-movies">
            <a href="/search" id="thumbs-down">
              <i className="huge thumbs down icon"></i>
            </a>
          </div>

          <div className="two wide column search-movies">
            <a href="/search" id="thumbs-up">
              <i className="huge thumbs up icon"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;