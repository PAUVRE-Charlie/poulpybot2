/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Test des capacités de nos moteurs',
	image: images.motor_article.experience,
	author: 'Kamil Takhi',
	preview:
		'Nous avons trouvé des Maxon DC motor 118751 de l’ancien club robotique sur le site de Nantes. Ils ont été trouvé avec un réducteur PLG32 36:1 et des capteurs incrémentaux Faulhauber HEDL-5540.',
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.motor_article.experience} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
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
			<p>Petit coup dur! On pensait avoir accès au labo de l’école dès la rentrée des vacances de la Toussaint 2020 pour effectuer les tests, mais le confinement a frappé. Cet évènement a entraîné de nombreux retards, et notamment le fait de devoir faire cette expérience tant bien que mal à la maison. Grâce à une équipe motivée qui nous soutient dans l’école, nous avons réussi à obtenir tout de même un peu de matériel, dont une alimentation de laboratoire.</p>
			<p>Tout d’abord nous avons modélisé la poulie et un support dimensionné pour notre moteur sur le logiciel Fusion 360. Après avoir choisi la précision (élevée) et le taux de remplissage (75% étant donné que l’on souhaite un rendu suffisamment solide pour ne pas se déformer sous l’effet du poid à soulever), on a fait imprimer notre modèle. Voici le rendu:</p>
			<br/><div className="multipleImages">
				<img src={images.motor_article.disk} style={{width: '40%'}} alt="disk"/>
				<img src={images.motor_article.shelf} style={{width: '40%'}} alt="shelf"/>
			</div><br/>
			<p>Reste ensuite à trouver un procédé pour avoir à la maison du fil suffisamment solide et des masses pouvant aller jusqu’à 4kg… N’ayant pas trop d’alternatives, nous avons opté pour une solution originale! des boules de pétanque et du fil électrique! Cela marche tant bien que mal, mais nous n’avons pas pu faire de mesure exacte du poids lorsque celui-ci dépassait 2kg, faute de matériel.</p>
			<p>L’utilisation du fil électrique a posé un souci inattendu, le fait qu’il n’y ait pas suffisamment de place pour s’enrouler autour de la poulie, c’est pourquoi on a accolé deux bouts de carton pour augmenter la profondeur de la gorge de poulie. En montant à 18V en commande, on pouvait voir vaguement l'équivalent de 3,5kg se soulever, mais l’expérience est bancale car la poulie n’est pas totalement solidaire et le système d’enroulement n’est pas optimal…</p>
			<img src={images.motor_article.experience} alt="experience"/>

			<h2 id="moteurConclusion">5. Conclusion</h2>
			<p>Tout ce que l’on peut en déduire pour l’instant, c’est que le moteur a l’air d’être de bonne qualité et devrait amplement suffire aux utilisations qu’on en fera cette année, mais il faudra vérifier plus proprement cela une fois le laboratoire ouvert. Cela n'est pas inutile cependant car nous conforte dans notre choix de métal et de dimension pour la base roulante du robot.</p>
		</div>
	)
};

export default article;
