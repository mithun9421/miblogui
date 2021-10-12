import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.scss';
const INITIALPOSTS = [
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features, React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
	},
	{
		postID: 1,
		postTitle: 'React 18.0.1 is available, Checkout for its new features',
		traversable: true
},
{
	postID: 1,
	postTitle: 'React 18.0.1 is available, Checkout for its new features',
	traversable: true
},
{
	postID: 1,
	postTitle: 'React 18.0.1 is available, Checkout for its new features',
	traversable: true
},
{
	postID: 1,
	postTitle: 'React 18.0.1 is available, Checkout for its new features',
	traversable: true
},
{
	postID: 1,
	postTitle: 'React 18.0.1 is available, Checkout for its new features',
	traversable: true
}
];
export default function BlogFeeds() {
	const [feeds, setFeeds] = useState(INITIALPOSTS);
	const history = useHistory();

	const handleFeedClick = (postID) => {
		history.push(`/blog/${postID}`);   
	}

	return (
		<div className="blog-feeds">
			<h3 className="blog-heading">Short Reads</h3>
			<div className="blogs-body">
			{
				feeds?.length > 0 &&
				feeds?.map((feed) => {
					return (
						<div className="feed" onClick={() => {handleFeedClick(feed.postID)}}>
							{feed?.postTitle}
						</div>
					)
				})
			}
			{
				feeds?.length == 0 &&
				<div className="no-feeds" >
					No Short Reads!
				</div>
			}
			</div>
		</div>
	);
}
