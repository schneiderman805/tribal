import React from "react";
import AllSessions from "./AllSessions";
import { NavLink, Link } from 'react-router-dom'
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			available_sessions: props.sessions.available_sessions,
			booked_sessions: props.sessions.booked_sessions,
			full_sessions: props.sessions.full_sessions,
			user: props.sessions.user
		};
	}

	componentWillMount() {
		this.setState({
			available_sessions: this.props.sessions.available_sessions,
			booked_sessions: this.props.sessions.booked_sessions,
			full_sessions: this.props.sessions.full_sessions,
			user: this.props.sessions.user
		})
	}

	render() {
		return (
			<div>
				<NavLink to='/register'>
					Sign up
				</NavLink>
				<h1>Hello, {this.state.user ? this.state.user.first_name : 'Stranger'}!</h1>
				<div id='available'>
					<h1>Available sessions</h1>
					<AllSessions sessionlist={this.state.available_sessions} />
					<br />
				</div>
				<div id='booked'>
					<h1>Booked sessions</h1>
					<AllSessions sessionlist={this.state.booked_sessions} />
					<br />
				</div>
				<div id='full'>
					<h1>Full sessions</h1>
					<AllSessions sessionlist={this.state.full_sessions} />
				</div>
			</div>
		);
	}
}
