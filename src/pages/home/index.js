/* React imports */
import React, { useEffect } from 'react';

/* Styles imports */
import './home.css';

/* Data imports */
import strings from '../../data/strings';
import articles from '../../data/articles';
import colors from '../../data/colors';

/* Components imports */
import HomeHero from '../../components/homeHero';
import HomeBox from '../../components/homeBox';
import ScrollToTop from '../../components/ScrollToTop';

export default function Home() {
	useEffect(() => {
		/* This function make each HomeBox appear fading from below : the class names are in homeBox.css 
				The number at the end of the timeout function is the delay there is before the animation starts */
		let intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setTimeout(function() {
						entry.target.classList.add('fadeAndMoveFromBelow');
					}, 0);
					intersectionObserver.unobserve(entry.target);
				}
			});
		});
		document.querySelectorAll('.boxContainer').forEach((obj) => {
			intersectionObserver.observe(obj);
		});
	}, []);

	return (
		<ScrollToTop>
			<div id="homeSection">
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
							return articles.filter((x) => x.category === strings.articleCategories[category])[0] ===
							undefined ? (
								<div key={category} />
							) : (
								<HomeBox
									key={category}
									articleCategory={category}
									image={
										articles.filter((x) => x.category === strings.articleCategories[category])[0]
											.image
									}
									/* inverted = whether the title is on the right side or the left side and change the colors*/
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
		</ScrollToTop>
	);
}
