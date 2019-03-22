import React from "react";
import coverArt from '../../images/matrix.png';


function Saved() {
    return (
        <div className="ui grid">

            <div className="ui four column doubling stackable grid container">
                <div className="column">
                    <img src={coverArt} alt="saved-movie" />
                    <p>The Matrix, 1999</p>
                    <p>A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
                </div>
                <div className="column">
                    <img src={coverArt} alt="saved-movie" />
                    <p>The Matrix, 1999</p>
                    <p>A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
                </div>
                <div className="column">
                    <img src={coverArt} alt="saved-movie" />
                    <p>The Matrix, 1999</p>
                    <p>A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
                </div>
                <div className="column">
                    <img src={coverArt} alt="saved-movie" />
                    <p>The Matrix, 1999</p>
                    <p>A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
                </div>
            </div>
            {/* <div className="ui raised very padded text container segment" id="saved-box">
            <div className="ui raised small image" >
                    <img src={coverArt} alt="saved-movie" id="saved-img" />
                </div>
                <div className="saved-text">The Matrix</div>
                <div className="saved-text">A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</div>
                <div className="saved-text">1999</div>
            </div> */}

            {/* <div className="item">
                <div className="ui raised small image">
                    <img src={coverArt} alt="saved-movie" />
                </div>
                <div className="content">
                    <div className="header">The Matrix</div>
                    <div className="meta">
                        <p className="summary">A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.</p>
                        <p className="year">1999</p>
                    </div>
                    <div className="description">
                        <p></p>
                    </div>
                </div>
            </div> */}

        </div>
    );
}

export default Saved;
