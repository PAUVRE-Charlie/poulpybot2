/* React imports */
import React, { useEffect } from 'react';

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
	useEffect(() => {
		/* This function make each HomeBox appear fading from below : the class names are in homeBox.css */
		let intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(function() {
						entry.target.classList.add('fadeAndMoveFromBelow');
					}, 50);
					intersectionObserver.unobserve(entry.target);
				}
			});
		});
		document.querySelectorAll('.boxContainer').forEach((obj) => {
			intersectionObserver.observe(obj);
		});
	}, []);

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
