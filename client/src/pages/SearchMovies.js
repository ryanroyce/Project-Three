import React, { Component } from "react";
import Search from "../components/Search/index";
import SearchNav from "../components/SearchNav/index";

class SearchMovies extends Component {
  render() {
    return (
      <div>
        <SearchNav />
       <Search></Search>
      </div>
    );
  }
}

export default SearchMovies;