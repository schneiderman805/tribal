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
			<div className='main_grid'>
				<div className='header'>
					<p>logo</p>
					<p>Tribal</p>
				</div>
				
				<div className='content'>
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

				<div className='footer'>
					<p>FOOTER</p>
				</div>
			</div>
		);
	}
}
