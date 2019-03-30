import React from "react";
// import DeleteBtn from "../DeleteBtn"
// import coverArt from '../../images/matrix.png';
// import "../LoginForm/style.css";

const Saved = props => {
    return (
        <div className="card">
        <div className="image">
            <img src={props.Image} alt="movie-art" />
        </div>
        <div className="image">
        </div>
        <div className="content">
            <a className="header" href="/saved">{props.Title} ({props.Year})</a>
            <div className="meta">
            <button className="" id="delete-button" onClick = {props.DeleteMovie}> ✗</button> 
            
                <p>{props.Plot}</p>
            </div>
        </div>
        <div className="extra">
            Rating: 
            <div className="ui star rating" data-rating="0"></div>         
        </div>
        </div> 
    );
}

export default Saved;





