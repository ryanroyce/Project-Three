import React from "react";

function SearchNav() {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="ui row">
                <div className="three wide column">
                    <a href="/settings" className="cogs">
                        <i className={`huge setting icon ${'setting'}`}></i>
                    </a>
                 </div>
                 <div className="nine wide column">
                    <h1 className="cine-heading">CinéSearch</h1>
                 </div>
                 <div className="three wide column">
                    <a href="/saved" className="cogs">
                        <i className={`huge video camera icon ${'video'}`}></i>
                    </a>
                 </div>
             </div>
         </div>
    );
}

export default SearchNav;