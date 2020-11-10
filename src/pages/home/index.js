/* React imports */
import React from 'react';

/* Styles imports */
import './home.css';

/* Data imports */
import strings from '../../data/strings';
import articles from '../../data/articles';

/* Components imports */
import HomeHero from '../../components/homeHero';
import HomeBox from '../../components/homeBox';
import colors from '../../data/colors';

export default function Home() {
	console.log(articles);

	return (
		<div id="homeCategory">
			{/* Hero category on top (that has a 100% height) */}
			<HomeHero />

			{/* Container for the boxes */}
			<div
				id="homeBoxesContainer"
				style={{
					background: 'linear-gradient(' + colors.primaryOpacity70 + ',' + colors.secondaryOpacity70 + ')'
				}}
			>
				{!strings ? (
					<div>Loading...</div>
				) : (
					Object.keys(strings.articleCategories).map((category) => {
						return (
							<HomeBox
								key={category}
								articleCategory={category}
								image={
									articles.filter((x) => x.category === strings.articleCategories[category])[0].image
								}
								inverted={
									category === Object.keys(strings.articleCategories)[1] ||
									category === Object.keys(strings.articleCategories)[3]
								}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}
