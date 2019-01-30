import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "./Main";

const App = props => {
	let sessions = props;
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path ='/' render={() => <Main sessions={sessions} />} />;
			</Switch>
		</BrowserRouter>
	);
};

export default App;
