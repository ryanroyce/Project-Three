import React from "react";
// import "./style.css";

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
                <button className="ui button" id="settings-btn">
                    Genre Filter
            </button>
            </div>

            <div className="row">
                <button className="ui button" id="settings-btn">
                    Rating Filter
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