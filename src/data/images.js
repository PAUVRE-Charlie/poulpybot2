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
		valuesMinimalVoltage: baseURL + 'motor_valuesminimalvoltage.svg',
		disk: baseURL + 'moteur_disques.svg',
		shelf : baseURL + 'moteur_creux.svg',
		experience : baseURL + 'moteur_exp.svg',
	},
	coupe_theme:{
		background: baseURL + 'coupe2.svg',
		map: baseURL + 'table_schema.svg',
		shuffle_buoy: baseURL + 'combinaisons_bouees.svg',
		robot_positions: baseURL + 'positions_robot.svg',
		map_scheme: baseURL + 'schema_table.svg',
		map_sweep: baseURL + 'table_balayage.svg',
		map_windsock: baseURL + 'table_manches.svg',
		map_upView: baseURL + 'table_vue_dessus.svg',
		map_zones: baseURL + 'table_zone_mouillage.svg',
		map_compass: baseURL + 'boussole.svg',
		validity_robot: baseURL + 'validite_robot.svg',
		validity_buoy: baseURL + 'validite_bouee.svg',
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
	},
	detection_tags:{
		compass_tag: baseURL + 'boussole_tag.svg',
		compass: baseURL + 'boussole.svg',
		charuco_board: baseURL + 'charuco_board.svg',
		demo1: baseURL + 'demo_tag1.svg',
		demo2: baseURL + 'demo_tag2.svg',
		tag_cases: baseURL + 'tag_cases.svg',
		equipment: baseURL + 'tag_materiel.svg',
		results: baseURL + 'tag_results.svg',
		tag: baseURL + 'tag.svg',
		tag1: baseURL + 'tag1.svg',
		tag2: baseURL + 'tag2.svg',
		tag3: baseURL + 'tag3.svg',
		tag4: baseURL + 'tag4.svg',
	}
};

export default images;
