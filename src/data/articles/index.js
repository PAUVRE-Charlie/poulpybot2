/* This file store all the articles used in this website */

/* Data imports */
import strings from '../strings';

/* Articles imports */
import electronique_article from './eletronique';
import testCapaciteMoteur_article from './testCapaciteMoteur';

const articles = [
	{
		id: '1',
		category: strings.articleCategories.robot,
		...electronique_article
	},
	{
		id: '2',
		category: strings.articleCategories.robot,
		...testCapaciteMoteur_article
	}
	// {
	// 	id: '3',
	// 	category: strings.articleCategories.robot,
	// 	...electronique_article
	// },
	// {
	// 	id: '4',
	// 	category: strings.articleCategories.robot,
	// 	...electronique_article
	// },
	// {
	// 	id: '5',
	// 	category: strings.articleCategories.coupe,
	// 	...electronique_article
	// },
	// {
	// 	id: '6',
	// 	category: strings.articleCategories.coupe,
	// 	...electronique_article
	// },
	// {
	// 	id: '7',
	// 	category: strings.articleCategories.coupe,
	// 	...electronique_article
	// },
	// {
	// 	id: '8',
	// 	category: strings.articleCategories.coupe,
	// 	...electronique_article
	// },
	// {
	// 	id: '9',
	// 	category: strings.articleCategories.coupe,
	// 	...electronique_article
	// },
	// {
	// 	id: '10',
	// 	category: strings.articleCategories.club,
	// 	...electronique_article
	// },
	// {
	// 	id: '11',
	// 	category: strings.articleCategories.club,
	// 	...electronique_article
	// },
	// {
	// 	id: '12',
	// 	category: strings.articleCategories.club,
	// 	...electronique_article
	// },
	// {
	// 	id: '13',
	// 	category: strings.articleCategories.sponsors,
	// 	...electronique_article
	// },
	// {
	// 	id: '14',
	// 	category: strings.articleCategories.sponsors,
	// 	...electronique_article
	// }
];

export default articles;
