/* React imports */
import React from 'react';

/* Data imports */
import data from '../../data';

/* Styles imports */
import './commonBackground.css';

export default function CommonBackground() {
	return (
		<div id="containerBackground">
			<img id="backgroundImage" src={data.images.background} alt="background" />
		</div>
	);
}
