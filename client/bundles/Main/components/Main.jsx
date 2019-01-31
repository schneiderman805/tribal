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
			<div className='main_container'>
				<div className='header'>
					<img src="./assets/logo.png" id="logo" alt="logo" />
					<p id="title">Tribal</p>
				</div>
				
				<div className='content'>
					<div id='available'>
						<h1>Available sessions</h1>
						<div className='session_wrapper'>
							<AllSessions sessionlist={this.state.available_sessions} />
						</div>
						<br />
					</div>
					<div id='booked'>
						<h1>Booked sessions</h1>
						<div className='session_wrapper'>
							<AllSessions sessionlist={this.state.booked_sessions} />
						</div>
						<br />
					</div>
					<div id='full'>
						<h1>Full sessions</h1>
						<div className='session_wrapper'>
							<AllSessions sessionlist={this.state.full_sessions} />
						</div>
					</div>
				</div>

				<div className='footer'>
					<p>FOOTER</p>
				</div>
			</div>
		);
	}
}
