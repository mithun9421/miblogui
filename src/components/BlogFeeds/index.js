import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Loader from '../common/Loader'
import './styles.scss';
import {DEFAULT_CONFIGS} from '../../utls/constants';
const INITIALPOSTS = [];

export default function BlogFeeds() {
	const [feedsLoading, setFeedsLoading] = useState(true);
	const [feeds, setFeeds] = useState(INITIALPOSTS);
	const history = useHistory();
	console.log("React API URL ", process.env.REACT_APP_API_URL)
	useEffect(() => {
		getBlogs();
	}, []);

	const getBlogs = () => {
		axios.get(DEFAULT_CONFIGS.API_URL + "/api/get-shortblogs")
			.then((response) => {
				setFeeds(response.data);
				setFeedsLoading(false);
				// console.log(response);
			})
			.catch((err) => {
				setFeedsLoading(false);
				console.log("error occured");
			})
	}

	const handleFeedClick = (postID) => {
		history.push(`/blog/${postID}`);
	}

	return (
		<div className="blog-feeds">
			<h3 className="blog-heading">Short Reads</h3>
			{
				feedsLoading &&
				<div className='loader-wrapper'>
					<Loader />
				</div>

			}
			<div className="blogs-body">
				{
					feeds?.length > 0 &&
					feeds
						?.filter((feed) => feed._id && feed.postTitle ? true : false)
						?.map((feed, idx) => {
							console.log(feed);
							return (
								<div key={idx} className="feed" onClick={() => { handleFeedClick(feed._id) }}>
									{feed?.postTitle}
								</div>
							)
						})
				}
				{
					!feedsLoading &&
					feeds?.length == 0 &&
					<div className="no-feeds" >
						No Short Reads!
					</div>
				}
			</div>
		</div>
	);
}
