import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Saved from "../components/Saved";
import API from "../utils/API";
// import DeleteBtn from "../components/DeleteBtn";
class SavedMovies extends Component {

  state = {
    movies: [],
    title: "",
    plot: "",
    image: "",
    year: ""
    // synopsis: ""
  };

  componentDidMount() {
    this.loadMovies();
  }
  loadMovies = () => {
    API.getMovies()
      .then(res =>
        this.setState({ movies: res.data, title: "", plot: "", image: "", year: "" })
      )
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
        return (
        <div className="ui grid">
          <div className="row">
            <div className="column">
              <h1 className="film-heading">Saved Movies</h1>
            </div>
          </div>


          <div className="two wide column"></div>
          <div className="twelve wide column">
            <div className="ui four cards">
              {this.state.movies.map(movie => (
                <Saved

                  Title={movie.title}
                  Plot={movie.plot}
                  Image={movie.image}
                  Year={movie.year}
                  DeleteMovie={() => this.deleteMovie(movie._id)}

                >
                
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