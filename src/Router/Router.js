import React, {Fragment} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Home from '../components/Home/Home'
import About from '../components/About/About'

function App() {
	return (
		<Router>
			<Fragment>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
			</Fragment>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}



export default App;