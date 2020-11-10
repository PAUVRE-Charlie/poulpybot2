/* React imports */
import React, { useEffect, useState } from 'react';

/* Style imports */
import './article.css';

/* Data imports */
import articles from '../../data/articles';
import colors from '../../data/colors';

export default function Article({ match }) {
	const [ article, setArticle ] = useState({});

	useEffect(
		() => {
			setArticle(articles.find((article) => article.id === match.params.id));
		},
		[ match ]
	);

	console.log(article);
	console.log(match.params.id);

	return (
		article && (
			<div id="articleContainer">
				{/* the title section of the article */}
				<div id="articleTitleSection">
					<p id="articleTitle" style={{ color: colors.white }}>
						{article.title}
					</p>
					<p id="articleSubtitle" style={{ color: colors.secondary }}>
						{article.author}
					</p>
				</div>

				{/* the body of the article */}
				<div id="articleBody" style={{ background: colors.whiteOpacity70, color: colors.black }}>
					{article.body}
				</div>
			</div>
		)
	);
}
