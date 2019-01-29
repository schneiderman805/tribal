import PropTypes from "prop-types";
import React from "react";

export default class Main extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <h1>Hello World</h1>;
	}
}
