import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Settings from "../components/Settings/index"
import API from "../utils/API";
// import PopupExampleClick from "../components/Modal/index"

class SettingsPage extends Component {

  state = {
    genre: ""
  }

  
 

  onGenre = (event, value) => {
    //grab string value
    console.log(value);
    let genreName = event.target.textContent;
    console.log(genreName);
    this.setState({ genre: event.target.textContent})
    //pass back to rapid controller through genre route
    API.getGenre(this.state.genre)
   }

   saveGenre = (genreName) => {
     console.log('I am log inside saveGenre')
    API.saveGenre(genreName).then(API.getRapidAPI())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Settings saveGenre={this.saveGenre} onGenre={this.onGenre} />  
        {/* <PopupExampleClick /> */}
      </div>
    );
  }
}

export default SettingsPage;