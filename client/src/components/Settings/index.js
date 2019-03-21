import React from "react";
// import "./style.css";

function Settings() {
    return (
        <div className="ui grid">
           
            <div className="one wide column">
            </div>
            <button className="ui button">
                Change Email
            </button>
            
            {/* Need to get 2 working dropdown menus for genre filter and rating filter*/}
            {/* They are not part of current MVP */}
            <button className="ui button">
                Delete Account
            </button>
            </div>
        // </div>

    );
}

export default Settings;