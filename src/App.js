/* React imports */
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'; // used to create routes between pages or components

/* Styles imports */
import './App.css';

/* Data imports */

/* Pages imports */
import Home from './pages/home';
import Articles from './pages/articles';
import Article from './pages/article';

/* Components imports */
import CommonBackground from './components/commonBackground'; // background image, displayed on all/most pages
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<Router>
			<CommonBackground />

			{/* Container for the whole app */}
			<div id="appContainer">
				<Header />
				<Switch>
					<Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
					<Route
						exact
						path={process.env.PUBLIC_URL + '/articles/:category'}
						component={({ match }) => <Articles match={match} />}
					/>
					<Route
						exact
						path={process.env.PUBLIC_URL + '/articles/:category/:id'}
						component={({ match }) => <Article match={match} />}
					/>
					<Redirect to={process.env.PUBLIC_URL + '/'} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
