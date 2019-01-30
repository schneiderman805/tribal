import React, { Component } from "react";
import ReactOnRails from 'react-on-rails';
import RegistrationForm from './RegistrationForm';

const axios = require("axios");

export class Registration extends Component {
	constructor() {
		super();
		this.state = {
			user_role: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			password_confirmation: ""
		};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit() {
		event.preventDefault();

		const csrfToken = ReactOnRails.authenticityToken();
		let registrationForm = document.getElementById('Registration-form');
		const data = new FormData(registrationForm);

		const config = {
			headers: {
			  'Content-Type': 'application/x-www-form-urlencoded',
			//   'Accept': 'application/json',
			  'X-CSRF-Token': csrfToken
			}
		  };

		axios.post("/users",data,config)
		.then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
	}

	onClick(event) {
		event.preventDefault();
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	onChange() {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>I am a</h1>
				<button name="user_role" value="Trainee" onClick={this.onClick}>
					Trainee
				</button>
				<button name="user_role" value="Coach" onClick={this.onClick}>
					Coach
				</button>
				<RegistrationForm
					onSubmit={this.onSubmit}
					onChange={this.onChange}
					first_name={this.state.first_name}
					last_name={this.state.last_name}
					email={this.state.email}
					password={this.state.password}
					password_confirmation={this.state.password_confirmation}
				/>
			</div>
		);
	}
}

export default Registration;
