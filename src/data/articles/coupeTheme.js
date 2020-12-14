/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Résumé Sail the World - Règlement Coupe de France Robotique 2021 - Règles de jeu',
	image: images.coupe,
	author: 'Sean Bonnemains',
	preview:
		"Chaque année, le règlement de la Coupe de France de Robotique évolue avec des nouveaux thèmes et de nouvelles missions à effectuer pour pouvoir marquer des points lors des matchs. Cependant, avec les circonstances sanitaires actuelles, une exception a été faite cette année et le thème de l’édition 2020, Sail The World a été repris, à quelques modifications prêt.",
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.coupe} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
					<Link to="themeCoupeIntroduction">Liste des missions</Link>
					<Link to="themeCoupeMap">L'aire de jeu</Link>
					<Link to="themeCoupeMission1">Mission 1: Créer des chenaux</Link>
					<Link to="themeCoupeMission2">Mission 2: Relever les manches à air</Link>
					<Link to="themeCoupeMission3">Mission 3: Allumer le phare</Link>
					<Link to="themeCoupeMission4">Mission 4: Arriver à bon port</Link>
					<Link to="themeCoupeMission5">Mission 5: Hisser des pavillons</Link>
					<Link to="themeCoupeMission6">Mission 6: Prédire la performance</Link>
				</div>
			</div>
            <br/>
            <p>Chaque année, le règlement de la Coupe de France de Robotique évolue avec des nouveaux thèmes et de nouvelles missions à effectuer pour pouvoir marquer des points lors des matchs. Cependant, avec les circonstances sanitaires actuelles, une exception a été faite cette année et le thème de l’édition 2020, Sail The World a été repris, à quelques modifications prêt. Cet article détaille les critères de réussite des différentes missions à effectuer ainsi que le décompte des points de chacune d’entre elles. Par ailleurs, les changements par rapport à l’édition précédente sont facilement identifiables en faisant Ctrl+f ‘Changement’.</p>
            <h2 id="themeCoupeIntroduction">Liste des missions</h2><br/>
            <ul>
                <li><span><b>Créer des chenaux</b> pour rétablir la circulation maritime.</span></li>
                <li><span><b>Relever les manches à air</b> qui ont été balayées par la tempête.</span></li>
                <li><span><b>Allumer le phare</b> pour que les bateaux égarés puissent rentrer au port en toute sécurité.</span></li>
                <li><span><b>Arriver à bon port</b>, afin de mettre les robots au mouillage, à l’abri du vent, à la fin de leur voyage. </span></li>
                <li><span><b>Hisser vos pavillons</b> pour transmettre des messages aux autres navires.</span></li>
                <li><span><b>Estimer votre performance</b>.</span></li>
            </ul><br/>
            <p>Toutes ces actions sont <b>indépendantes les unes des autres et aucun ordre n’est imposé pour les réaliser</b>. Aucune action n’est obligatoire.</p>
            <br/><h2 id="themeCoupeMap">L'aire de jeu</h2><br/>
            <span>Dimensions : 3mx2mx70cm</span><br/><br/>
            <span>CHANGEMENT: Ajout de la zone de haut-fond sous la girouette (12)</span><br/>
            <img src={images.coupe_theme.map} alt="map" />
        
            <br/><h2>Les matchs</h2><br/>
            <p>Les matchs ont une durée de 100 secondes (cela peut finir avant en cas d’accord avec les 2 équipes -par ex robots bloqués dans un coin) et sont précédés d’un temps de préparation de 3 minutes au cours duquel les équipes doivent installer leurs robots, les balises mais également tous les équipements tels que le phare par exemple.</p>
            <p>Le résultat du match se joue au nombre de points obtenus : ceux gagnés grâce à l’accomplissement des missions (voir juste après), ceux découlant du bonus d’estimation du score et ceux perdus par le biais de pénalités de 20 points (ex: anti-jeu, rentrer dans l’adversaire, enlever des bouées appartenant à l’adversaire…). Par ailleurs, chaque équipe non déclarée forfait obtient 5 points supplémentaires.</p>
        
            <br/><h2>Les missions</h2><br/>
            <h4 id="themeCoupeMission1">Mission 1: Créer des chenaux</h4><br/>
            <span>CHANGEMENT: des bouées ont été ajoutées <b>dans la zone de haut fond</b> (sous la boussole). On en a <b>6 nouvelles disposées de manière totalement aléatoire</b>, 3 de parts et d’autres de l’axe de symétrie centrale. Il y en a 3 rouges et 3 vertes dont la répartition est aléatoire. Elles sont <b>accessibles aux 2 équipes.</b></span><br/>
            <img src={images.coupe_theme.map_upView} alt="map-upView" />
            <h5><u>Les bouées et leur position</u></h5><br/>
            <p>50 bouées (25 rouges, 25 vertes) sont accessibles lors d’une partie et sont réparties à divers endroits de la plateforme de jeu.</p>
            <br/><span>Les 30 bouées à la “dérive”, qui se situent directement sur l’aire de jeu.</span>
            <br/><br/>
            <ul>
                <li><span>4 bouées sont directement assignées à chaque port et sont réservées à l’équipe qui détient le port (chaque équipe a 2 ports, donc 8 bouées assignées).</span></li>
                <li><span>8 bouées sont au centre de l’aire et accessibles par n’importe laquelle des équipes. Leurs positions et leurs couleurs sont définies comme sur la figure ci-dessus.</span></li>
                <li><span>6 bouées sont dans la zone de haut fond et sont disposées aléatoirement par paquets de 3 de part et d’autres de l’axe de symétrie de l’aire de jeu. Elles sont accessibles par les 2 équipes.</span></li>
            </ul>
            <br/><span>Les 20 bouées “échouées”, qui se situent sur des écueils situés sur les côtés.</span>
            <br/><br/>
            <ul>
                <li><span>10 bouées sont situées sur les parties latérales et sont réservées à l’équipe dont la zone de départ est la plus proche (5 par équipes, alternance bouées rouge/bouées vertes fixée comme sur la figure ci-dessus).</span></li>
                <li><span>10 bouées situées sur la partie arrière (en haut sur la figure ci-dessus) accessibles par toutes les équipes et disposées aléatoirement selon 3 configurations possibles.</span></li>
            </ul>
            <img src={images.coupe_theme.shuffle_buoy} alt="shuffle-buoy" />
            <h5><u>Les bouées et leur position</u></h5><br/>
            <ul>
                <li><span>Si la bouée est dans le port, cela rapporte 1 point. Elle est considérée dedans même si elle ne l’est que partiellement ou sans contact avec le sol (cf figure a)</span></li>
                <li><span>Si la bouée est sur la ligne de chenal de la couleur associée, cela rapporte 1 point supplémentaire. Il faut que la partie inférieure ou supérieure soit entièrement en contact avec le sol et au moins partiellement sur la ligne (cf figure b)</span></li>
                <li><span>Pour chaque couple de bouées rouge/verte sur les chenaux, 2 points supplémentaires sont accordés.</span></li>
            </ul>
            <img src={images.coupe_theme.validity_buoy} alt="validity-buoy" />
            <h5><u>En bref</u></h5><br/>
            <p>Le schéma suivant résume les informations sur les bouées (disposition et appartenance):</p>
            <img src={images.coupe_theme.map_blueprint} alt="map_blueprint" />
        
            <h4 id="themeCoupeMission2">Mission 2: Relever les manches à air</h4><br/>
            <span>CHANGEMENT : introduction d’une marque (point rose sur la figure) doit être totalement recouverte par le manche à la fin du match pour valider l’action.</span><br/>
            <img src={images.coupe_theme.map_windsock} alt="map_windsock" />
            <h5><u>Les manches à air et leur position</u></h5><br/>
            <p>Chaque équipe dispose de 2 manches à air réservés, situés proches de l’aire de départ. Pour être considéré comme relevé il faut que le mât soit relevé à la verticale à la fin de la partie (l’équipe adverse n’a pas le droit de toucher à ceux de l’autre équipe).</p>
            <br/><h5><u>Comptage des points</u></h5><br/>
            <ul>
                <li><span>5 points si 1 seul manche à air est relevé à la fin.</span></li>
                <li><span>15 points si les deux manches sont relevés à la fin.</span></li>
            </ul>
        
            <br/><h4 id="themeCoupeMission3">Mission 3: Allumer le phare</h4><br/>
            <h5><u>Le phare et sa position</u></h5><br/>
            <p>Le phare se positionne sur la zone rocheuse de l’équipe durant la phase de préparation de la partie. Il est créé par l’équipe avant la compétition et doit respecter les dimensions suivantes:</p>
            <br/><ul>
                <li><span>Profondeur maximum : 222 mm</span></li>
                <li><span>Largeur maximum : 450 mm</span></li>
                <li><span>Hauteur initiale maximum : 300 mm</span></li>
                <li><span>Hauteur minimum de la source lumineuse (déployée) : 700 mm</span></li>
                <li><span>Hauteur déployée maximum : 900 mm</span></li>
            </ul>
            <span>Par ailleurs, il doit peser maximum 3kg.</span><br/><br/>
            <p>Le phare doit être animé physiquement par le robot au début de la partie et doit présenter 3 phases:</p>
            <br/><ul>
                <li><span>une phase initiale avant le début de la partie, où il est positionné sur la zone rocheuse</span></li>
                <li><span>une phase d’allumage du phare, qui doit nécessairement faire suite à un contact physique avec le robot</span></li>
                <li><span>une phase d’élévation du phare, qui peut faire suite à un contact physique ou à une communication sans fil avec le robot</span></li>
            </ul>
            <br/><p>La lumière du phare ne doit pas éblouir mais doit être visible et doit balayer un champ d’au moins 180° (cf figures a, b, c).</p>
            <img src={images.coupe_theme.map_sweep} alt="map-sweep" />
            <h5><u>Comptage des points</u></h5><br/>
            <ul>
                <li><span>2 points si le phare est déposé sur la zone rocheuse pendant la phase de préparation</span></li>
                <li><span>3 points supplémentaires si le phare est activé pendant la partie (et le reste jusqu’à la fin)</span></li>
                <li><span>10 points supplémentaires si le phare est correctement déployé et allumé avant la fin du match</span></li>
            </ul>

            <br/><h4 id="themeCoupeMission4">Mission 4: Arriver à bon port</h4><br/>
            <span>CHANGEMENT : décomptage des points a évolué - voir les points associés !!!</span><br/>
            <br/><h5><u>Les zones de mouillage et leur choix</u></h5><br/>
            <p>A la fin de la partie, le (ou les) robot de l’équipe doivent aller se positionner dans la zone de mouillage Sud ou Nord.</p>
            <img src={images.coupe_theme.map_zones} alt="map-zones" />
            <p>La zone à cibler est indiquée par la girouette, qui va être lancée en début de partie. Cette girouette est équipée d’un tag ArUco 4x4 numéro 17 de 6 cm de largeur en son centre.</p>
            <img src={images.coupe_theme.map_compass} alt="map-compass" />
            <h5><u>Comptage des points</u></h5><br/>
            <p>Pour être considéré dans une zone de mouillage, il faut que la projection verticale du robot soit au moins en partie dans la zone (cf : figure ci-dessous) (si la projection verticale est dans les 2 zones de mouillage, la zone défavorable est conservée).</p>
            <img src={images.coupe_theme.validity_robot} alt="validity-robot" />
            <span>Les points sont décomptés ainsi:</span><br/><br/>
            <p>Si l’équipe a un seul robot :</p>
            <ul>
                <li><span>20 points si le robot est valide dans la zone indiquée par la girouette, (10 pts seulement en 2020)</span></li>
                <li><span>6 points si le robot est valide dans la mauvaise zone (5 pts en 2020)</span></li>
            </ul><br/>
            <p>Si l’équipe a deux robots:</p>
            <ul>
                <li><span>10 points par robot valide dans la zone de mouillage indiquée par la girouette, (10 pts avant si il y avait les deux en 2020)</span></li>
                <li><span>3 points par robot valide dans la mauvaise zone de mouillage, (5pts en 2020)</span></li>
            </ul>

            <br/><h4 id="themeCoupeMission5">Mission 5: Hisser des pavillons</h4><br/>
            <h5><u>Les pavillons et leurs contraintes</u></h5><br/>
            <p>Entre la 95ème seconde et la 100ème seconde du match, les robots doivent hisser au moins  2 pavillons conformes au code international des signaux maritimes (pavillons de type lettre) (pour plus d'informations, voir <a href="https://fr.wikipedia.org/wiki/Code_international_des_signaux_maritimes">ici</a>).Ces pavillons sont recto verso et doivent avoir une surface `{'>'}`=30cm².</p>
            <p>Ils doivent être hissés avant la fin à au moins 35 cm de hauteur (cf figures b et c).</p>
            <img src={images.coupe_theme.robot_positions} alt="robot-positions" />
            <h5><u>Comptage des points</u></h5><br/>
            <ul>
                <li><span>10 points si au moins un des robots de l’équipe a hissé 2 pavillons minimum avant la fin</span></li>
            </ul>

            <br/><h4 id="themeCoupeMission6">Mission 6: Prédire la performance</h4><br/>
            <p>Chaque équipe doit prédire son score final, soit de manière manuscrite avant la partie (typiquement sur une ardoise), soit via un afficheur numérique en continu durant le match et placé sur le robot ou sur le port.</p>
            <br/><h5><u>Comptage des points</u></h5><br/>
            <ul>
                <li><span>Bonus de 0.3*(Score réel) - | écart | = 0.3*(Score réel) - | (Score réel)-(Score estimé) |</span></li>
            </ul>
            <br/><span>Ce bonus est arrondi à l’entier supérieur et ne peut pas être négatif (il vaut 0 dans ce cas).</span>

        </div>
	)
};

export default article;
