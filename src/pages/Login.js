import React, { Component } from "react";
import LoginForm from "../components/LoginForm/index";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default Login;