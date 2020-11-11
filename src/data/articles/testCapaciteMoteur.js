/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Test des capacités de nos moteurs',
	image: images.motor_article.motor,
	author: 'Kamil Takhi',
	preview:
		'Nous avons trouvé des Maxon DC motor 118751 de l’ancien club robotique sur le site de Nantes. Ils ont été trouvé avec un réducteur PLG32 36:1 et des capteurs incrémentaux Faulhauber HEDL-5540.',
	body: (
		<div className="article">
			<div className="contents">
				<h1>Sommaire</h1>
				<div style={{ margin: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Link to="moteurIntroduction">Introduction</Link>
					<Link to="moteurDefinitionDesBesoins">Définition des besoins</Link>
					<Link to="moteurProtocoleExperimental">Protocole expérimental</Link>
					<Link to="moteurExperience">Expérience</Link>
					<Link to="moteurConclusion">Conclusion</Link>
				</div>
			</div>
			<h2 id="moteurIntroduction">1. Introduction</h2>
			<p>
				Nous avons trouvé des Maxon DC motor 118751 de l’ancien club robotique sur le site de Nantes. Ils ont
				été trouvé avec un réducteur PLG32 36:1 et des capteurs incrémentaux Faulhauber HEDL-5540. Voici leurs
				spécifications:
			</p>
			<br />
			<br />
			<h5>Moteurs:</h5>
			<img src={images.motor_article.valuesMinimalVoltage} alt="valuesMinimalVoltage" />
			<br />
			<h5>Réducteurs:</h5>
			<img src={images.motor_article.reducteurs} alt="valuesMinimalVoltage" />
			<br />
			<h5>Codeurs incrémentaux:</h5>
			<img src={images.motor_article.codeurIncremental} alt="valuesMinimalVoltage" />
			<br />
			<div style={{ display: 'grid', placeItems: 'center' }}>
				<h4>PS: Liens des datasheets associées</h4>

				<ul>
					<li>
						Le{' '}
						<a href="https://www.dunkermotoren.com/fr/produits/plgsgstg-reducteurs/detail/8885602007/">
							réducteur
						</a>{' '}
						ou plus en détail{' '}
						<a href="https://www.dunkermotoren.com/uploads/tx_products/downloads/MKS/plg-32-8885602007.pdf">
							ici
						</a>{' '}
						(colonne 36:1)
					</li>
					<li>
						Le{' '}
						<a href="https://www.faulhaber.com/fileadmin/Import/Media/EN_HEDL-5540_DFF.pdf">
							codeur incrémental
						</a>
					</li>
					<li>
						Le <a href="https://www.maxongroup.com/maxon/view/product/118751">moteur à courant continu</a>
					</li>
				</ul>
			</div>
			<br />
			<h2 id="moteurDefinitionDesBesoins">2. Définition des besoins</h2>
			<p>
				La première étape, avant de voir si les moteurs sont suffisants, est de définir nos besoins. Nous allons
				considérer que dans le cas extrême (afin que chaque génération puisse réutiliser ce système de
				motorisation):
			</p>
			<div style={{ display: 'grid', placeItems: 'center', width: '80%', margin: ' 1rem auto' }}>
				<ul>
					<li>Notre Robot pèse 15kg</li>
					<li>On veut aller à vmax=1m/s</li>
					<li>On doit pouvoir gravir des pentes de 20°</li>
					<li>On veut une accélération max de 1 m/s-2</li>
					<li>
						On veut que le robot fonctionne pendant 15 min (3 matchs de 1’30 + les 3 temps de préparation où
						le robot doit être alimenté)
					</li>
				</ul>
			</div>
			<p>
				Cette année, nous avons des roues d’à peu près de 70 cm de diamètre, et l’efficité total du
				motoréducteur est de 67%. On utilise 2 moteurs d'entraînement, et ceux ci fonctionnent sous 18V. Avec
				toutes ces informations, voilà ce que nous stipule le site {' '}
				<a href="https://www.robotshop.com/community/blog/show/dimensionnement-dun-moteur-dentranement">
					RobotShop
				</a>.
			</p>
			<br />
			<img src={images.motor_article.robotshop} alt="valuesMinimalVoltage" />
			<br />Bien entendu, il est très peu probable qu’on se retrouve un jour dan sun situation qui requiert ces
			caractéristiques, mais le fait de pouvoir les atteindre nous conforterait sur la pérennité de la base
			roulante. Si on ne les atteint pas, on s’en contentera.
			<h2 id="moteurProtocoleExperimental">3. Protocole expérimental</h2>
			<p>
				Pour pouvoir valider cela, nous avons mis en place un système permettant d’étudier le couple max fourni
				par notre motoréducteur.
				<br />
				<br />
				Le <b>moto-réducteur</b> sera fixé à l’aide d’un support sur une lourde planche (pour éviter au max les
				vibrations parasites), et sur l’axe du moteur, on vient fixer une poulie avec un rayon suffisamment
				grand pour que l’on ait pas besoin de mettre une charge trop élevée.
				<br />
				<br />
				La <b>vitesse de rotation</b> nous ait donnée par la différence des temps entre 2 fronts montants,
				l’alim de laboratoire nous indique le courant consommé et le voltage fourni (on peut aussi de la sorte
				voir si on a de la marge au niveau des courants max et des intensités max).
				<br />
				Pour ce qui est du couple max, on va se baser sur la relation entre le couple fourni et le couple exercé
				par l’action de la gravité sur une masse suspendu à la poulie: C = r*m*g.
				<br />
				Lorsque l’on arrivera au point critique où le moteur n’arrive plus à remonter la masse, on atteindra
				l’égalité et on déduira le couple maximal qui peut être fourni. Ce système poulie masse pourra aussi
				nous indiquer la puissance qui peut être fournie par le motoréducteur.
				<br />
				<br />
				A priori, sachant que l’on devrait trouver un couple max autour de 1,5 Nm si tout se passe bien, on a
				choisi comme rayon de la poulie r=3,822cm, de sorte à ce que on ait environ une masse maximale à mettre
				de 4kg.
			</p>
			<h2 id="moteurExperience">4. Expérience</h2>
			Photos+résultats
			<h2 id="moteurConclusion">5. Conclusion</h2>
			Peut-on l’utiliser cette année et les année prochaines?
		</div>
	)
};

export default article;
