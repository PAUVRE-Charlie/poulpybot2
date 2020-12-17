/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Traitement des informations',
	image: images.electronique,
	author: 'Théo Fontenit',
	preview:
		"Le robot que nous concevons afin de participer à la Coupe de France de Robotique a pour missions différentes tâches bien définies. Il doit interagir avec son environnement, détecter les obstacles, repérer les adversaires etc. Pour réaliser cela, il doit obtenir de nombreuses informations sur le monde qui l’entoure et agir en conséquence.",
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.electronique} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
					<Link to="dataProcessingIntroduction">Introduction</Link>
					<Link to="dataProcessingSensors">Les capteurs</Link>
					<Link to="dataProcessingBrain">Choix de l’intelligence embarquée</Link>
				</div>
			</div>
			<h2 id="dataProcessingIntroduction">1. Introduction</h2>
            <p>Le robot que nous concevons afin de participer à la Coupe de France de Robotique a pour missions différentes tâches bien définies. Il doit interagir avec son environnement, détecter les obstacles, repérer les adversaires etc. Pour réaliser cela, il doit obtenir de nombreuses informations sur le monde qui l’entoure et agir en conséquence.</p>
            
			<h2 id="dataProcessingSensors">2. Les capteurs</h2>
            <span>Le robot est ainsi composé de multiples capteurs que nous avons décrit lors de précédents articles:</span>
            <br/><br/><ul>
                <li><span>Les détecteurs de couleurs. Ils permettent de connaître le type d’éco-cup collecté par le robot et donc de les trier en conséquence pour placer l'éco-cup sur la bonne ligne du chenal.</span></li>
                <li><span>Les capteurs de distance. Ils sont placés à hauteur des bouées des écueils afin de connaître la position précise du robot vis à vis de celles-ci.</span></li>
                <li><span>Le LIDAR. Il est capable de détecter les gobelets, les murs ainsi que les adversaires dans le plan horizontal situé à sa hauteur.</span></li>
                <li><span>La caméra. Elle permet de détecter les tags ArUco, comme celui placé sur la boussole du mat.</span></li>
            </ul><br/>
            <p>Ces différents capteurs permettent d'acquérir tout type d’informations diverses tel que des distances, couleurs, orientation, position etc. Il est ensuite nécessaire de traiter ces informations dans une même unité pour prendre les décisions les plus satisfaisantes. Cette intelligence embarquée permettra par la suite de piloter les différents actionneurs du robot pour réaliser les missions.</p>

			<h2 id="dataProcessingBrain">3. Choix de l’intelligence embarquée</h2>
            <p>Afin de traiter les informations de façon optimale et de prendre les meilleures décisions, nous allons nous appuyer sur un micro contrôleur… mais au fait c’est quoi un micro contrôleur ?</p>
            <br/><p>Un microcontrôleur est un circuit intégré qui rassemble les éléments essentiels d'un ordinateur : processeur, mémoires, unités périphériques et interfaces d'entrées-sorties. Il se caractérise par un plus haut degré d'intégration, une plus faible consommation électrique, une plus faible vitesse de fonctionnement (de quelques mégahertz jusqu'à plus d'un gigahertz) et un coût réduit par rapport aux microprocesseurs polyvalents utilisés dans les ordinateurs personnels.</p>
            <br/><span>Dans le cadre de la réalisation du projet, plusieurs microcontrôleurs sont envisageables:</span>
            <br/><br/><ul>
                <li>
                    <span>La carte Arduino:</span>
                    <br/><span>Il s’agit d'une plateforme de prototypage open-source sur laquelle se trouve un microcontrôleur (d'architecture Atmel AVR comme l'Atmega328p, et d'architecture ARM comme le Cortex-M3 pour l'Arduino Due). La carte Arduino se compose de sept éléments principaux : le micro-contrôleur, le port d’alimentation de la carte et de téléversement, le port d’alimentation externe, les trois LED, les connecteurs digitales, analogiques et “power”. Elle est programmable via un IDE libre et multiplateforme dérivé de Processing. Celui-ci peut servir d'éditeur de code et de compilateur, et peut transférer le firmware et le programme au travers de la liaison série (RS-232, Bluetooth ou USB selon le module).</span>
                    <br/><span>Dans le cadre de notre robot, plusieurs cartes Arduino seraient nécessaires afin d’avoir la puissance nécessaire au fonctionnement de différentes parties du robot (gestion des capteurs, communication, pilotage des moteurs etc).</span>
                </li><br/>
                <li>
                    <span>La Rasberry pi:</span>
                    <br/><span>Le Raspberry Pi est un nano-ordinateur de la taille d'une carte de crédit présentant de nombreux avantages. Elle est composée d’un processeur ARM, de 4 ports USB, d’un port Ethernet, d’un module Bluetooth LE, d’un port HDMI, d’une prise audio 3.5 et d’un lecteur de carte Micro SD.  La carte électronique permet l'exécution de plusieurs variantes du système d'exploitation libre GNU/Linux mais aussi avec le système d'exploitation Microsoft Windows.</span>
                </li>
            </ul><br/><br/>
            <span>Nous sommes actuellement en train d’étudier laquelle de ces options serait la plus optimale afin de correspondre le mieux aux capteurs et aux actionneurs que nous allons utiliser dans le robot.</span>

        
        </div>
	)
};

export default article;
