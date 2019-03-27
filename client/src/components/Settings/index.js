import React from "react";
import {Dropdown} from "semantic-ui-react";

/* Added dropdown menus for genre filter and rating filter*/
 const genreOption = [
     {key: "Action", text: "Action",value: "Action"},
 
    {key: "Comedy", text: "Comedy",value: "Comedy"},
  { key: "Drama", text: "Drama",value: "Drama"},
{
    key: "Horror", 
    text: "Horror",
    value: "Horror"
},
{
    key: "Sci-fi", 
    text: "Sci-fi",
    value: "Sci-fi"
}]
const providerOption = [{
    key: "Hulu", 
    text: "Hulu",
    value: "Hulu"
},
{
   key: "Netflix", 
   text: "Netflix",
   value: "Netflix"
}
]
function Settings() {
    return (
        <div className="ui grid">
            <div className="row">
                <button className="ui button" id="settings-btn">
                    Change Email
            </button>
            </div>
            {/* Need to get 2 working dropdown menus for genre filter and rating filter*/}
            {/* They are not part of current MVP */}

            <div className="row">
                <Dropdown placeholder = "Genre" search selection options = {genreOption}/>
                <button className="ui button" id="settings-btn">
                    Genre Filter
            </button>
            </div>

            <div className="row">
            <Dropdown placeholder = "Provider" search selection options = {providerOption}/>
                <button className="ui button" id="settings-btn">
                    Provider Filter
            </button>
            </div>

            <div className="row">
            <button className="ui button" id="settings-btn">
                Delete Account
            </button>
            </div>

            <div className="row">
            <button className="ui button" id="settings-btn">
                Logout
            </button>
            </div>
        </div>
    );
}
export default Settings;