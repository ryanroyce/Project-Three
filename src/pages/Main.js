import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import SearchMovies from "./SearchMovies";
import SavedMovies from "./SavedMovies";
import Settings from "./Settings";
import Logout from "./Logout";
import Login from "./Login";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <NavLink exact to="/"><h1>FilmDex</h1></NavLink>
                    <ul className="header">
                        <li><NavLink exact to="/">Login</NavLink></li>
                        <li><NavLink to="/search">Search Movies</NavLink></li>
                        <li><NavLink to="/saved">Saved Movies</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><NavLink to="/logout">Logout</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Login} />
                        <Route path="/search" component={SearchMovies} />
                        <Route path="/saved" component={SavedMovies} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/logout" component={Logout} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;