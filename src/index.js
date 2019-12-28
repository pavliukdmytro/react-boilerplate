import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router/Router.js';

function App() {
	return <Router />
};

ReactDOM.render(<App />, document.querySelector('#root'));