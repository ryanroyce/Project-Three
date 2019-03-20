import React from "react";

function LoginForm() {
  return (
    <div>
      <div class="ui middle aligned center aligned grid">
        <div class="six wide column">
          <h2 class="ui black image header">

            <div class="content">
              Log-in to your account
            </div>
          </h2>

          <form class="ui large form">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>

              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>

              <div class="ui fluid large grey submit button">Login</div>
            </div>

            <div class="ui error message"></div>
          </form>

          <div class="ui message">
            New to us? <a href="/login">Sign Up</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;