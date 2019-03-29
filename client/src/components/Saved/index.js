import React from "react";
// import DeleteBtn from "../DeleteBtn"
// import coverArt from '../../images/matrix.png';

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
                <p>{props.Plot}</p>
            </div>
            <button style = {{float: "right"}} onClick = {props.DeleteMovie}> ✗</button> 
        </div>
        <div className="extra">
            Rating: 
            <div className="ui star rating" data-rating="0"></div>
     
         
        </div>
        </div> 
    );
}

export default Saved;





