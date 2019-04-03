import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import "./style.css";
import API from "../../utils/API";

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit BOI')
    sessionStorage.setItem("username", this.state.username)

    if (this.state.username && this.state.password) {
      API.getUser({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          console.log("output:" + res);
          if (res.data) {
            this.setState({ redirectTo: "/settings" })
            console.log("inside output: " + res);
          } else { 
            alert("THIS NOT GOOD")
            console.log("login machine broke")
          this.setState({ redirectTo: null });
        }
        })
        .catch(err => console.log(err));
        
    } else if (!this.state.username || !this.state.password) {
      alert("Please Enter a Username or Password.")
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="ui middle aligned center aligned grid" id="body">
          <div className="eight wide column">
            <h1 className="film-heading">CinéSearch
        </h1>
            <span className="ui black image header">
              <div className="content">
                Log-in to your account
             </div>
            </span>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input className="form-input"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input className="form-input"
                      placeholder="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <button className="ui fluid large grey submit button"
                  onClick={this.handleSubmit}
                  type="submit">Login</button>
              </div>

              <div className="ui error message"></div>

              <div className="ui message">
                New to us?
            <a href="/signup">
                  <button className="ui button yellow create_btn" type="button" id="signup">Sign Up</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default LoginForm;