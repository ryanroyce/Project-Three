import React from "react";
import {Dropdown} from "semantic-ui-react";
// import { render } from "react-dom";
import { Button, Modal} from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
// import PopupExampleClick from "../Modal"



/* Added dropdown menus for genre filter*/
 const genreOption = [
     {key: "Action", text: "Action",value: "Action"},
     {key: "Comedy", text: "Comedy",value: "Comedy"},
     { key: "Drama", text: "Drama",value: "Drama"},
     {key: "Documentary", text: "Documentary",value: "Documentary"},
     {key: "Horror", text: "Horror",value: "Horror"}
]

/* Added dropdown menus for provider filter*/
const providerOption = [
    {key: "AmazonPrimeVideo", text: "AmazonPrimeVideo",value: "AmazonPrimeVideo"},
    {key: "HBO", text: "HBO",value: "HBO"},
    {key: "Hulu", text: "Hulu",value: "Hulu"},
    {key: "Netflix", text: "Netflix",value: "Netflix"}
]

var username = sessionStorage.getItem(username);
  console.log(username);

function Settings() {
    return (
        <div className="ui grid">
            <div className="row">
                {/* <button className="ui button" id="settings-btn">
                    Change Email
            </button> */}
            </div>
            {/* Need to get 2 working dropdown menus for genre filter and rating filter*/}
            {/* They are not part of current MVP */}
            
           
            
            <div className="row">
            {/* <div className="col-md-6">
                <button className="ui button" id="settings-btn">
                Select a genre &nbsp; &nbsp; &nbsp;
            </button>
            </div> */}
            <div className="col-md-6">
            <p style = {{color : "white"}} className= "genre-heading">
            &nbsp; &nbsp; &nbsp; Select a genre
           </p>
            {/* <Dropdown placeholder='Genre' multiple selection options={genreOption} /> */}
            {/* <Dropdown placeholder='Genre' clearable options={genreOption} selection /> */}
            <Dropdown placeholder='Genre' search selection options={genreOption} />
            </div>
            </div>
            <div className="row">
            {/* <div className="col-md-6">
                <button className="ui button" id="settings-btn">
                    Provider Filter
            </button>
            </div>
            <div className="col-md-6">
              <Dropdown placeholder='Provider' multiple selection options={providerOption} />
             </div> */}
             {/* <div className="col-md-6">
               
           </div> */}
           <div className="col-md-6">
           <p style = {{color : "white"}} className= "genre-heading"> 
           &nbsp; &nbsp; &nbsp; Provider Filter
           </p>
             {/* <Dropdown placeholder='Provider' multiple selection options={providerOption} /> */}
             {/* <Dropdown placeholder='Provider' clearable options={providerOption} selection /> */}
             <Dropdown placeholder='Provider' search selection options={providerOption} />
            </div>
           </div>
            

            <div className="row">
            <div className="col-md-6">
            <Modal
    trigger={<Button className="ui yellow button" style = {{width : "195px"}}>Delete Account</Button>}
    header='Are you sure you want to delete your account!'
    // content='Call Benjamin regarding the reports.'
    actions={[ { key: 'no', content: 'No', positive: false },{ key: 'yes', content: 'Yes', positive: true }]}
  />
            </div></div>
            <div className="row">
            <div className="col-md-6">
             
  </div>
 
            </div>
        </div>
    );
}
export default Settings;