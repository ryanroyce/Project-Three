import React, { Component } from "react";
import Search from "../components/Search/index";
import SearchNav from "../components/SearchNav/index";
// import { MovieCard, MovieBorder } from "../components/Search/index";
// import Nav from "../components/Nav/index"
import API from "../utils/API"
class SearchMovies extends Component {

  state = {
    title: "",
    image: "",
    plot: "",
    year:""
  }

  saveMovie = movieData => {
    API.saveMovie(movieData).then(this.getRapid())
  
      
      .catch(err => console.log(err));
  };


  getRapid() {

    API.getRapidAPI()
      .then(response => {
        this.setState({
          title: response.data.body.Hits[0].Source.Title
        })

        API.getOMDB(response.data.body.Hits[0].Source.Title)
          .then(response => {
            console.log("Poster:" + response.data.Poster)

           if (!typeof response.data.Poster || response.data.Poster  === "N/A") {
             this.setState({
               image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
             })
           }
           else {
             this.setState({
               image: response.data.Poster
             })
           }

           
           this.setState({
             plot: response.data.Plot,
             year: response.data.Year
           })
         })
         .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getRapid();
  }
 
  render() {
    return (
      <div>
        <SearchNav />
       <Search
          Title={this.state.title}
          Image={this.state.image ? this.state.image : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}
          Plot={this.state.plot}
          Year={this.state.year}
          saveMovie={() => this.saveMovie({ 
            title: this.state.title,
            image: this.state.image,
            plot: this.state.plot,
            year:this.state.year})
          }
          nextMovie = {() => this.componentDidMount()}
          ></Search>
      </div>
    );
  }
}

export default SearchMovies;