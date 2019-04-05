import React from "react";
import { Rating } from 'semantic-ui-react'

const Saved = props => {
    return (
        <div className="card">
        <div className="image">
            <img src={props.Image} alt="movie-art" />
        </div>
        <div className="image">
        </div>
        <div className="content" id="saved-cards">
            <a className="header" href="/saved">{props.Title} ({props.Year})</a>
            <div className="meta">
            
                <p>{props.Plot}</p>
            </div>
        </div>

        <div className="extra" id="saved-extras">
            Rating:
            <Rating className="rating" icon='star' defaultRating={0} maxRating={4} />
            {/* <div className="ui star rating" data-rating="0"></div>   */}
            <i className="trash alternate outline icon" id="delete-button" onClick = {props.DeleteMovie}></i>
        </div>
        </div> 
    );
}

export default Saved;





