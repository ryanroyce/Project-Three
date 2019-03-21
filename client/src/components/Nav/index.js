import React from "react";

function Nav() {
  return (
    
    <div class="ui inverted menu">
      <a class="item" href="search">
        Search Movies
      </a>
      <a class="item" href="saved">
        Saved Movies
      </a>
      <a class="item" href="settings">
        Settings
      </a>
      <a class="item" href="logout">
        Logout
      </a>
    </div>
  );
}

export default Nav;
