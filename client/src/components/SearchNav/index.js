import React from "react";
// import "./style.css";

function SearchNav() {
    return (
        <div className="ui grid">
            <div className="ui row">
                <div className="five wide column"></div>
                <div className="one wide column">
                    <a href="/settings" className="cogs">
                        <i className="huge setting icon"></i>
                    </a>
                </div>
                <div className="four wide column">
                    <h1 className="film-heading">FilmDex</h1>
                </div>
                <div className="one wide column">
                <a href="/saved" className="cogs">
                        <i className="huge video camera icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchNav;