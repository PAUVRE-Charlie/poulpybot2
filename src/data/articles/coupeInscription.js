/* This file store an article used in this website */

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: "Comment s'inscrire",
	image: images.coupe_theme.background,
	author: 'Atlantic Robotic Club',
	preview:
		'Pour participer à la Coupe de France de Robotique 2021, vous devez au préalable vous inscrire, en respectant dans l’ordre les différentes étapes listées ici.',
	body: (
		<div className="article">
			<h2 id="themeCoupeIntroduction">Inscription</h2>
			<p>Pour participer à la Coupe de France de Robotique 2021, 
                vous devez au préalable vous inscrire, en respectant 
                dans l’ordre les différentes étapes listées <a href="https://www.coupederobotique.fr/edition-2021/le-concours/inscriptions-2021/">ici</a>. 
                Pour les équipes inscrites, vous pouvez suivre l’avancement 
                de votre inscription sur la plateforme d’inscription en 
                ligne POOLZOR.</p>
            
		</div>
	)
};

export default article;
