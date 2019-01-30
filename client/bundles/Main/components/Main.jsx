import React from "react";
import AllSessions from "./AllSessions";
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			available_sessions: props.sessions.available_sessions,
			booked_sessions: props.sessions.booked_sessions,
			full_sessions: props.sessions.full_sessions
		};
	}

	render() {
		return (
			<div>
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
