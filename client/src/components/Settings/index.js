import React from "react";
import {Dropdown} from "semantic-ui-react";
// import { render } from "react-dom";
import { Button, Modal, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
// import PopupExampleClick from "../Modal"



/* Added dropdown menus for genre filter*/
 const genreOption = [
     {key: "Action", text: "Action",value: "Action"},
     {key: "Comedy", text: "Comedy",value: "Comedy"},
     { key: "Drama", text: "Drama",value: "Drama"},
     {key: "Horror", text: "Horror",value: "Horror"},
     {key: "Sci-fi", text: "Sci-fi",value: "Sci-fi"}
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
            <div className="col-md-6">
                <button className="ui button" id="settings-btn">
                    Genre Filter &nbsp; &nbsp; &nbsp;
            </button>
            </div>
            <div className="col-md-6">
            <Dropdown placeholder='Genre' multiple selection options={genreOption} />
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <button className="ui button" id="settings-btn">
                    Provider Filter
            </button>
            </div>
            <div className="col-md-6">
              <Dropdown placeholder='Provider' multiple selection options={providerOption} />
             </div>
            </div>

            <div className="row">
            {/* <button className="ui button" id="settings-btn">
                Delete Account
            </button> */}
            <Modal trigger={<Button>Delete Account</Button>}>
    <Modal.Header>Delete Account?</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
      <Modal.Description>
        <Header>Are you sure you want to delete your account?</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
        <Modal.Actions>
      <Button primary>
        Yes
      </Button>
    </Modal.Actions>
  </Modal>
            </div>
        </div>
    );
}
export default Settings;