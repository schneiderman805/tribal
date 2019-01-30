import React from "react";
import {Route, Switch, BrowserRouter,NavLink} from "react-router-dom";
import Main from "./Main";
import Registration from "./Registration";

const App = props => {
	let sessions = props;
	return (
		<div>
			{/* <NavLink to="/register" >Sign up</NavLink> */}
			<BrowserRouter>
			<Switch>
				<Route exact path ='/' render={() => <Main sessions={sessions} />} />;
				<Route exact path ='/register' render={() => <Registration />} />;
			</Switch>
		</BrowserRouter>
		</div>
		
	);
};

export default App;
