import PropTypes from "prop-types";
import React from "react";

export default class Main extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			sessions: [props.sessions]
		};
		
	}

	render() {
		const sessions = this.state.sessions
		
		if (sessions.length > 0) {
			sessions.forEach(session => {
				debugger
				return (
					<h1>
						{session.title}
					</h1>
				)
			})
		}

	}
}
