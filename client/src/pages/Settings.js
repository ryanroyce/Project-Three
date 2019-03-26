import React, { Component } from "react";
import Nav from "../components/Nav/index"
import Settings from "../components/Settings/index"

class SettingsPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Settings />  
        
      </div>
    );
  }
}

export default SettingsPage;