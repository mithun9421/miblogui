import React, { useState } from 'react';
import CreateBlog from '../components/CreateBlog';
import '../App.scss';

export default function CreateBlogs() {
	const [ value, setValue ] = React.useState('**Hello world!!!**');

	return (
		<div className="create-blogs">
			<div className="wrapper">
				<CreateBlog />
			</div>
		</div>
	);
}
