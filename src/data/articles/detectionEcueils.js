/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';
import videos from '../videos';

const article = {
	title: 'Détection des écueils',
	image: images.detection_ecueils.model,
	author: 'Sebastian Heyer',
	preview:
		"Dans notre stratégie nous souhaiterions profiter des écueils sur lesquels sont disposées 5 bouées. Pour les récupérer à l’aide d’actionneurs, il devient indispensable au robot de savoir se positionner correctement.",
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.electronique} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
					<Link to="detectionEcueilsIntroduction">Introduction</Link>
					<Link to="detectionEcueilsPrincipe">Principe</Link>
					<Link to="detectionEcueilsMontage">Test</Link>
					<Link to="detectionEcueilsCode">Code</Link>
					<Link to="detectionEcueilsVideo">Vidéo de l'expérience</Link>
				</div>
			</div>
			<h2 id="detectionEcueilsIntroduction">1. Introduction</h2>
			<p>Dans notre stratégie nous souhaiterions profiter des 
                écueils sur lesquels sont disposées 5 bouées. Pour les 
                récupérer à l’aide d’actionneurs, il devient indispensable 
                au robot de savoir se positionner correctement.
            </p>
            <img src={images.detection_ecueils.model} alt="model" />
			<h2 id="detectionEcueilsPrincipe">2. Principe</h2>
            <p>Pour se faire, l’odométrie guidera le robot jusqu’à la zone proche de l’écueil.</p>
            <br/>
            <div className="sideViewImage">
                <p>La suite relève de deux capteurs de distance VL53L1X. Ceux-ci sont placés à la 
                hauteur des bouées des écueils, au-dessus du mur (en bleu sur l’image du dessus). 
                En plaçant deux capteurs à chaque extrémité du robot, on obtient une assurance 
                de la justesse du positionnement du robot : lorsque les deux capteurs détectent 
                un obstacle, le robot est en face de l’écueil. De plus, il connaît la distance 
                qui les sépare ce qui lui permet d’ajuster correctement sa position afin que les 
                actionneurs n’aient pas de problèmes à récupérer les bouées.
                </p>
                <img src={images.detection_ecueils.capteur} style={{width: '30%', margin: '0 0 0 1rem'}} alt="capteur"></img>
            </div>
			<h2 id="detectionEcueilsMontage">3. Test</h2>
            <p>Nous avons testé un capteur ultrason VMA360 afin d’expliquer le principe de fonctionnement similaire du VL53L1X.</p>
            <br/>
            <div className="sideViewImage">
                <img src={images.detection_ecueils.montage} style={{width: '50%', margin: '0 1rem 0 0'}} alt="capteur"></img>
                <p> Le module ultrasonique VMA360 a 4 broches: GND, VCC, Trig et Echo. 
                    Les broches de masse et de VCC du module doivent être connectées, 
                    respectivement, à la masse et à la broche de 5 volts de la carte 
                    Arduino, et les broches de trig et d'écho à n'importe quelle E/S 
                    numérique de la carte Arduino. Arbitrairement, nous avons nommé 
                    le numéro 9 comme trigPin et le numéro 10 comme echoPin.
                </p>
            </div>
            <img src={images.detection_ecueils.schema_montage} alt="capteur"></img>
			<h2 id="detectionEcueilsCode">4. Code arduino</h2>
            <p>Voici le code que nous avons utilisé:</p>
            <br/>
            <img src={images.detection_ecueils.code} alt="capteur"></img>
            <p>Le trigPin envoie au composant l’ordre d’envoyer pendant 10ms des ultrasons 
                afin de recevoir à travers l’echoPin la valeur du temps mis pour que le 
                signal soit réfléchi et reçu par le capteur. Un simple facteur permet 
                d’exprimer la valeur reçue en distance en millimètre. La distance a été 
                calculée en considérant une vitesse du son de 340 m/s.
            </p>
			<h2 id="detectionEcueilsVideo">5. Vidéo de l'expérience</h2>
            <p>Voici une vidéo de l’expérience avec les résultats en direct:</p>
            <br/>
            <video controls>
                <source src={videos.detection_experience} type="video/mp4" />
            </video>
            <p>N’ayant pas encore eu les composants nécessaires, nous avons imaginé ce code qui permettrait au robot de s’arrêter en face des écueils.</p>
            <img src={images.detection_ecueils.code2} alt="code2"></img>
            <img src={images.detection_ecueils.code3} alt="code3"></img>
            <br/>
            <p>Nous utilisons un pont en H, un composant qui permet de moduler la tension Arduino et de faire tourner les moteurs dans un sens ou dans l’autre à l’aide d’un jeu d’interrupteurs.</p>
            <p>Ainsi, lorsqu’un des capteurs détecte un obstacle à 10 cm (la distance nécessite encore d’être estimée), il ordonne à la roue qui se trouve sur son côté de cesser de tourner afin que l’autre roue puisse continuer ce qui permettra au robot de se positionner correctement devant les écueils.</p>
            <p>Une fois que le robot est au bon endroit, l’Arduino pourra enfin exécuter les tâches des actionneurs pour récupérer les bouées des écueils.</p>
            <br/>
        </div>
	)
};

export default article;
