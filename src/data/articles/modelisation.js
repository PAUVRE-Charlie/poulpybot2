/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: "Modélisation 3D",
	image: images.modelisation3D.robot_front,
	author: 'Aziz Sellami',
	preview:
		'La modélisation de notre Robot a différents objectifs. Tout d’abord elle a pour but d’aider à la réflexion sur l’agencement des différents composants du Robot. Ensuite, elle a pour but de prototyper des éléments du robots et des pièces qui pourront par la suite être à l’imprimante 3D.',
	body: (
		<div className="article">
            <div className="contents">
				<img src={images.modelisation3D.robot_back} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
                    <Link to="modelisationObjectif">Objectif</Link>
                    <Link to="modelisationSolutionLogicielle">La solution logicielle</Link>
                    <Link to="modelisationConstrains">Les contraintes</Link>
				</div>
			</div>
            <h2 id="modelisationObjectif">1. Objectif</h2>
			<p>La modélisation de notre Robot a différents objectifs. Tout d’abord elle a pour but d’aider à la réflexion sur l’agencement des différents composants du Robot. Ensuite, elle a pour but de prototyper des éléments du robots et des pièces qui pourront par la suite être à l’imprimante 3D.</p>
            <img src={images.modelisation3D.robot_front} alt="robot_front"/>
            <img src={images.modelisation3D.robot_back} alt="robot_back"/>
            <h2 id="modelisationSolutionLogicielle">2. La solution logicielle</h2>
			<div className="sideViewImage">
                <img src={images.modelisation3D.fusion_logo} style={{width: '30%', margin: '0 1rem 0 0'}} alt="logo_fusion"></img>
                <span>Fusion 360 est un logiciel de CAO qui permet de faire de la modélisation 3D, de la fabrication, du dessin industriel et de l'ingénierie électronique et mécanique. Nous avons choisi ce logiciel pour son interface intuitive et sa licence étudiante gratuite.</span>
            </div>
            <h2 id="modelisationConstrains">3. Les contraintes</h2>
            <p>Le règlement de la Coupe de France de Robotique exige que le robot respecte des contraintes de dimensions précises. La modélisation permettra alors d’anticiper certaines de ces contraintes, par exemple:</p>
            <br/>
            <ul>
                <li>
                    Le périmètre d’un robot ne doit pas excéder 1200 mm au moment du départ. Le périmètre de ce robot totalement déployé ne doit pas excéder 1300 mm au cours du match. (<a href="https://www.coupederobotique.fr/edition-2020/le-concours/thematique/">Règlement</a> - Section F2)
                    <br/>
                    <img src={images.modelisation3D.constrains} style={{width: '50%', margin: '0 25% 0 25% '}} alt="logo_fusion"></img>
                </li>
                <li>
                À tout instant au cours du match, la hauteur de chaque robot ne doit pas dépasser 350 mm. Cependant, il sera toléré que le bouton d’arrêt d’urgence dépasse de cette hauteur limite pour atteindre 375 mm. (<a href="https://www.coupederobotique.fr/edition-2020/le-concours/thematique/">Règlement</a> - Section F2)
                </li>
            </ul>
            <br/>
            <span>Intégration sur le site:</span><br/>
            <iframe title="fusion-model" src="https://imtatlantique10.autodesk360.com/shares/public/SH56a43QTfd62c1cd968a8f3514029fc2801?mode=embed" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"  frameBorder={0}></iframe>
        </div>
	)
};

export default article;
