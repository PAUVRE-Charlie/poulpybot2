/* This file store all the articles used in this website */

/* Data imports */
import strings from '../strings';

/* Articles imports */
import testCapaciteMoteur_article from './testCapaciteMoteur';
import coupeTheme_article from './coupeTheme';
import coupeInscription_article from './coupeInscription';
import imtAtlantique_article from './imtAtlantique';

const articles = [
	{
		id: '1',
		category: strings.articleCategories.robot,
		...testCapaciteMoteur_article
	},
	{
		id: '2',
		category: strings.articleCategories.coupe,
		...coupeTheme_article
	},
	{
		id: '3',
		category: strings.articleCategories.coupe,
		...coupeInscription_article
	},
	{
		id: '4',
		category: strings.articleCategories.club,
		...imtAtlantique_article
	}
];

export default articles;
