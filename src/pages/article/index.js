/* React imports */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

/* Style imports */
import './article.css';

/* Data imports */
import articles from '../../data/articles';
import colors from '../../data/colors';
import icons from '../../data/icons';

/* Components imports */
import ScrollToTop from '../../components/ScrollToTop';

export default function Article({ match }) {
	const [ article, setArticle ] = useState({});

	useEffect(
		() => {
			setArticle(articles.find((article) => article.id === match.params.id));
			/* This function make each containers of these classes appear fading from below : the class names are in article.css 
				The number at the end of the timeout function is the delay there is before the animation starts */
			document.querySelectorAll('.articleTitle').forEach((obj) => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
				}, 400);
			});
			document.querySelectorAll('.articleSubtitle').forEach((obj) => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
				}, 200);
			});
			document.querySelectorAll('.articleBody').forEach((obj) => {
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
				}, 50);
			});
		},
		[ match ]
	);

	return (
		<ScrollToTop>
			{article && (
				<div className="articleContainer">
					{/* the title section of the article */}
					<div className="articleTitleSection">
						<p className="articleTitle" style={{ color: colors.white }}>
							{article.title}
						</p>
						<p className="articleSubtitle" style={{ color: colors.primary }}>
							{article.author}
						</p>
						<a className="articleBackArrow" href={process.env.PUBLIC_URL + '/articles/' + match.params.category}><img src={icons.arrowDown} alt="arrow-back"></img></a>
					</div>

					{/* the body of the article */}
					<div className="articleBody" style={{ background: colors.white, color: colors.black }}>
						{article.body}
					</div>
					<Link className="articleUpArrow" to="headerContainer"><img src={icons.arrowDown} alt="arrow-up"></img></Link>
				</div>
			)}
		</ScrollToTop>
	);
}
