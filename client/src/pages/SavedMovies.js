import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Saved from "../components/Saved";
class SavedMovies extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h2>Saved Movies</h2>
        <Saved />
      </div>
    );
  }
}

export default SavedMovies;