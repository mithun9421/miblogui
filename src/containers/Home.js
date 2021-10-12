import React from 'react';
import BlogFeeds from '../components/BlogFeeds';
import ShortAppsOverview from '../components/ShortAppsOverview';
import BlogOfTheWeek from '../components/BlogOfTheWeek';
import '../App.scss';

export class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="wrapper">
					<BlogFeeds />
					<ShortAppsOverview />
				</div>
				<div className="wrapper">
					<BlogOfTheWeek />
				</div>
			</div>
		);
	}
}

export default Home;
