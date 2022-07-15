import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogDescription from '../components/BlogDescription';
import Loader from '../components/common/Loader';
import {DEFAULT_CONFIGS} from '../utls/constants';

const BlogWithDescription = () => {
	const [blog, setBlog] = useState({})
	const [blogLoading, setBlogLoading] = useState(true)
	console.log(useParams())
	let { blogid } = useParams();

	useEffect(() => {
		if (blogid) {
			getPostById(blogid);
		}
	}, [])

	const getPostById = (id) => {
		axios.get(DEFAULT_CONFIGS.API_URL + "/api/get-blog-by-id/" + id)
			.then((response) => {
				console.log("response getpostbyid", response)
				setBlogLoading(false);
				setBlog(response.data);
			})
			.catch((err) => {
				setBlogLoading(false);
				console.log("error occured")
			})
	}

	return (
		<>
			{
				blog?.postTitle &&
				<BlogDescription
					id={blogid}
					title={blog?.postTitle}
					content={blog?.post}
					likes={blog?.likes}
					comments={blog?.comments}
				/>
			}
			{
				blogLoading &&
				<div className='loader-wrapper'>
					<Loader />
				</div>
			}
		</>
	)

}

export default BlogWithDescription;
