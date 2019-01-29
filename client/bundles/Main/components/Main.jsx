import React from "react";
import AllSessions from "./AllSessions";
export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessions: props.sessions
		};
	}

	render() {
		return <AllSessions sessionlist={this.state.sessions} />;
	}
}
