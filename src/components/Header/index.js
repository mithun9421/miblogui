import React, { Component } from 'react';
import Logo from '../common/Logo';
import RouteList from './RouteList';
import './styles.scss';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="wrapper">
					<Logo />
					<RouteList />
				</div>
			</div>
		);
	}
}

export default Header;
