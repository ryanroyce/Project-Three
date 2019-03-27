import React, { Component } from "react";
import LoginForm from "../components/LoginForm/index";

class Login extends Component {
  render() {
    return (
      <div>
        <h1 className="film-heading">Welcome to CinéSearch!
        </h1>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default Login;