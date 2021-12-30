import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import AboutMe from './containers/AboutMe';
import AllBlogs from './containers/AllBlogs';
import BlogWithDescription from './containers/BlogWithDescription';
import CreateBlog from './containers/CreateBlog';
import './App.scss';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/blogs" component={AllBlogs} />
					<Route exact path="/blog/:blogid" component={BlogWithDescription} />
					<Route exact path="/aboutme" component={AboutMe} />
					<Route exact path="/create-blog" component={CreateBlog} />
					<Route exact path="/create-blog/:blogid" component={CreateBlog} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
