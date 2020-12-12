// This file store all images used in this website

const baseURL = process.env.PUBLIC_URL + '/assets/images/';

const images = {
	electronique: baseURL + 'electronique.svg',
	coupe: baseURL + 'coupe.svg',
	lydia: baseURL + 'lydia.svg',
	background: baseURL + 'background.svg',
	motor_article: {
		motor: baseURL + 'motor.svg',
		codeurIncremental: baseURL + 'motor_codeurincremental.svg',
		reducteurs: baseURL + 'motor_reducteurs.svg',
		robotshop: baseURL + 'motor_robotshop.svg',
		valuesMinimalVoltage: baseURL + 'motor_valuesminimalvoltage.svg'
	},
	coupe_theme:{
		background: baseURL + 'coupe2.svg',
		map: baseURL + 'table_schema.svg',
		validite_bouee: baseURL + 'validite_bouee.svg',
	},
	imt:{
		campus: baseURL + 'imt.svg',
		mixImages: baseURL + 'imt2.svg',
	},
	detection:{
		model: baseURL + 'detection_model.svg',
		capteur: baseURL + 'detection_capteur.svg',
		montage: baseURL + 'detection_montage.svg',
		schema_montage: baseURL + 'detection_schema_montage.svg',
		code: baseURL + 'detection_code.svg',
	},
	club_nantes:{
		equipe: baseURL + 'club_nantes.svg',
		charlie: baseURL + 'charlie.svg',
		kamil: baseURL + 'kamil.svg',
		theo: baseURL + 'theo.svg',
		sebastian: baseURL + 'sebastian.svg',
		victor: baseURL + 'victor.svg',
		alexis: baseURL + 'alexis.svg',
		kevin: baseURL + 'kevin.svg',
	},
	club_brest:{
		equipe: baseURL + 'club_brest.svg',
		aziz: baseURL + 'aziz.svg',
		xiayue: baseURL + 'xiayue.svg',
		sean: baseURL + 'sean.svg',
		esteban: baseURL + 'esteban.svg',
		maxence: baseURL + 'maxence.svg',
		jeremy: baseURL + 'jeremy.svg',
	},
	coupe_edition_2020:{
		image1: baseURL + 'edition2020.svg',
		image2: baseURL + 'edition2020_2.svg',
		results: baseURL + 'resultats_2020.svg',
	},
	modelisation3D: {
		constrains: baseURL + 'contraintes_taille.svg',
		robot_front: baseURL + 'Robotv3_vue_avant.svg',
		robot_back: baseURL + 'Robotv3_vue_derriere.svg',
		fusion_logo: baseURL + 'fusion.svg'
	},
	simulation:{
		interface: baseURL + 'interface_webots_commenté.svg',
		lds: baseURL + 'LDS-01.svg',
		logo_webots: baseURL + 'logo_webots.svg',
		simple_model: baseURL + 'simple_robot_commenté.svg',
		simulation: baseURL + 'simu.svg',
	}
};

export default images;
