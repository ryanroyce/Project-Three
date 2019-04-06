import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import "../LoginForm/style.css";

const genreOption = [
    { key: "Action", text: "Action", value: "Action" },
    { key: "Comedy", text: "Comedy", value: "Comedy" },
    { key: "Drama", text: "Drama", value: "Drama" },
    { key: "Documentary", text: "Documentary", value: "Documentary" },
    { key: "Horror", text: "Horror", value: "Horror" }
]

const providerOption = [
    { key: "AmazonPrimeVideo", text: "AmazonPrimeVideo", value: "AmazonPrimeVideo" },
    { key: "HBO", text: "HBO", value: "HBO" },
    { key: "Hulu", text: "Hulu", value: "Hulu" },
    { key: "Netflix", text: "Netflix", value: "Netflix" }
]

function Settings(props) {
    return (
        <div className="ui grid">
            <div className="row"></div>

            <div className="row">
                <div className="three wide column">
                    <p style={{ color: "white" }} className="genre-heading">
                        &nbsp; &nbsp; &nbsp; Select a genre</p>
                    <Dropdown placeholder='Genre' search selection options={genreOption} onChange={props.onGenre} />
                </div>
            </div>

            <div className="row">
                <div className="three wide column">
                    <p style={{ color: "white" }} className="genre-heading">
                        &nbsp; &nbsp; &nbsp; Provider Filter</p>
                    <Dropdown placeholder='Provider' search selection options={providerOption} />
                </div>
            </div>

            <div className="row">
                <div className="three wide column">
                    <button className={`cogs ${'ui fluid large yellow submit button'}`}
                        type="submit" onClick={props.saveGenre}>Look for Movies!</button>
                </div>
            </div>
        </div>
    );
}
export default Settings;