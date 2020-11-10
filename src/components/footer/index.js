/* React imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Styles imports */
import './footer.css';

/* Data imports */
import colors from '../../data/colors';
import strings from '../../data/strings';

/* Components imports */
import FooterElement from './FooterElement';

export default function Footer() {
	return (
		<div id="footerContainer" style={{ backgroundColor: colors.secondaryOpacity70, color: colors.white }}>
			<FooterElement
				title={strings.footer.campusBrestDetails.title}
				component={strings.footer.campusBrestDetails.details}
			/>
			<FooterElement
				title="Navigation"
				component={
					<div id="footerNavList">
						<Link
							className="footerNavLink"
							to={process.env.PUBLIC_URL + '/'}
							style={{ color: colors.white }}
						>
							Accueil
						</Link>
						<Link
							className="footerNavLink"
							to={process.env.PUBLIC_URL + '/articles/' + Object.keys(strings.articleCategories)[0]}
							style={{ color: colors.white }}
						>
							{strings.articleCategories.robot}
						</Link>
						<Link
							className="footerNavLink"
							to={process.env.PUBLIC_URL + '/articles/' + Object.keys(strings.articleCategories)[1]}
							style={{ color: colors.white }}
						>
							{strings.articleCategories.coupe}
						</Link>
						<Link
							className="footerNavLink"
							to={process.env.PUBLIC_URL + '/articles/' + Object.keys(strings.articleCategories)[2]}
							style={{ color: colors.white }}
						>
							{strings.articleCategories.club}
						</Link>
						<Link
							className="footerNavLink"
							to={process.env.PUBLIC_URL + '/articles/' + Object.keys(strings.articleCategories)[3]}
							style={{ color: colors.white }}
						>
							{strings.articleCategories.sponsors}
						</Link>
					</div>
				}
			/>
			<FooterElement
				title={strings.footer.campusNantesDetails.title}
				component={strings.footer.campusNantesDetails.details}
			/>
		</div>
	);
}
