import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Logo() {
	return (
		<div className="logo">
			<Link to="/">{'<Miblog />'}</Link>
		</div>
	);
}
