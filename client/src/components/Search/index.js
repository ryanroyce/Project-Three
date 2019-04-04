// import React, { Component } from "react";
import React from "react";
// import coverArt from '../../images/matrix.png';
const Search = props => {
  // render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="sixteen wide column">
          <div className="ui card" id="movie-card">
            <a className="image" href="/search">
              <img src={props.Image} alt="movie-art" />
            </a>
            <div className="content">
              <a className="header" href="/search">{props.Title} ({props.Year})</a>
              <div className="meta">
                <p>{props.Plot}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ui row">
          <div className="seven wide column search-movies">
          
          <i id = "thumbs-down" onClick={props.nextMovie} className="huge thumbs down icon"></i>
            
          </div>
          <div className="seven wide column search-movies">
   
              <i id="thumbs-up" className="huge thumbs up icon"  onClick={props.saveMovie} ></i>
            
          </div>
        </div>
      </div>
    );
  }
// }
export default Search;
// Comment