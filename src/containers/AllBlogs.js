import React from 'react';
import axios from 'axios';
import { Transition } from 'react-transition-group';
import BlogDescription from '../components/BlogDescription';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';

const duration = 300;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
}


const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

export class AllBlogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
			loading: true,
			blogLoading : true,
			showGotoTop: false
		}
	}

	componentDidMount = () => {
		this.getAllBlogs();
		window.addEventListener("scroll", this.handleScroll)
	}

	handleScroll = () => {
		console.log("Window.scroll ", window.scrollY)
		if (window.scrollY > 300) {
			this.setState({
				showGotoTop: true
			})
		} else {
			this.setState({
				showGotoTop: false
			})
		}
	}

	getAllBlogs = () => {
		axios.get("http://localhost:3001/get-blogs")
			.then((response) => {
				this.setState({
					blogs: response.data,
					blogLoading : false
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	render() {
		const { blogs, showGotoTop, blogLoading } = this.state;
		return (
			<div className="all-blogs">
				<Transition in={showGotoTop} timeout={duration}>
					{state => (
						<div style={{
							...defaultStyle,
							...transitionStyles[state]
						}} className='floating-button-wrapper-right'>
							<Button text={"Go to top"} handleClick={this.handleClick} />
						</div>
					)
					}

				</Transition>
				{
					blogs?.length > 0 &&
					blogs
						?.filter((blog) => blog?.postTitle && blog?.post)
						?.map((blog) => {
							return (
								<BlogDescription id={blog?._id} title={blog.postTitle} content={blog.post} likes={blog.likes} comments={blog.comments}/>
							)
						})
				}
				{
					blogLoading &&
					<div className='loader-wrapper'>
						<Loader />
					</div>
				}
			</div>
		);
	}
}

export default AllBlogs;
