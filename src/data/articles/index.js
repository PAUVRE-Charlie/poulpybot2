/* This file store all the articles used in this website */

/* Data imports */
import strings from '../strings';

/* Articles imports */
import modelisation_article from './modelisation';
import coupeTheme_article from './coupeTheme';
import coupeInscription_article from './coupeInscription';
import imtAtlantique_article from './imtAtlantique';
import detectionEcueils_article from './detectionEcueils';
import club_nantes_article from './clubNantes';
import club_brest_article from './clubBrest';
import coupe2020_article from './coupe2020';
import testCapaciteMoteur_article from './testCapaciteMoteur';
import simulation_article from './simulation';
import detectionTags_article from './detectionTags';
import detectionCouleurs_article from './detectionCouleurs';
import equipment_article from './equipment';
import lidar_article from './lidar';
import strategy_article from './strategy';
import windsock_article from './windsock';
import makingTable_article from './makingTable';
import enslavement_article from './enslavement';
import actuator_article from './actuator';

const articles = [
	{
		id: '1',
		category: strings.articleCategories.robot,
		...modelisation_article
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
	},
	{
		id: '5',
		category: strings.articleCategories.robot,
		...detectionEcueils_article
	},
	{
		id: '6',
		category: strings.articleCategories.club,
		...club_nantes_article
	},
	{
		id: '7',
		category: strings.articleCategories.club,
		...club_brest_article
	},
	{
		id: '8',
		category: strings.articleCategories.coupe,
		...coupe2020_article
	},
	{
		id: '9',
		category: strings.articleCategories.robot,
		...testCapaciteMoteur_article
	},
	{
		id: '10',
		category: strings.articleCategories.robot,
		...simulation_article
	},
	{
		id: '11',
		category: strings.articleCategories.robot,
		...detectionTags_article
	},
	{
		id: '12',
		category: strings.articleCategories.robot,
		...detectionCouleurs_article
	},
	{
		id: '13',
		category: strings.articleCategories.robot,
		...equipment_article
	},
	{
		id: '14',
		category: strings.articleCategories.robot,
		...lidar_article
	},
	{
		id: '15',
		category: strings.articleCategories.robot,
		...strategy_article
	},
	{
		id: '16',
		category: strings.articleCategories.robot,
		...windsock_article
	},
	{
		id: '17',
		category: strings.articleCategories.robot,
		...makingTable_article
	},
	{
		id: '18',
		category: strings.articleCategories.robot,
		...enslavement_article
	},
	{
		id: '19',
		category: strings.articleCategories.robot,
		...actuator_article
	}
];

export default articles;
