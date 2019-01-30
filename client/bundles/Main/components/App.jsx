import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'


const App = props => {
	let passdown = props
	debugger;
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path ='/' render={props => <Main {...props} props={passdown} />} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
