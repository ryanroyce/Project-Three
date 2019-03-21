import React, { Component } from "react";
import LoginForm from "../components/LoginForm/index";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to FilmDex!</h1>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default Login;