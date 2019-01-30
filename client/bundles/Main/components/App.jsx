import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "./Main";
import Registration from "./Registration";

const App = props => {
	let sessions = props;
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path ='/' render={() => <Main sessions={sessions} />} />;
				<Route exact path ='/register' render={() => <Registration />} />;
			</Switch>
		</BrowserRouter>
	);
};

export default App;
