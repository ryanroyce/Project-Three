import React, { Component } from 'react';
import API from '../../utils/API';
import { Button, Modal } from 'semantic-ui-react'

class SignUpForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	loadUser() {
		window.location.href = "/";
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
				.then(res => {
					console.log(res)
					if (res.data.error) {
						alert(res.data.error)
					}
				})
				.catch(err => console.log(err));
		}
	}
	// state of sign up modal
	state = { open: false }
	open = () => this.setState({ open: true })
	close = () => this.setState({ open: false })

	render() {
		return (
			<div className="ui middle aligned center aligned grid" id="body">
				<div className="eight wide column">
					<h1 className="film-heading">CinéSearch</h1>
					<span className="ui black image header">
						<div className="content">
							Sign up for an account!
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
										onChange={this.handleChange}/>
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
										onChange={this.handleChange}/>
								</div>
							</div>

							<Modal className="eight wide column" trigger={<Button className="ui fluid large yellow submit button" type="submit"
								onClick={(e) => {
									this.open(e);
									this.handleSubmit(e);
								}}>Sign Up!</Button>}>
								<Modal.Header className="modal-content">Sign Up Confirmed!</Modal.Header>
								<Modal.Content>
									<Modal.Description className="modal-content">
										<p>Please login with your created Username & Password</p>
									</Modal.Description>
								</Modal.Content>
								<Modal.Actions>
									<Button onClick={this.loadUser}>Okay!</Button>
								</Modal.Actions>
							</Modal>
						</div>

						<div className="ui error message"></div>
					</form>
				</div>
			</div>
		)
	}
}

export default SignUpForm


