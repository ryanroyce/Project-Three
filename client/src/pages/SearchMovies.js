import React, { Component } from "react";
import Search from "../components/Search/index";
import Nav from "../components/Nav/index"

class SearchMovies extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
       <Search></Search>
      </div>
    );
  }
}

export default SearchMovies;