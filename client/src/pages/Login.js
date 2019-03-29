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

updateUser (userObject) {
  this.setState(userObject)
}


getUser() {
  axios.get('/user/').then(response => {
    console.log('Get user response: ')
    console.log(response.data)
    if (response.data.user) {
      console.log('Get User: There is a user saved in the server session: ')

      this.setState({
        loggedIn: true,
        username: response.data.user.username
      })
    } else {
      console.log('Get user: no user');
      this.setState({
        loggedIn: false,
        username: null
      })
    }
  })
}


handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios
        .post('/users/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
}
  render() {
    return (
      <div>
        {/* <h1 className="film-heading">Welcome to CinéSearch!
        </h1> */}
        <LoginForm updateUser={this.updateUser}></LoginForm>
      </div>
    );
  }
}

export default Login;