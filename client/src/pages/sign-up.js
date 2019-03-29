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

		//request to server to add a new username/password
		// axios.post('/users/sign-up', {
		// 	username: this.state.username,
		// 	password: this.state.password
		// })
		// 	.then(response => {
		// 		console.log(response)
		// 		if (!response.data.errmsg) {
		// 			console.log('successful signup')
		// 			this.setState({ //redirect to login page
		// 				redirectTo: '/login'
		// 			})
		// 		} else {
		// 			console.log('username already taken')
		// 		}
		// 	}).catch(error => {
		// 		console.log('signup error: ')
		// 		console.log(error)
		// 	})
	}

	

render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
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
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)
}
}

export default Signup


