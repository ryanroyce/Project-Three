import React from "react";

function Nav() {
  return (
    
    <div className="ui inverted menu">
      <a className="item" href="search">
        Search Movies
      </a>
      <a className="item" href="saved">
        Saved Movies
      </a>
      <a className="item" href="settings">
        Settings
      </a>
      <a className="item" href="logout">
        Logout
      </a>
    </div>
  );
}

export default Nav;
