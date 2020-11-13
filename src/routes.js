import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Contact from './components/Contact';
import Main from './components/Main';
import Thanks from './components/Thanks';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Main} />
		<Route exact path='/contact' component={Contact} />
		<Route exact path='/thanks/:name' component={Thanks} />
	</Switch>
);

export default Routes;
