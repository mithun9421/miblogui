import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const INITIALROUTES = [
	{
		label: 'blogs()',
		value: 'blogs'
	},
	{
		label: 'aboutMe()',
		value: 'aboutme'
	}
];

export default function RouteList() {
	const [ routeList, setRouteList ] = useState(INITIALROUTES);

	return (
		<div className="route-list">
			{routeList.map((route) => {
				return (
					<NavLink to={route.value} activeStyle={{ textDecoration: 'underline' }} className="route">
						{route.label}
					</NavLink>
				);
			})}
		</div>
	);
}
