// This file store all images used in this website

const baseURL = process.env.PUBLIC_URL + '/assets/images/';

const images = {
	electronique: baseURL + 'electronique.svg',
	coupe: baseURL + 'coupe.svg',
	club_nantes: baseURL + 'club_nantes.svg',
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
	}
};

export default images;
