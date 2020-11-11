/* React imports */
import React from 'react';

/* Styles imports */
import './homeBox.css';

/* Data imports */
import colors from '../../data/colors';
import strings from '../../data/strings';

/* Components imports */
import Button from '../button';

export default function HomeBox({ image, articleCategory, inverted }) {
	/* inverted = whether the title is on the right side or the left side and change the colors */
	return (
		<div className="boxContainer">
			<img className="boxImage" src={image} alt="box-background" />
			<div className="boxTitleGroup" style={inverted ? { right: '10%' } : { left: '10%' }}>
				<p className="articleCategory" style={{ color: inverted ? colors.primaryDark : colors.secondary }}>
					{strings.articleCategories[articleCategory]}
				</p>
				<Button
					text={strings.home.knowMore}
					/* inverted = change the colors of the button */
					inverted={inverted}
					link={process.env.PUBLIC_URL + '/articles/' + articleCategory}
				/>
			</div>
		</div>
	);
}
