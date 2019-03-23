import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Saved from "../components/Saved";
class SavedMovies extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Saved Movies</h1>
        <Saved />
      </div>
    );
  }
}

export default SavedMovies;