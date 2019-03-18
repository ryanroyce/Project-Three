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

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <NavLink exact to="/"><h1>FilmDex</h1></NavLink>
                    <ul className="header">
                        <li><NavLink exact to="/">Search Movies</NavLink></li>
                        <li><NavLink to="/savedmovies">Saved Movies</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><NavLink to="/logout">Logout</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={SearchMovies} />
                        <Route path="/savedmovies" component={SavedMovies} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/logout" component={Logout} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;