import React from "react";
import {Dropdown} from "semantic-ui-react";

/* Added dropdown menus for genre filter and rating filter*/
 const genreOption = [{
     key: "Action", 
     text: "Action",
     value: "Action"
 },
 {
    key: "Adventure", 
    text: "Adventure",
    value: "Adventure"
},
{
    key: "Comedy", 
    text: "Comedy",
    value: "Comedy"
}]
const ratingOption = [{
    key: "PG", 
    text: "PG-Parental Guidance Suggested",
    value: "PG"
},
{
   key: "PG13", 
   text: "PG13-Parents Strongly Cautioned",
   value: "PG13"
},
{
   key: "G", 
   text: "G-General Audiences",
   value: "G"
}]
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
            <Dropdown placeholder = "Rating" search selection options = {ratingOption}/>
                <button className="ui button" id="settings-btn">
                    Rating Filter
            </button>
            </div>


            {/* <div className="row"> */}
            <button className="ui button" id="settings-btn">
                Delete Account
            </button>
            {/* </div> */}
        </div>
        // </div>

    );
}

export default Settings;