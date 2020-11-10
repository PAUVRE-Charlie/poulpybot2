/* React imports */
import React from 'react';
import { Link } from 'react-router-dom'; // used to move navigate between or in pages

/* Style imports */
import './button.css';

/* Data imports */
import colors from '../../data/colors';

export default function Button({ text, inverted, link }) {
	return (
		<Link className="linkOnButton" to={link}>
			<div
				className="buttonContainer"
				style={
					inverted ? (
						{
							color: colors.white,
							border: 'solid 1px ' + colors.white,
							backgroundColor: colors.primaryDark
						}
					) : (
						{
							color: colors.white,
							border: 'solid 1px ' + colors.white,
							backgroundColor: colors.secondary
						}
					)
				}
			>
				<span className="buttonText">{text}</span>
			</div>
		</Link>
	);
}
