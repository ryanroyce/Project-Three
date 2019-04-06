import React, { Component } from "react";
import LoginForm from "../components/LoginForm/index";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
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

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('/users/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log(error);
      })
  }
  
  render() {
    return (
      <div>
        <LoginForm updateUser={this.updateUser}></LoginForm>
      </div>
    );
  }
}

export default Login;