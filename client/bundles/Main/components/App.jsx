import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Main from "./Main";

const App = props => {
	let passdown = props;
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path ='/' render={props => <Main {...props} props={passdown} />} />;
			</Switch>
		</BrowserRouter>
	);
};

export default App;
