/* React imports */
import React from 'react';

/* Styles imports */
import './homeHero.css';

/* Data imports */
import strings from '../../data/strings';
import colors from '../../data/colors';

export default function HomeHero() {
	return (
		<div id="heroContainer">
			<p id="heroTitle" style={{ color: colors.primary }}>
				{strings.title}
			</p>
		</div>
	);
}
