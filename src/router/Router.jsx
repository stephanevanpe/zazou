import React, { Component } from 'react';
import {Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/home';
import FredTreidel from '../pages/FredTreidel';
import Sergio from '../pages/Sergio';
import SUrquizar from '../pages/StephaneUrquizar';
import Over from '../pages/Over';
import Error from '../pages/404';
import Contact from '../pages/contact';
import FabianGuignard from "../pages/FabianGuignard";


class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/photographe/FredTreidel' component={FredTreidel} />
					<Route exact path='/photographe/Sergio-Photography' component={Sergio} />
					<Route exact path='/photographe/StephaneUrquizar' component={SUrquizar} />
					<Route exact path='/photographe/AlexeyMelnikov' component={Over} />
					<Route exact path='/photographe/FabianGuignard' component={FabianGuignard} />
					<Route exact path='/404' component={Error} />
					<Redirect to='/404' />
					{/*<Route exact path='/medium/mon-histoire' component={History}--! />
					<Route exact path='/medium/tarifs' component={Prices} />
					<Route exact path='/medium/contact' component={Contact} />
					*/}
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;
