/* This file store an article used in this website */

/* React imports */
import { Link } from 'react-scroll';

/* Styles imports */
import './articleStyle.css';

/* Data imports */
import images from '../images';
import videos from '../videos';

const article = {
	title: "Simulation",
	image: images.simulation.simulation,
	author: 'Aziz Sellami',
	preview:
		'Suite à l’impossibilité d’un prototypage physique dû au contexte sanitaire, la simulation du robot est apparue comme solution idéale pour pouvoir prototyper et tester les différentes solutions techniques pour le robot. De plus, la simulation a pour avantage de pouvoir tester aisément le robot sur différents scénarios et offre une grande flexibilité.',
	body: (
		<div className="article">
            <div className="contents">
				<img src={images.simulation.simulation} alt="backgroundTableOfContents" />
				<h1>Sommaire</h1>
				<div>
                    <Link to="simulationObjectif">Objectif</Link>
                    <Link to="simulationSolutionLogicielle">La solution logicielle</Link>
                    <Link to="simulationPresentation">Présentation du logiciel</Link>
                    <Link to="simulationTest">Simulation et test d'éléments de la détection</Link>
                    <Link to="simulationReferences">Références</Link>
				</div>
			</div>
            <h2 id="simulationObjectif">1. Objectif</h2>
			<p>Suite à l’impossibilité d’un prototypage physique dû au contexte sanitaire, la simulation du robot est apparue comme solution idéale pour pouvoir prototyper et tester les différentes solutions techniques pour le robot. De plus, la simulation a pour avantage de pouvoir tester aisément le robot sur différents scénarios et offre une grande flexibilité.</p>
            <h2 id="simulationSolutionLogicielle">2. La solution logicielle</h2>
            <div className="sideViewImage">
                <img src={images.simulation.logo_webots} style={{margin: '0 1rem 0 0'}} alt="logo_webots"></img>
                <span>Webots est une application open-source et multi-plateforme utilisée pour la simulation de robots. Il fournit un environnement de développement complet pour modéliser, programmer et simuler un robot. Il a été conçu pour une utilisation professionnelle, et est largement utilisé dans l’industrie, l’éducation et la recherche. Cyberbotics Ltd. maintient Webots en tant que logiciel principal depuis 1998.</span>
            </div>
            <h2 id="simulationPresentation">3. Présentation du logiciel</h2>
            <img src={images.simulation.interface} alt="interface"/>
            <p>L’interface permet d'interagir avec les éléments de la simulation, de visualiser la simulation, de visualiser les capteurs, ainsi que de coder directement le contrôleur du robot.</p>
            <h2 id="simulationTest">4. Simulation et test d'éléments de la détection</h2>
            <h3>Test LIDAR</h3><br/>
            <p>Nous avons simuler l’utilisation d’un LIDAR sur un robot possédant un algorithme d’évitement d’obstacle simple pour valider la capacité du LIDAR à détecter les bouées sur le terrain.</p>
            <br/>
            <h4>Le robot</h4>
            <br/>
            <div className="sideViewImage">
                <img src={images.simulation.simple_model} style={{width: '40%', maxWidth:'20rem', margin: '0 1rem 0 0'}} alt="robot_simple_model"></img>
                <span>Il s’agit d’un robot à quatres roues motrices, équipé de deux capteurs de distances.</span>
            </div>
            <br/>
            <h4>Le LIDAR</h4>
            <br/>
            <div className="sideViewImage">
                <img src={images.simulation.lds} style={{width: '40%', maxWidth:'20rem',margin: '0 1rem 0 0'}} alt="robot_simple_model"></img>
                <span>LDS-01 - Robotis, très proche du LIDAR que l’on veut utiliser (YDLIDAR)</span>
            </div>
            <br/>
            <span>Spécifications:</span>
            <br/>
            <br/>
            <table>
                <tr>
                    <td>Operating Supply Voltage</td>
                    <td>5V DC ±5%</td>
                </tr>
                <tr>
                    <td>Light Source</td>
                    <td>Semiconductor Laser Diode(λ=785nm)</td>
                </tr>
                <tr>
                    <td>LASER safety</td>
                    <td>IEC60825-1 Class 1</td>
                </tr>
                <tr>
                    <td>Current consumption</td>
                    <td>400mA or less (Rush current 1A)</td>
                </tr>
                <tr>
                    <td>Detection distance</td>
                    <td>120mm ~ 3,500mm</td>
                </tr>
                <tr>
                    <td>Interface</td>
                    <td>3.3V USART (230,400 bps) 42bytes per 6 degrees, Full Duplex option</td>
                </tr>
                <tr>
                    <td>Ambient Light Resistance</td>
                    <td>10,000 lux or less</td>
                </tr>
                <tr>
                    <td>Sampling Rate</td>
                    <td>1.8kHz</td>
                </tr>
                <tr>
                    <td>Dimensions</td>
                    <td>69.5(W) X 95.5(D) X 39.5(H)mm</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>Under 125g</td>
                </tr>
            </table>
            <br/>
            <h4>La simulation</h4>
            <video controls src={videos.simu_modelisation_3D} />
            <br/>
            <h4>Conclusion</h4>
            <br/>
            <p>On voit effectivement que toutes les bouées sont détectées et se traduisent par un “trou” sur le demi-cercle de détection. On peut donc confirmer que le LIDAR est une solution viable pour la détection de bouées.</p>
            <img src={images.simulation.simulation} alt="robot_simple_model"></img>
            <h2 id="simulationReferences">5. Références</h2>
            <a href="https://www.coupederobotique.fr/edition-2020/le-concours/thematique/">Règlement de la coupe de Robotique</a>
            <br/>
            <a href="https://github.com/robotique-ecam/simulation-world">Environnement de simulation Webots</a>
            <br/>
            <a href="https://www.robotis.us/360-laser-distance-sensor-lds-01-lidar/">LIDAR LDS-01</a>
        </div>
	)
};

export default article;
