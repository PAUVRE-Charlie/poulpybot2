/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Stratégie de l’ARC vis à vis de la Coupe de France de Robotique',
	image: images.strategy.map_blueprint,
	author: 'Maxence Nesme',
	preview:
		"Après observation des match disputés cette année nous avons remarqué que la phase de détection et classement des bouées sur les bandes de couleurs des ports était une étape chronophage et souvent peu rentable pour les équipes avec peu d’expérience. C’est pourquoi notre stratégie de base consiste en la collecte des points ne nécessitant que très peu (voir aucune) de détection de couleurs et n’ayant que peu de chances (ibid) d’être contesté par l’adversaire.",
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.strategy.map_blueprint} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
					<Link to="strategyIntroduction">Rappels du système de comptage de points</Link>
					<Link to="strategyAnalysis">Analyse</Link>
					<Link to="strategyRobot">Stratégie de base pour un robot</Link>
				</div>
			</div>
			<h2 id="strategyIntroduction">1. Rappels du système de comptage de points</h2>
            <p>L'aire de jeu:</p>
            <img src={images.strategy.map} alt="map" /><br/><br/>
            <img src={images.strategy.map_blueprint} alt="map-blueprint" /><br/><br/>
            <p>On rappelle le nombre de point obtenus par mission accomplis:</p><br/>
            <h5><u>Manches à air:</u></h5><br/>
            <ul>
                <li><span>5 points si 1 seul manche à air est relevé à la fin</span></li>
                <li><span>15 points si les deux manches sont relevés à la fin</span></li>
            </ul><br/>
            <h5><u>Phare:</u></h5><br/>
            <ul>
                <li><span>2 points si le phare est déposé sur la zone rocheuse pendant la phase de préparation</span></li>
                <li><span>3 points supplémentaires si le phare est activé pendant la partie (et le reste jusqu’à la fin)</span></li>
                <li><span>10 points supplémentaires si le phare est correctement déployé et allumé avant la fin du match</span></li>
            </ul><br/>
            <h5><u>Arriver à bon port:</u></h5><br/>
            <ul>
                <p>Si l’équipe a un seul robot:</p>
                <li><span>20 points si le robot est valide dans la zone indiquée par la girouette</span></li>
                <li><span>6 points si le robot est valide dans la mauvaise zone</span></li>
                <br/><p>Si l’équipe a 2 robots:</p>
                <li><span>20 points si les deux robots sont valides dans la zone de mouillage indiquée par la girouette</span></li>
                <li><span>6 points si les deux robots sont valides dans la mauvaise zone de mouillage</span></li>
                <li><span>13 points si un des deux robots est valide dans la zone de mouillage indiquée par la girouette</span></li>
                <li><span>0 point si les deux robots sont valides mais dans des zones de mouillage différentes</span></li>
            </ul><br/>
            <h5><u>Pavillons:</u></h5><br/>
            <ul>
                <li><span>10 points si au moins un des robots de l’équipe a hissé 2 pavillons minimum avant la fin</span></li>
            </ul><br/>
            <h5><u>Bouées:</u></h5><br/>
            <p>Les 30 bouées à la dérive, qui se situent directement sur l’aire de jeu.</p>
            <ul>
                <li><span>4 bouées sont directement assignées à chaque port et sont réservées à l’équipe qui détient le port (chaque équipe a 2 ports, donc 8 bouées assignées).</span></li>
                <li><span>8 bouées restantes sont au centre de l’aire et accessibles par n’importe laquelle des équipes.</span></li>
                <li><span>6 bouées sont dans la zone de haut fond et sont disposées aléatoirement par paquets de 3 de part et d’autres de l’axe de symétrie de l’aire de jeu. Elles sont accessibles par les 2 équipes.</span></li>
            </ul><br/>
            <p>Les 20 bouées “échouées”, qui se situent sur des écueils situés sur les côtés.</p>
            <ul>
                <li><span>10 bouées sont situées sur les parties latérales et sont réservées à l’équipe dont la zone de départ est la plus proche (5 par équipes, alternance bouées rouge/bouées vertes fixée comme sur la première figure).</span></li>
                <li><span>10 bouées situées sur la partie arrière (en haut sur la première figure) accessibles par toutes les équipes et disposées aléatoirement selon 3 configurations possibles.</span></li>
            </ul><br/>
            <h5><u>Prédire la performance:</u></h5><br/>
            <ul>
                <li><span>Bonus de 0.3*(Score réel) - | écart | = 0.3*(Score réel) - | (Score réel)-(Score estimé) |</span></li>
            </ul><br/>

			<h2 id="strategyAnalysis">2. Analyse</h2>
			<p>Après observation des match disputés cette année nous avons remarqué que la phase de détection et classement des bouées sur les bandes de couleurs des ports était une étape chronophage et souvent peu rentable pour les équipes avec peu d’expérience. C’est pourquoi notre stratégie de base consiste en la collecte des points ne nécessitant que très peu (voir aucune) de détection de couleurs et n’ayant que peu de chances (ibid) d’être contesté par l’adversaire.</p>
            <br/><p>Au vu du contexte actuel, l’organisation et la réalisation de deux robots nous semble difficile c’est pourquoi notre stratégie s’applique pour la réalisation d’un robot. Se voulant évolutive, elle permet d’être adaptée, modulée et améliorée en fonction de nos performances.</p>
            <br/><span>La collecte de ces points fondamentaux est avantageuse pour deux choses:</span>
            <br/><br/><ul>
                <li><span>Ce sont des points statiques c'est-à-dire que la prise en compte de l’adversaire n’est pas une condition prépondérante. Cette stratégie permet donc à notre robot d’avoir une certaine stabilité dans le résultat final, et d’axer la construction du robot sur la garantie de réalisation des objectifs définis.</span></li>
                <li><span>Elle permet dans une bonne partie des cas de faire mieux, en terme de score final, que les robots réalisant le classement des bouées sur les chenaux de couleurs.</span></li>
            </ul>

            <h2 id="strategyRobot">3. Stratégie de base pour un robot</h2>
            <span>Stratégie sans détection:</span>
            <br/><br/><ul>
                <li><span>Faire fonctionner le phare: 15 points</span></li>
                <li><span>Relever les manches à air: 15 points</span></li>
                <li><span>Récupérer les bouées des écueils et les déposer sur la ligne la plus proche sans tri de couleurs: 19 points à minima</span></li>
                <li><span>Afficher les pavillons: 10 points</span></li>
                <li><span>Aller dans le port sans détection: entre 6 et 10 points.</span></li>
                <li><span>Détection de l’adversaire: Arrêt du robot si robot adverse trop proche.</span></li>
                <li><span>Estimation à la main: entre 0.3*65 - 4 = 15 points et 0.3*69 - 0 = 20 pts</span></li>
            </ul><br/>
            <p>TOTAL =  80-85 points</p>
        </div>
	)
};

export default article;
