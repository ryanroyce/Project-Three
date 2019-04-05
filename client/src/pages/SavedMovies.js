import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Saved from "../components/Saved";
import API from "../utils/API";

class SavedMovies extends Component {
  state = {
    movies: [],
    title: "",
    plot: "",
    image: "",
    year: ""
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    API.getMovies()
      .then(res => {
        if (Array.isArray(res.data)) {
          this.setState({ movies: res.data })
        } else {
          this.setState({ movies: [] })
        }
      })
      .catch(err => console.log(err));
  };

  deleteMovie = id => {
    API.deleteMovie(id)
      .then(res => this.loadMovies())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />

        <div className="ui middle aligned center aligned grid">
          <div className="row">
            <div className="column">
              <h1 className="saved-heading">Saved Movies</h1>
            </div>
          </div>

          <div className="fourteen wide column">
            <div className="ui three cards">
              {this.state.movies.map(movie => (
                <Saved
                  Title={movie.title}
                  Plot={movie.plot}
                  Image={movie.image}
                  Year={movie.year}
                  DeleteMovie={() => this.deleteMovie(movie._id)}>
                </Saved>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedMovies;