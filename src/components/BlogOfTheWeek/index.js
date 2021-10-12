import React from 'react';
import Button from '../common/Button';
import './styles.scss';

export default function BlogOfTheWeek() {
	const handleClick = () => {
		console.log('Get featured');
	};
	return (
		<div className="blog-of-the-week">
			<div className="blog-wrapper">
				<h3 className="label">Blog of the week</h3>
				<h3 className="value">
					<a href="https://www.google.com">www.google.com</a>
				</h3>
			</div>
			<div className="getFeat-wrapper">
				<Button type="button" handleClick={handleClick} text={'getFeatured()'} />
			</div>
		</div>
	);
}
