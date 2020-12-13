/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';

const article = {
	title: "Détecteur de couleur",
	image: images.detection_color.arduino,
	author: 'Andrès Sierra',
	preview:
		'L’un des plus grands enjeux en robotique est de permettre au robot d’appréhender son environnement – par la détection d’obstacles ou de points d’intérêts - afin de pouvoir prendre des décisions motrices en conséquence : par exemple, si un mur est détecté, le robot fait demi-tour.',
	body: (
		<div className="article">
            <div className="contents">
				<img src={images.detection_color.arduino} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
                    <Link to="detectionColorIntro">Introduction</Link>
                    <Link to="detectionColorNeeds">Définition des besoins</Link>
                    <Link to="detectionColorSelection">Sélection</Link>
                    <Link to="detectionColorUse">Mise en oeuvre et codification</Link>
				</div>
			</div>
            <h2 id="detectionColorIntro">1. Introduction</h2>
            <p>Dans le cadre de notre stratégie, il est nécessaire de classer la couleur de chacune des bouées collectées par notre robot et de les placer ensuite dans les chenaux pour reconstituer la balistique, c'est-à-dire les placer correctement sur les lignes de chenal dans les ports, en étant de préférence triées par couleur.</p>
            
            <h2 id="detectionColorNeeds">2. Définition des besoins</h2>
            <p>Il est nécessaire de définir les besoins de détection de couleur de chacune des bouées et ensuite, leur emplacement sur les routes dans les ports. Pour cela, notre détecteur doit pouvoir le faire :</p>
            <br/><ul>
                <li><span>Détecter les couleurs verte et rouge des bouées et de la route du port.</span></li>
                <li><span>Avoir une marge d'erreur minimale au moment de la détection.</span></li>
            </ul><br/>
            <p>Pour détecter le trajet du port, il est nécessaire que le capteur choisi puisse couvrir une grande partie du canal afin de réduire la marge d'erreur, c'est-à-dire que les dimensions du capteur soient inférieures à la largeur du chenal.</p>
            <img src={images.detection_color.harbor} style={{width: '40%', margin: '0 30%'}} alt="harbor"/>
            <p>Comme on peut le voir sur l'image, la largeur de chaque chenal correspond à 30 mm, ce qui est une valeur de contrainte pour notre sélection du détecteur.</p>

            <h2 id="detectionColorSelection">3. Selection</h2>
            <p>Dans notre phase de sélection, deux détecteurs de couleur ont été présélectionnés, dont chacun sera analysé en tenant compte des caractéristiques requises pour la réalisation de notre stratégie. Les deux capteurs sont:</p>
            <br/><ul>
                <li>
                    <span>Capteur de couleur pour Arduino, TCS3200</span><br/>
                    <img src={images.detection_color.sensor_TCS3200} style={{width: '30%', margin: '0 35%'}} alt="TCS3200"/>
                    <span>Ce capteur de couleurs permet la détection d'une gamme presque illimitée de couleurs. Il est composé d'un ensemble de photodétecteurs avec des filtres rouges, bleus, verts ou non filtrés.</span>
                </li><br/>
                <li><span>Capteur de couleur RGB, TCS34725</span><br/>
                    <img src={images.detection_color.sensor_TCS34725} style={{width: '30%', margin: '0 35%'}} alt="TCS3200"/>
                    <span>Le TCS34725 est un système de mesure numérique des couleurs entièrement intégré qui fournit des valeurs RVB et claires. La communication avec le capteur est assurée par I2C afin qu'il puisse être lu à partir d'un processeur comme Arduino.</span>
                </li><br/>
            </ul><br/>
            <p>Le tableau suivant présente les principales caractéristiques de chacun des capteurs qui ne nous permettent pas de choisir le bon capteur en respectant notre définition des besoins et des contraintes.</p>
            <img src={images.detection_color.table_sensors} alt="table_sensors" />
            <p>En termes de dimensions, elles sont toutes deux inférieures à la largeur du canal, ce qui permet aux deux capteurs de couvrir toute la zone du canal du port pour en détecter la couleur, le capteur TCS34725 étant lui aussi plus petit.</p>
            <p>De plus, l'une des différences du TCS34725 par rapport au TCS3200, est qu'il ne peut détecter que les couleurs de base. Le TCS34725 est capable de fournir une mesure RVB relativement précise de la couleur mesurée grâce au filtre bloquant les IR, intégré dans la puce, qui permet de mesurer les couleurs avec précision en réduisant l'effet influencé par la lumière ambiante.</p>
            <p>En tenant compte de ce dernier et des dimensions du capteur, le capteur TCS34725 a été sélectionné pour notre stratégie.</p>

            <h2 id="detectionColorUse">4. Mise en oeuvre et codification</h2>
            <p>Pour tester notre capteur, nous l'implanterions à Arduino comme indiqué ci-dessous:</p>
            <img src={images.detection_color.arduino} alt="arduino" />
            <p>En utilisant le code suivant dans Arduino, qui nous permet de lire les valeurs RVB prises par le capteur et de déterminer ensuite la couleur reçue.</p>
            <br/><img src={images.detection_color.code} style={{width: '100%', margin:'0'}} alt="code" />
            <p>Le but de ce test est de trouver la gamme sur l'échelle RVB (0 - 255 bits) dans laquelle se trouvent les couleurs qui nous intéressent, à savoir le rouge et le vert.</p>
        </div>
	)
};

export default article;
