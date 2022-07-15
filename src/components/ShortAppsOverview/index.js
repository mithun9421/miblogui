import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Application from './Application'
import {DEFAULT_CONFIGS} from '../../utls/constants';
import './styles.scss';

export default function ShortAppsOverview() {
	const [applicationList, setApplicationList] = useState([]);

	useEffect(() => {
		axios.get(DEFAULT_CONFIGS.API_URL + '/api/get-applications')
			.then((res) => { console.log(res); setApplicationList(res?.data) })
			.catch((err) => console.error(err))
	}, []);

	return (
		<div className="app-feeds">
			<h3>My apps</h3>
			<div className="app-list-wrapper">
				{applicationList?.map((application) => {
					return (
						<Application 
							label={application.label}
							value={application.value}
							liveApp={application.liveApp}
							description={application.description}
							sourceCode={application.sourceCode}
						/>
					)
				})}
			</div>
		</div>
	);
}
