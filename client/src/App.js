import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={SearchMovies} />
          <Route exact path="/saved" component={SavedMovies} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/logout" component={Logout} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
