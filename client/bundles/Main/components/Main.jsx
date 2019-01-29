import React from "react";
import AllSessions from "./AllSessions";
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			available_sessions: props.available_sessions,
			booked_sessions: props.booked_sessions,
			full_sessions: props.full_sessions
		};
	}

	render() {
		return (
			<div>
				<h1>Available sessions</h1>
				<AllSessions sessionlist={this.state.available_sessions} />
				<br />
				<h1>Booked sessions</h1>
				<AllSessions sessionlist={this.state.booked_sessions} />
				<br />
				<h1>Full sessions</h1>
				<AllSessions sessionlist={this.state.full_sessions} />
			</div>
		);
	}
}
