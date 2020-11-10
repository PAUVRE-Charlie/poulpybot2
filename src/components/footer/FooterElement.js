/* React imports */
import React from 'react';

/* Style imports */
import './footer.css';

export default function FooterElement({ title, component }) {
	return (
		<div className="footerElement">
			<p className="footerElementTitle">{title}</p>
			{component}
		</div>
	);
}
