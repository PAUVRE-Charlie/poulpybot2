/* React imports */
import React from 'react';
import { Link } from 'react-router-dom'; // used to navigate between and inside pages

/* Styles imports */
import './header.css';

/* Data imports */
import strings from '../../data/strings';
import colors from '../../data/colors';

export default function Header() {
	return (
		<div id="headerContainer">
			{/* Leading text*/}
			<p id="headerLeadingText" style={{ color: colors.primary }}>
				{strings.header.headerLeadingText}
			</p>

			{/* navigation list */}
			<nav id="nav">
				<ul id="navList">
					{/* navigation link to the home page */}
					<Link className="navLink" style={{ color: colors.primary }} to={process.env.PUBLIC_URL + '/'}>
						{strings.header.nav_home}
					</Link>
					{/* navigation link to the articles page */}
					<Link
						className="navLink"
						style={{ color: colors.primary }}
						to={process.env.PUBLIC_URL + '/articles/' + Object.keys(strings.articleCategories)[0]}
					>
						{strings.header.nav_articles}
					</Link>
				</ul>
			</nav>
		</div>
	);
}
