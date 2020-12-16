/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: 'Réalisation de la table',
	image: images.table.pieces,
	author: 'Aziz Sellami',
	preview:
		"Afin de pouvoir tester notre robot dans des conditions similaires à la Coupe de Robotique, il est nécessaire de recréer l’aire de jeu le plus fidèlement possible. C’est pourquoi nous avons tout d’abord récupéré l’ancienne table du club de robotique de Télécom Bretagne et nous avons modélisé les pièces manquantes pour les réaliser au Fablab de Brest.",
	body: (
		<div className="article">
			<div className="contents">
				<img src={images.table.pieces} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
					<Link to="makingTableIntroduction">Introduction</Link>
					<Link to="makingTableModelisation">Modélisation 3D</Link>
					<Link to="makingTableDrawing">Dessin en vectoriel</Link>
					<Link to="makingTableResults">Premiers résultats</Link>
				</div>
			</div>
			<h2 id="makingTableIntroduction">1. Introduction</h2>
            <p>Afin de pouvoir tester notre robot dans des conditions similaires à la Coupe de Robotique, il est nécessaire de recréer l’aire de jeu le plus fidèlement possible. C’est pourquoi nous avons tout d’abord récupéré l’ancienne table du club de robotique de Télécom Bretagne et nous avons modélisé les pièces manquantes pour les réaliser au Fablab de Brest.</p>
            <img src={images.table.map} alt="map" /><br/><br/>
            
			<h2 id="makingTableModelisation">2. Modélisation 3D</h2>
            <span>Voici les pièces que nous avons modélisé en 3D sur le logiciel Fusion 360:</span>
            <br/><img src={images.table.pieces} alt="pieces" /><br/><br/>
			
            <h2 id="makingTableDrawing">3. Dessin en vectoriel</h2>
            <span>Afin d’exploiter la découpeuse laser du Fablab, il a fallu faire des dessins en 2 dimensions sur le logiciel Inkscape. Voici quelques dessins:</span>
            <br/><img src={images.table.drawings} alt="drawings" /><br/><br/>
            
            <h2 id="makingTableResults">4. Premiers résultats</h2>
            <span>Manche à air:</span><br/>
            <img src={images.table.windsock} alt="windsock" /><br/>
            <p>Découpée par découpeuse laser, nous avons obtenu une manche à air. Elle a été découpée en plusieurs pièces du à des contraintes matérielles: la pièce est de 22 mm d’épaisseur alors que la découpeuse découpe au maximum 10 mm.</p>
            





        </div>
	)
};

export default article;
