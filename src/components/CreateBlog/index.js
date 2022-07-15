import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { useHistory } from "react-router-dom";
import Button from '../common/Button';
import axios from 'axios';
import './styles.scss';
import { useEffect } from 'react/cjs/react.development';
import { DEFAULT_CONFIGS } from '../../utls/constants'

export default function CreateBlog() {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const history = useHistory();
	const {blogid} = useParams();

	useEffect(() => {
		if(blogid) getBlogById(blogid)
	}, [])

	const getBlogById = (blogid) => {
		axios.get(DEFAULT_CONFIGS.API_URL + "/api/get-blog-by-id/" + blogid)
		.then((response) => {
			setTitle(response.data?.postTitle)
			setContent(response.data?.post)
		})
		.catch((err) => {
			console.log(err);
		})
	}

	const handleSubmitContent = () => {
		let inputObject = {
			postTitle : title,
			post : content
		}
		if(!blogid) {
			inputObject.likes = 0;
			inputObject.comments = [];
		}
		axios.post(DEFAULT_CONFIGS.API_URL + "/api/add-blog/" + (blogid ? blogid : "-999"), {...inputObject})
		.then((response) => {
			console.log("Post successful", response)
			history.push(`/`);   
		})
		.catch((err) => {
			console.log("error occured")
		})
	}; 

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<div className="create-blog-comp">
			<input
				className="title-input"
				onChange={handleTitleChange}
				value={title}
				placeholder={'What would you title the blog?'}
			/>
			<MDEditor value={content} onChange={setContent} />
			<div className="submit-wrapper">
				<Button text={'Submit'} handleClick={handleSubmitContent} />
			</div>
		</div>
	);
}
