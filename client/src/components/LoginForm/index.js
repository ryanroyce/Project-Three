import React from "react";
import "./style.css";
function LoginForm() {
  return (
      <div className="ui middle aligned center aligned grid" id="body">
        <div className="six wide column">
          <h2 className="ui black image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          {/* login form */}
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <a href="/search">
              <div className="ui fluid large grey submit button">Login</div>
              </a>
            </div>
            <div className="ui error message"></div>
          </form>
          <div className="ui message">
          <i className="us flag"></i>
            New to us? 
            
            <button className="ui button yellow create_btn" type="button" id="signup">Sign Up</button>
          </div>
       
          {/* signup modal */}
          <div className="ui modal signup-modal">
            <i className="close icon"></i>
            <div className="header"> Sign Up for an account</div>
            <div className="image content">
              <div className="description">
                {/* sign up form */}
                <form className="ui large form">
                  <div className="ui stacked segment">
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input type="text" name="email" placeholder="E-mail address" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input type="password" name="password" placeholder="Password" />
                      </div>
                    </div>
              
                    <a href="/">
                    <div className="ui fluid large grey submit button">Sign Up</div>
                    </a>
                  </div>
                    <div className="ui error message"></div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
  );
}
export default LoginForm;