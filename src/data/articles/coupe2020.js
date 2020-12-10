/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: "L'édition 2020",
	image: images.coupe_edition_2020.image1,
	author: 'Atlantic Robotic Club',
	preview:
		"Cet article produit une analyse rapide de l'édition précédente de la coupe",
	body: (
		<div className="article">
            <div className="contents">
				<img src={images.coupe_edition_2020.image1} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
                    <Link to="coupe2020Thematique">Thématique</Link>
					<Link to="coupe2020Resultats">Résultats</Link>
					<Link to="coupe2020Images">La coupe en images</Link>
				</div>
			</div>
            <h2 id="coupe2020Thematique">1. Thématique: Sail the world</h2>
			<br/>
            <p>La thématique de l'édition 2021 était déjà celle de l'édition précédente. Pour plus de détails sur les règles, voir <a href="https://www.coupederobotique.fr/wp-content/uploads/Eurobot2020_Rules_Cup_OFFICIAL_FR.pdf">ici</a>.</p>
            <img src={images.coupe_edition_2020.image2} alt="coupe2020"></img>
            <h2 id="coupe2020Resultats">2. Résultats</h2>
			<p>Les trois équipes ayant eu les meilleurs résultats lors de cette édition 2020 sont les suivantes:</p>
            <br/>
            <img src={images.coupe_edition_2020.results} alt="results"></img>
            <h2 id="coupe2020Images">3. La coupe en images</h2>
            <iframe title="finaleCoupe2020" src="https://www.youtube.com/embed/QOsNiM6KpSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
	)
};

export default article;
