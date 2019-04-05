import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import 'semantic-ui-css/semantic.min.css';
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/SignUp"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/search" component={SearchMovies} />
            <Route exact path="/saved" component={SavedMovies} />
            <Route exact path="/settings" component={Settings} />
            <Route path="/signup" render={() => <Signup />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
