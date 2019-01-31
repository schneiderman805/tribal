import React from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import Main from "./Main";
import Registration from "./Registration";


export class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sessions: props
		}
	}

	componentDidMount(){
		this.setState({
			sessions: this.props
		})
	}
	render() {
		return (
			<div>
			<BrowserRouter>
			<Switch>
				<Route exact path ='/' render={() => <Main sessions={this.state.sessions} />} />;
				<Route exact path ='/register' render={() => <Registration />} />;
			</Switch>
		</BrowserRouter>
		</div>
		)
	}
}

export default App

