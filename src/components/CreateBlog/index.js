import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Button from '../common/Button';
import './styles.scss';

export default function CreateBlog() {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');

	const handleSubmitContent = () => {
		console.log('Submit content ', content);
	};

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<div className="create-blog-comp">
			<input
				className="title-input"
				onChange={handleTitleChange}
				placeholder={'What would you title the blog?'}
			/>
			<MDEditor value={content} onChange={setContent} />
			<div className="submit-wrapper">
				<Button text={'Submit'} handleClick={handleSubmitContent} />
			</div>
		</div>
	);
}
