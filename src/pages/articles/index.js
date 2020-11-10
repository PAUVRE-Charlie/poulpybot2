/* React imports */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* Styles imports */
import './articles.css';

/* Data imports */
import colors from '../../data/colors';
import strings from '../../data/strings';
import articles from '../../data/articles';

/* Components imports */
import ArticleCard from '../../components/articleCard';

export default function Articles({ match }) {
	useEffect(
		() => {
			/* This function make each card container appear fading from below : the class names are in homeBox.css */
			let timer = 0;
			document.querySelectorAll('.articleCardContainer').forEach((obj) => {
				timer += 50;
				setTimeout(function() {
					obj.classList.add('fadeAndMoveFromBelow');
				}, timer);
			});
		},
		[ match ]
	);

	return (
		<div
			className="articlesContainer"
			style={{ background: 'linear-gradient(' + colors.primaryOpacity70 + ',' + colors.secondaryOpacity70 + ')' }}
		>
			{/* banner that displays the menu of the article categories */}
			<div className="articlesCategoryBanner">
				{strings &&
					Object.keys(strings.articleCategories).map((category) => {
						return (
							<Link
								key={category + 'banner'}
								to={process.env.PUBLIC_URL + '/articles/' + category}
								className="articlesBannerItem"
								style={{
									color: category === match.params.category ? colors.secondary : colors.white,
									fontSize: category === match.params.category ? '4vw' : '2.5vw'
								}}
							>
								{strings.articleCategories[category]}
							</Link>
						);
					})}
			</div>

			{/* the container that displays the articles of the selected category */}
			<div className="articlesCardContainer">
				{!articles ? (
					<div>Loading...</div>
				) : (
					articles
						.filter((article) => article.category === strings.articleCategories[match.params.category])
						.map((article) => {
							return (
								<ArticleCard
									key={article.id + 'card'}
									article={article}
									category={match.params.category}
								/>
							);
						})
				)}
			</div>
			<div />
		</div>
	);
}
