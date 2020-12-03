/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Thème de la coupe',
	image: images.coupe,
	author: 'Atlantic Robotic Club',
	preview:
		"En 2021, les robots partiront voguer à travers le monde une nouvelle fois suite à la reconduction du règlement 2020. Ils devront maîtriser l’art de la navigation aﬁn d’arriver à bon port.Les phares et les balises orienteront vos navires. Planiﬁez votre voyage et rapportez le récit de vos aventures. Souquez ferme, moussaillons !",
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.coupe} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
					<Link to="themeCoupeIntroduction">Introduction</Link>
					<Link to="themeCoupeMap">Table</Link>
					<Link to="themeCoupeRules">Règles du tournoi</Link>
					<Link to="themeCoupeSources">Sources</Link>
				</div>
			</div>
			<h2 id="themeCoupeIntroduction">1. Introduction</h2>
			<h5>SAIL THE WORLD</h5>
            <br/>
            <p>En 2021, les robots partiront voguer à travers le monde une 
                nouvelle fois suite à la reconduction du règlement 2020. 
                Ils devront maîtriser l’art de la navigation aﬁn d’arriver 
                à bon port.Les phares et les balises orienteront vos navires.
                Planiﬁez votre voyage et rapportez le récit de vos aventures.
                Souquez ferme, moussaillons !</p>
            <br/>
            <p>Le règlement complet de la coupe est disponible <a href="https://www.coupederobotique.fr/wp-content/uploads/E2021_Rules_FR.pdf">ici</a>.
            Le thème de cette année 2021 est le même que celui de l'année dernière, cependant il y a quelques légères modifications.
                L'ensemble de ces modifications sont listées <a href="https://www.coupederobotique.fr/wp-content/uploads/E2021_Changes_FR.pdf">ici</a>.
            </p>
			<h2 id="themeCoupeMap">2. Table</h2>
            <p>Lors de cette édition, les deux équipes vont s'affronter sur la table suivante:</p>
            <img src={images.coupe_theme.map} alt="table"></img>
			<h2 id="themeCoupeRules">3. Règles du tournoi</h2>
            <p>Les règles du tournoi sont les suivantes:</p>
            <br/>
            <ul>
                <li>Les matchs ont une durée de 100 secondes</li>
                <li>Au signal de l’arbitre, chaque robot est mis en marche.
                    En aucun cas il n’est permis de toucher aux robots,
                    aux éléments de jeux et à l’aire de jeu durant le match.</li>
                <li>Les points sont comptés de la façon suivante:
                    <ul>
                        <li>1 point par bouée valide dans le port;</li>
                        <li>1 point supplémentaire par bouée valide sur la ligne de chenal de la même couleur;</li>
                        <li>2 points par paires de bouées valides sur les lignes de chenaux d’un même port. Une paire valide est
                            composée d’une bouée verte et d’une bouée rouge;<br></br>
                            <img src={images.coupe_theme.validite_bouee} alt="validite_bouee"></img>
                        </li>

                        <li>5 points si une seule manche à air est relevée à la fin du match;</li>
                        <li>15 points si les deux manches à air sont relevées en fin de match;</li>
                        <li>2 points pour avoir déposé le phare sur la zone zone rocheuse avant le début match;</li>
                        <li>3 points supplémentaires pour avoir activé le phare durant le match</li>
                        <li>10 points supplémentaires si le phare est correctement déployé et allumé avant la fin du match.</li>
                        <li>Si l'équipe a un robot, 20 points si le robot est valide dans la zone de mouillage indiquée par la girouette et 6 points si le robot est valide dans l’autre zone de mouillage;</li>
                        <li>Si l'équipe a deux robots, 10 points par robot valide dans la zone de mouillage indiquée par la girouette et • 3 points par robot valide dans l’autre zone de mouillage;</li>
                        <li>10 points si au moins un robot parvient à hisser ses pavillons;</li>
                        <li>Le bonus d’estimation est calculé de la façon suivante : Bonus = (0.3 x Score) - Écart</li>
                        <li>5 points bonus sont attribués à toutes les équipes qui ne sont pas "forfait"</li>
                    </ul>
                </li>
            </ul>

            <h2 id="themeCoupeSources">4. Sources</h2>
            <a href="https://www.coupederobotique.fr/edition-2021/le-concours/thematique/">Site internet de l'édition 2021 de la coupe</a>
		</div>
	)
};

export default article;
