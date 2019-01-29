import React from "react";

const AllSessions = props => {
	let sessionlist = props.sessionlist;

	let sessions = sessionlist.map(session => {
		debugger;
		return (
			<div>
				<h1>{session.title}</h1>
				<h4>{new Date(session.start_date).toLocaleString()}</h4>
				<h4>{new Date(session.end_date).toLocaleString()}</h4>
			</div>
		);
	});
	return <h1>{sessions}</h1>;
};

export default AllSessions;
