import React from 'react';
import ComingSoon from '../../images/coding.gif';
import './styles.scss';

export default function ShortAppsOverview() {
	return (
		<div className="app-feeds">
			<h3>Quick apps</h3>
			<div className='coming-soon-wrapper'>
				<img src={ComingSoon} />
			</div>
		</div>
	);
}
