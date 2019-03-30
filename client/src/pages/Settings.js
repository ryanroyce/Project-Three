import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Settings from "../components/Settings/index"
// import PopupExampleClick from "../components/Modal/index"

class SettingsPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Settings />  
        {/* <PopupExampleClick /> */}
      </div>
    );
  }
}

export default SettingsPage;