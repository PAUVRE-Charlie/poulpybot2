/* React imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Style imports */
import './articleCard.css';

/* Data imports */
import colors from '../../data/colors';

export default function ArticleCard({ category, article }) {
	return (
		<Link
			className="articleCardContainer"
			style={{ backgroundColor: colors.white }}
			to={process.env.PUBLIC_URL + '/articles/' + category + '/' + article.id}
		>
			<img src={article.image} alt="articleImage" />

			<div className="articleCardTextContainer">
				<p className="title" style={{ color: colors.secondary }}>
					{article.title}
				</p>
				<div className="body" style={{ color: colors.black }}>
					{article.preview}
				</div>
			</div>
		</Link>
	);
}
