import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import 'semantic-ui-css/semantic.min.css';
import SearchMovies from "./pages/SearchMovies";
import SavedMovies from "./pages/SavedMovies";
import Settings from "./pages/Settings";
// import Logout from "./pages/Logout";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/SignUp"
import Success from "./pages/Success";
import LoginForm from "../src/components/login-form";

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
            <Route path="/login" render={() => <LoginForm updateUser={Success.updateUser} />} />
            <Route path="/signup" render={() => <Signup />} />
            {/* <Route exact path="/" component={Login} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
