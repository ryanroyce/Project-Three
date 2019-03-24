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
            
            <button class="ui button yellow create_btn" type="button" id="test">Sign Up</button>
            {/* <a href="/">Sign Up</a> */}
          </div>
       


















          <div class="ui modal test">
  <i class="close icon"></i>
  <div class="header">
    Sign Up for an account
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img src="https://semantic-ui.com/images/avatar2/large/rachel.png" alt="user-pic" />
    </div>
    <div class="description">
      <div class="ui header">We've auto-chosen a profile image for you.</div>
      <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank" rel="noopener noreferrer">gravatar</a> image associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Nope
    </div>
    <div class="ui positive right labeled icon button">
      Yep, that's me
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>
        </div>
      </div>
  );
}

export default LoginForm;