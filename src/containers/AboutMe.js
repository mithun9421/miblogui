import React from 'react';
import ComingSoon from '../images/coding.gif'

export class AboutMe extends React.Component {
	render() {
		return <div className='about-me'>
			<div className='wrapper'>
				<div className='content'>
					<img src={ComingSoon} />
				</div>
			</div>
		</div>;
	}
}

export default AboutMe;
