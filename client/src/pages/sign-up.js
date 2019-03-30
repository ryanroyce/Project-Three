import React, { Component } from 'react'
import axios from 'axios'
import API from '../utils/API'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	checkUser(){
		API.checkUser({
			username: this.state.username
		})
		.then(res => {
			if(res.data)
			window.location.href="/";
			else
			console.log("ALREADY A USERNAME");
		})
		.catch(err => console.log(err))
	}

	loadUser(){
		window.location.href="/";
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		if (this.state.username && this.state.password) {
			API.saveUser({
			  username: this.state.username,
			  password: this.state.password,
			})
			  .then(res => this.loadUser())
			  .catch(err => console.log(err));
		  }
	}

	

render() {
	return (
		<div className="ui middle aligned center aligned grid" id="body">
		<div className="eight wide column" id="sign-up-column">
		<h4 className="ui black image header">
			 <div className="sign-up-heading">
               Sign up
             </div>
           </h4>
		<div className="SignupForm">
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
      
          <button className="ui fluid large yellow submit button"
              onClick={this.handleSubmit}
              type="submit">Sign Up!</button>
          </div>

          <div className="ui error message"></div>
        </form>
        </div>
      </div>
	  </div>
	)
}
}

export default Signup


